import { BANCADA, inconsistenciasDoDominio } from './dominio/dominio';
import { levantarRelatorio } from './modes/verificação';
import { conferirComposicao, sondar, type ResultadoDaSonda } from './devices/sonda';
import { montarRelatorio, montarSonda } from './relatorio/relatorio';
import { Diario, explicarFalha } from './relatorio/diario';

function exigirElemento(id: string): HTMLElement {
  const elemento: HTMLElement | null = document.getElementById(id);
  if (elemento === null) {
    throw new Error(`A página não tem o elemento #${id}.`);
  }
  return elemento;
}

const raizRelatorio: HTMLElement = exigirElemento('relatorio');
const raizSonda: HTMLElement = exigirElemento('sonda');
const raizDiario: HTMLElement = exigirElemento('diario');
const botao: HTMLElement = exigirElemento('sondar');

const diario: Diario = new Diario();
diario.fixarDestino(raizDiario);

const problemas: string[] = inconsistenciasDoDominio(BANCADA);
if (problemas.length > 0) {
  diario.alerta(`O domínio tem inconsistências: ${problemas.join(' ')}`);
}

// A consulta ao suporte é assíncrona porque a API XR responde por promessa: o
// navegador pode precisar consultar o runtime do aparelho antes de saber.
void levantarRelatorio().then((linhas) => {
  montarRelatorio(raizRelatorio, BANCADA, problemas, linhas);
  diario.nota('Consulta sem sessão concluída. A sonda completa espera um toque no botão.');
});

if (!window.isSecureContext) {
  diario.alerta(
    'Esta página não está em contexto seguro. A API XR não é exposta aqui, e o botão vai responder como se o aparelho não tivesse suporte — o que seria mentira sobre o aparelho.',
  );
}

async function executarSonda(): Promise<void> {
  diario.nota('Sondando. Se um visor pedir permissão, aceite: sem ela a sessão não abre.');
  try {
    const resultado: ResultadoDaSonda = await sondar();
    const confronto: string | undefined =
      resultado.emSessao === undefined ? undefined : conferirComposicao(resultado.emSessao);
    montarSonda(raizSonda, resultado, confronto);
    diario.nota('Sondagem concluída e sessão encerrada.');
  } catch (erro: unknown) {
    diario.falha(explicarFalha(erro));
  }
}

botao.addEventListener('click', () => {
  void executarSonda();
});