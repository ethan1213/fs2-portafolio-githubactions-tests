# Portafolio — Ethan

Portafolio personal con **Vite + React + TypeScript**, ruteo con **wouter**, componentes con CSS Modules y deploy automático a **GitHub Pages**. Sigue la estructura y convenciones de [fs2-react-app](https://github.com/docentedev/fs2-react-app).

- Sitio: https://ethan1213.github.io/fs2-portafolio/
- Rutas: `/` (Inicio) · `/proyectos` · `/sobre-mi` · `/contacto`

## Inicio rápido

```bash
npm install
npm run dev      # http://localhost:5173
```

| Comando | Qué hace |
|---|---|
| `npm run dev` | Servidor desarrollo con HMR |
| `npm run build` | Chequeo TS (`tsc -b`) + build a `dist/` |
| `npm run preview` | Previsualiza el build |
| `npm run lint` | Linter (`oxlint`) |

## Estructura

```
src/
  main.tsx          # entry: monta <App />
  App.tsx           # <Router> + <Menu /> + rutas
  index.css / App.css
  data/portafolio.ts  # ← tu información (perfil, proyectos, skills, formación)
  components/       # UI reutilizable: button, card, input, menu, section
  pages/            # vistas: home, projects, about, contact
public/             # favicon, icons, .nojekyll
.github/workflows/  # deploy a Pages
```

Para cambiar el contenido edita solo `src/data/portafolio.ts`.

## Deploy

Repo `fs2-portafolio` → `base: '/fs2-portafolio/'` en `vite.config.ts`. Cada push a `main` redespliega vía `.github/workflows/deploy.yml` (requiere **Settings > Pages > Source: GitHub Actions** una sola vez).
