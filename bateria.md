Especificação completa: Blocos A, B, C e D.

---

# Bloco A — A cena

## Seção 1. Identificação da cena

**Cena escolhida:** Bateria acústica.

Ambiente tridimensional em que o usuário monta uma bateria acústica a partir de peças espalhadas e, depois de montadas, pode tocar seus componentes e ouvir os sons correspondentes.

**Descrição em uma frase:** sala de estudo de bateria, com as peças da mesma a serem montadas; após montada, pode ser tocada.

**Por que escolhemos essa cena:** optamos pela bateria acústica porque a implementação das interações é desafiadora, cada peça precisa reagir ao toque e gerar seu próprio som. A maior armadilha é o áudio espacial: manter o som acompanhando corretamente a posição das peças e do usuário aumenta bastante a complexidade do projeto.

## Seção 2. O que a pessoa faz ali

A cena inicia com a pessoa posicionada na banqueta, como se fosse o baterista. À sua frente, encontra-se o bumbo com o pedal e o suporte de caixa. No lado esquerdo, estão empilhados a caixa, o tom 1, o tom 2, a bolsa de pratos e a bolsa de baquetas, juntamente com a máquina de hi-hat. No lado direito, encontram-se o surdo ainda sem os pés, a estante do prato de condução, a estante do prato de ataque e a bolsa de ferragens.

A partir desse local, é necessário que a pessoa observe o ambiente, identifique cada item e inicie a montagem da bateria. Ela retira da bolsa de ferragens as peças necessárias, fixa os suportes dos tons no bumbo, instala o tom 1 e o tom 2, coloca os pés no surdo e posiciona a caixa e o surdo ao seu redor. Depois, ajusta a posição da máquina de hi-hat e dos suportes de pratos, abre a bolsa de pratos e coloca o hi-hat, o prato de ataque e o prato de condução em seus suportes apropriados. Na montagem, existem peças que precisam ser colocadas em lugares específicos, enquanto outras podem ser ajustadas em altura, distância e ângulo, dependendo da preferência de quem as monta.

**O que se realiza com as mãos:** a pessoa retira, transporta, monta e posiciona os componentes da bateria, além de remover suportes, pratos e baquetas de suas bolsas. No final, usa as baquetas para tocar e verificar cada seção montada.

**Quais são as mudanças trazidas pelo visor:** o olhar está atento à posição real das peças, é necessário olhar para os lados, para baixo e ao redor para localizá-las e acompanhar a montagem. Mudar a posição da cabeça altera o que se pode ver e o que se pode alcançar.

**O que a câmera deve demonstrar em comparação a uma mesa de jogo real:** a câmera deve capturar a pessoa pegando peças de vários lados, alturas e distâncias e trazendo-as para a área de montagem. Deve também documentar os encaixes e os ajustes feitos em relação ao corpo, evidenciando que a posição no espaço é parte da tarefa.

## Seção 3. Inventário de objetos

| Objeto | Quantos | Origem | Move? | Observação |
|---|---:|---|:---:|---|
| Banqueta | 1 | Sketchfab – modelo 3D | Sim | Posição inicial do baterista |
| Bumbo | 1 | Sketchfab – modelo 3D | Não | Começa à frente da banqueta |
| Pedal do bumbo | 1 | Sketchfab – modelo 3D | Não | Já fica junto ao bumbo |
| Caixa | 1 | Sketchfab – modelo 3D | Sim | Começa empilhada do lado esquerdo |
| Tom 1 | 1 | Sketchfab – modelo 3D | Sim | Deve ser encaixado no bumbo |
| Tom 2 | 1 | Sketchfab – modelo 3D | Sim | Deve ser encaixado no bumbo |
| Surdo | 1 | Sketchfab – modelo 3D | Sim | Começa do lado direito, sem os pés |
| Pés do surdo | 3 | Sketchfab – modelo 3D | Sim | Ficam dentro da bolsa de ferragens |
| Suportes dos tons | 2 | Sketchfab – modelo 3D | Sim | Retirados da bolsa e encaixados no bumbo |
| Máquina de hi-hat | 1 | Sketchfab – modelo 3D | Sim | Começa do lado esquerdo |
| Pratos de hi-hat | 2 | Sketchfab – modelo 3D | Sim | Ficam inicialmente na bolsa de pratos |
| Estante do prato de ataque | 1 | Sketchfab – modelo 3D | Sim | Começa do lado direito |
| Prato de ataque | 1 | Sketchfab – modelo 3D | Sim | Retirado da bolsa de pratos |
| Estante do prato de condução | 1 | Sketchfab – modelo 3D | Sim | Começa do lado direito |
| Prato de condução | 1 | Sketchfab – modelo 3D | Sim | Retirado da bolsa de pratos |
| Bolsa de ferragens | 1 | Sketchfab – modelo 3D | Sim | Contém suportes dos tons e pés do surdo |
| Bolsa de pratos | 1 | Sketchfab – modelo 3D | Sim | Contém hi-hat, ataque e condução |
| Bolsa de baquetas | 1 | Sketchfab – modelo 3D | Sim | Contém as baquetas |
| Piso | 1 | Construído no projeto | Não | Delimita a área da montagem |
| Paredes | 3 | Construídas no projeto | Não | Formam o ambiente ao redor da bateria |

## Seção 4. O espaço e as escalas

O cenário ocupa uma área de cerca de **3 m de largura por 3 m de profundidade**, com uma altura de aproximadamente **2,8 m**. Todo o conjunto está apoiado diretamente no chão, como se tratasse de uma bateria montada em um ambiente real.

A banqueta é posicionada aproximadamente no centro do espaço, enquanto o bumbo fica à frente dela, criando espaço lateral para a caixa, os tons, o surdo e os pratos.

### Dimensões dos principais objetos

Para manter os modelos proporcionais entre si, serão consideradas aproximadamente as seguintes dimensões:

- **Bumbo:** 56 cm de diâmetro;
- **Caixa:** 36 cm de diâmetro;
- **Tom 1 e Tom 2:** entre 30 e 33 cm de diâmetro;
- **Surdo:** aproximadamente 41 cm de diâmetro;
- **Hi-hat:** aproximadamente 36 cm de diâmetro;
- **Prato de ataque:** aproximadamente 46 cm de diâmetro;
- **Prato de condução:** aproximadamente 51 cm de diâmetro;
- **Estantes dos pratos:** entre 1,20 m e 1,50 m de altura, dependendo do ajuste;
- **Banqueta:** assento aproximadamente 50 cm acima do chão;
- **Baquetas:** aproximadamente 40 cm de comprimento.

Essas dimensões ajudam a garantir que os modelos permaneçam proporcionais uns aos outros e próximos das dimensões encontradas em uma bateria real.

### Distribuição das peças

As peças que iniciam ao redor do baterista devem permanecer a uma distância suficiente para que possam ser encontradas e alcançadas durante a montagem.

A pilha de peças localizada à esquerda e as ferragens posicionadas à direita ficarão entre **50 cm e 1,0 m da banqueta**, evitando que o usuário precise atravessar o ambiente para executar a tarefa.

### Escala da experiência

No visor, a cena será exibida em **tamanho real, na escala 1:1**.

Dessa forma, o usuário terá a sensação de estar sentado diante de uma bateria de verdade, precisando alcançar, pegar, transportar e encaixar as peças de acordo com suas dimensões e distâncias reais.
---

# Bloco B — As regras

## Seção 5. As ações do usuário

**Pergunta:** o que exatamente a pessoa pode fazer, e o que acontece em cada caso?

A pessoa começa sentada na banqueta, como o baterista, com as peças dispostas à frente e aos lados (bumbo com pedal e suporte de caixa à frente; caixa, tons, surdo, máquina de hi-hat e pratos ao redor). A partir dali, mira, apanha e posiciona cada peça na bateria.

| Ação | O que a pessoa faz | O que o sistema faz | Se não puder |
|------|-------------------|---------------------|--------------|
| **Mirar a peça** | aponta o controle (ou o olhar) para uma peça ao seu redor | a peça ganha um contorno realçado, mostrando que está selecionável | se a mira não está sobre nenhuma peça, nada realça |
| **Apanhar a peça** | aciona o gatilho sobre a peça mirada e mantém pressionado | a peça acompanha a mão | uma peça já montada não é apanhada de volta; ela treme de leve e continua no lugar |
| **Posicionar na base** | leva a peça até a estante/base correspondente e solta o gatilho | a peça assenta na base, trava e dá um som curto de confirmação | recusa e mostra o motivo: base errada para aquela peça, ou peça chegando muito torta |
| **Ajustar a peça** | com uma peça de posição livre já assentada, move altura, distância ou ângulo dentro do permitido | a peça acompanha o ajuste e mantém a nova pose | peças de posição fixa (ex.: bumbo) não se ajustam; ficam na pose única |
| **Bater na peça** | encosta a baqueta (ou a mão) numa peça já montada | a peça toca o som real que lhe cabe: bumbo, caixa, tom 1, tom 2, surdo, chimbal (hi-hat), crash ou ride | uma peça que ainda não foi montada não produz som ao ser tocada |

A coluna **"Se não puder"** é a mais importante e a mais esquecida. Recusas diferentes precisam de mensagens diferentes:
- **base errada** para aquela peça → "essa peça não vai aqui";
- **peça certa, chegando torta** → "gire um pouco para assentar";
- **bateu numa peça ainda solta** → simplesmente não soa, sinalizando que falta montá-la.

## Seção 6. A tarefa e sua validação

**Pergunta:** quando a tarefa está cumprida, e como o sistema sabe disso?

**Estado inicial:** a pessoa está sentada na banqueta. As peças estão dispostas ao seu redor, conforme o Bloco A: à frente, o bumbo (com pedal) e o suporte de caixa; à esquerda, a caixa, o tom 1, o tom 2 e a máquina de hi-hat; à direita, o surdo, a estante do prato de condução e a estante do prato de ataque. Cada peça é um objeto único, pronto para ser apanhado e posicionado (sem etapa de tirar de bolsa ou submontar).

**Estado final (sucesso):** todas as peças previstas estão encaixadas em suas bases, cada uma travada, e cada uma responde ao toque com seu próprio som.

**O que precisa ser verdade para o sistema declarar sucesso:** cada slot da bateria (uma lista fixa de encaixes) está marcado como "ocupado pela peça correta". Quando a contagem de slots ocupados corretamente é igual ao total, a montagem está completa. Para as peças de posição livre, basta estarem assentadas na base certa, a altura/ângulo escolhidos por quem monta não afetam o sucesso.

**Ordem das etapas: livre.** A bateria não exige sequência: qualquer caminho que preencha todos os slots corretos vale. Não importa se você encaixa primeiro o bumbo ou primeiro um prato; o que conta é o conjunto final estar completo.

## Seção 7. Regras de encaixe e tolerâncias

**Pergunta:** quão perto e quão alinhada uma peça precisa estar para ser aceita?

O Bloco A distingue **duas categorias de peça**, e a regra de encaixe respeita as duas:

- **Posição fixa** — a peça só assenta numa pose única na base (ex.: bumbo, suporte de caixa). Depois de travada, não se ajusta.
- **Posição livre** — a peça precisa estar na base certa (encaixe rígido), mas altura, distância e ângulo ficam a critério de quem monta (ex.: caixa, tons, surdo, pratos nas estantes).

Dois números provisórios por encaixe (só o teste no aparelho dará o valor final, mas eles precisam existir agora para haver o que testar):

| Tipo de encaixe | Folga de posição | Folga de ângulo |
|-----------------|------------------|-----------------|
| Peça de **posição fixa** na base (bumbo, suporte de caixa) | **~1 cm** | **~15°** |
| Peça de **posição livre** na base/estante (caixa, tons, surdo, pratos) | **~1 cm** para aceitar o encaixe; depois de aceita, altura/ângulo livres | **~15°** só para aceitar; depois, ângulo ajustável |

**Raciocínio:**
- **Folga grande demais** (ex.: 5 cm) faz a peça "saltar" para o lugar sozinha e a montagem perde sentido, parece que tudo se resolve no ar.
- **Folga pequena demais** (ex.: 1 mm) transforma o encaixe numa tortura de precisão, difícil dentro de um visor onde a mão treme.
- **~1 cm** foi escolhido para que a peça não pareça flutuar, mas ainda seja fácil de assentar. Os **~15°** de ângulo evitam que uma peça entre visivelmente torta, sem exigir alinhamento perfeito.
- Nas peças de posição livre, a tolerância vale só no momento de **aceitar** o encaixe na base; a partir daí, a pessoa move altura e ângulo livremente, como manda o Bloco A.

## Seção 8. Retorno ao usuário

**Pergunta:** como a pessoa percebe o que está acontecendo?

O objeto principal da cena é a **bateria**. As peças presentes são os **tambores** (bumbo, caixa, tom 1, tom 2, surdo) e os **pratos** (chimbal/hi-hat, ataque/crash, condução/ride). Cada peça emite um **som diferente** ao ser tocada.

| Situação | Forma do retorno |
|----------|------------------|
| **Objeto mirado** | contorno/realce de cor na peça sob a mira |
| **Objeto apanhado** | a peça acompanha a mão + leve mudança de brilho para mostrar que está "na mão" |
| **Encaixe aceito** | a peça assenta, trava, e toca um **som curto** de confirmação |
| **Encaixe recusado** | a peça volta suavemente + som/sinal de recusa + a base pisca indicando "não é aqui" ou "gire" |
| **Peça sendo ajustada** | a peça acompanha o movimento de altura/ângulo em tempo real, mostrando a pose atual |
| **Peça tocada (já encaixada)** | o **som real daquela peça** (o retorno mais importante deste projeto) |
| **Tarefa concluída** | todas as peças montadas + um som/acorde curto de conclusão |

O grande trunfo da bateria é o **retorno sonoro imediato**: uma peça que soa ao ser tocada dá resposta na hora. Justamente por isso, a ausência de resposta nas outras ações fica gritante, por isso realce e retorno visual não são "acabamento", entram desde o começo.

**Sobre o som:** comece com **som simples** (o áudio toca quando a peça é atingida, sem posição no espaço). **Espacialização** (som que muda conforme você anda em volta) fica para depois, só se a ancoragem já estiver firme, é o principal risco de escopo deste tema.

---

# Bloco C — A máquina

## Seção 9. Os três regimes

**Pergunta:** o que é diferente na tela, no visor e na câmera?

A bateria é a mesma cena nos três regimes; o que muda é como a pessoa olha, como aponta e age, e a escala. O regime de **tela** é o caso base: roda em qualquer máquina, sem equipamento, e garante que o trabalho avance mesmo quando o visor está com outro grupo.

| Aspecto | Na tela (não imersivo) | No visor (imersivo) | Pela câmera (RA) |
|---------|------------------------|---------------------|------------------|
| **Como se olha** | câmera em órbita, vista de fora; a pessoa gira e aproxima a cena com mouse/toque, mas fica de fora dela | a pessoa está sentada na banqueta, dentro da bateria; virar a cabeça muda o que se vê e o que se alcança | a bateria aparece sobre uma superfície real filmada pela câmera do aparelho; a pessoa anda em volta movendo o próprio aparelho |
| **Como se aponta e age** | cursor do mouse ou toque na tela: clica na peça, arrasta até a base, solta | controle na mão (ou a própria mão): mira com o raio, aperta o gatilho para apanhar, aproxima da base e solta; bate com a baqueta | toque na tela sobre a peça projetada, ou o raio do controle se o aparelho tiver; a mesma ação de apanhar/soltar/bater |
| **Escala da cena** | escala de tela, ajustável pelo zoom; a bateria cabe na janela e não tem tamanho "real" | escala real (1:1): a bateria tem o tamanho que teria na vida, ao alcance dos braços | escala real ancorada no mundo: a bateria ocupa o chão real no tamanho verdadeiro |
| **O que a cena faz de diferente** | tudo visível de uma vez; fácil de conferir a montagem inteira e medir o orçamento de cena | imersão e alcance físico: a pessoa se inclina e estende o braço para pegar cada peça; conforto (sem enjoo) vira parte do projeto | a bateria precisa ficar **ancorada**: continuar exatamente onde foi posta enquanto a pessoa anda em volta; lida com perda de rastreamento |
| **O que não existe neste regime** | não há presença corporal nem alcance físico: a pessoa não "entra" na bateria nem estende o braço | não há vista de fora nem mundo real ao fundo: só a cena virtual; não há como ver a bateria "de cima" toda de uma vez | não há cena isolada: depende de uma superfície real e boa luz; se o rastreamento se perde, a âncora pode sumir — coisa que tela e visor não sofrem |

**Por que a última linha importa:** dizer o que **não** existe em cada regime evita prometer três vezes a mesma coisa. A tela não dá presença; o visor não dá vista de fora nem mundo real; a câmera não funciona sem superfície e luz. São limites diferentes, e é isso que prova que os três regimes foram realmente pensados, e não um só, repetido com outras palavras.

---

# Bloco D — Ativos e plano

## Seção 12. Ativos, formatos e licenças

Para a bateria, vamos usar uma mistura de modelos prontos e peças feitas por código, dependendo da complexidade de cada objeto.

| Objeto | Quantos | Origem | Licença | Move? |
|--------|---------|--------|---------|-------|
| Bumbo | 1 | modelo importado | livre (CC0/CC-BY, a definir) | não |
| Caixa | 1 | modelo importado | livre (CC0/CC-BY, a definir) | sim |
| Tons (toms) | 2–3 | modelo importado | livre (CC0/CC-BY, a definir) | sim |
| Pratos | 2–3 | modelo importado | livre (CC0/CC-BY, a definir) | sim |
| Estantes/suportes | 2–3 | construído por código | própria | não |
| Baquetas | 2 | construído por código | própria | sim |
| Sala de estúdio | 1 | construído por código | própria | não |

Peças com formato complexo e cheio de detalhe (bumbo, caixa, pratos — que têm curva, textura de metal e de couro) vamos pegar de algum banco de modelos com licença livre. Peças mais simples geometricamente (estantes, baquetas) a gente constrói direto por código, porque economiza no orçamento de cena e ainda cobre a parte da disciplina que pede modelagem própria.

Ainda vamos escolher o site/fonte exata dos modelos importados e preencher a coluna de endereço assim que decidirmos.

## Seção 13. Plano de construção por blocos

- **Bloco A:** vocabulário do projeto escrito (o que é substituição vs. sobreposição na nossa cena) e a sonda de capacidades rodando — o ambiente detecta o que cada aparelho oferece e mostra isso na tela.
- **Bloco B:** regime não imersivo completo — a bateria inteira aparece na janela do navegador, com todas as peças no lugar, orçamento de cena medido e cabendo no teto da máquina do laboratório.
- **Bloco C:** interação abstraída funcionando (apontar, apanhar, soltar do mesmo jeito seja com cursor, controle ou toque) e a tarefa de montar a bateria com estado, sabendo dizer quando está "montada" e recusando encaixe errado com explicação.
- **Bloco D:** regime imersivo (visor) funcionando, com escala real da bateria e conforto tratado, sem quedas de quadro que causem mal-estar.
- **Bloco E:** regime de câmera funcionando, com a bateria ancorada numa superfície real e reagindo à perda de rastreamento de forma visível, além da ordem de degradação decidida (o que sai primeiro se a cena não couber no orçamento).

Em todos os blocos, a regra que vamos seguir é: sempre ter algo que roda de verdade ao final, mesmo que pobre, em vez de deixar tudo acumulado para o final.

## Seção 14. Riscos, decisões em aberto e declarações

**Preocupações do grupo:**

- **Calibrar a folga de encaixe do prato na estante** (posição e ângulo): vamos decidir testando no aparelho, indo de uma folga mais larga para mais apertada até achar o ponto que não fica nem frouxo nem impossível de encaixar.
- **Som no regime imersivo pode pesar no orçamento** se tentarmos espacializar cedo demais. Decisão: começar com som simples (sem posição no espaço) e só evoluir para som espacializado se sobrar orçamento depois que a ancoragem estiver funcionando.
- **Rastreamento nas máquinas do laboratório** (pouca luz, superfícies lisas): ainda não sabemos se vai se perder com frequência; vamos descobrir testando no próprio ambiente.

**Declaração de uso de IA:** o grupo usou uma ferramenta de IA (Claude) como apoio na estruturação e redação deste documento de especificação, a partir das decisões de conteúdo tomadas pelo grupo (escolha da cena, o que ela endurece, os riscos levantados). O grupo revisou o texto gerado e confirma que consegue explicar cada decisão registrada aqui.