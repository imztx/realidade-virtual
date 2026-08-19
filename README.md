# realidade-virtual

Projeto em WebXR + Three.js + TypeScript.

## Rodar

```bash
cd webxr-app
npm install
npm run dev
```

## Páginas

- **Andaime** — `https://localhost:5173/` — a cena Three.js que demonstra a montagem da
  máquina WebXR.
- **Bancada** — `https://localhost:5173/bancada.html` — Delimita o domínio, declara os
  três regimes e pergunta a este aparelho o que ele
  suporta. Ainda não desenha nada.

Para abrir em outro aparelho na mesma rede, troque `localhost` pelo endereço `Network`,
mantendo o caminho: `https://SEU-IP:5173/bancada.html`.