# Plan: migrar juanroa.dev de Next.js a Astro

Fecha: 2026-10-22 · Estado: aprobado para implementar

## Decisiones

| Tema | Decisión |
|---|---|
| Repo | **Mismo repo, rama nueva `astro-migration` → PR a `main`.** Conserva historial, proyecto de Vercel, dominio y Analytics. Vercel crea un preview por la PR para comparar contra producción; el rollback es un revert. El código Next se borra en la misma PR (no conviven). Opcional después del merge: renombrar el repo en GitHub (`next-personal-website` → `juanroa.dev`); GitHub redirige las URLs viejas. |
| Estructura | **Una sola página** por idioma: `/` (en) y `/es/`. Secciones: Hero → Experiencia → Proyectos → Skills → Estudios → Footer, con nav por anclas. |
| Diseño | **Refresh del look actual**: oscuro, Inter, gradiente + puntos de fondo, nav en píldora, títulos grandes. CSS propio (sin Once UI). |
| Capturas | **Proyectos destacados** (4–6 tarjetas con las mejores capturas); los skills pasan a chips de texto. |
| Stack | Astro 7.x (última estable, hoy 7.4.2), salida estática, TypeScript, CSS plano con custom properties, pnpm. Sin React, sin Tailwind, sin adapter. |

## Qué hay hoy (y qué se va)

Solo `/` y `/about` están activos (`src/app/resources/config.js`). Todo lo demás es plantilla de Once UI "Magic Portfolio" apagada.

**Se elimina por completo:**
- `src/once-ui/` (~60 componentes + tokens SCSS), `next-intl`, `middleware.ts`, `src/i18n/`.
- Rutas apagadas: work, blog, gallery, showcase, y sus `.mdx` (son posts de ejemplo de la plantilla).
- `RouteGuard` + `src/pages/api/authenticate.ts` / `check-auth.ts` (la contraseña era literalmente `'password'`).
- `Mailchimp` (comentado), ruta `/og` dinámica (se reemplaza por imagen estática), `sitemap.ts` (listaba `/blog` y `/work`, que no existen).
- Assets de plantilla: `public/images/gallery/` (fotos de Pexels), `public/images/projects/project-01/` (incluye un mp4).
- Footer "Build your portfolio with Once UI" y el `LICENSE` CC BY-NC de la plantilla: al no quedar código de Once UI ya no aplican. Reemplazar por un LICENSE propio (por defecto MIT para el código, contenido © Juan Roa; confirmar en la PR).
- Deps: next, react, react-dom, next-intl, next-mdx-remote, @next/mdx, @mdx-js/loader, sass, classnames, cookie, gray-matter, remark*, react-icons, react-masonry-css, @floating-ui/react-dom, postcss*, eslint config de Next.

**Se conserva:** contenido de `messages/en.json`, `messages/es.json` y `src/app/resources/content-i18n.js` (experiencia, estudios, skills, proyecto Rodar Libre, redes), `public/images/avatar.jpg`, capturas en `public/images/projects/*` (salvo project-01), favicons y manifest, Vercel Analytics.

## Problemas actuales que la migración corrige

1. **Contenido desincronizado entre idiomas:** ES no tiene Qvision ni Creadev, y tiene `UniversityOfWisconsinITSCMDepartment` donde EN tiene `UniversityOfWisconsinWhitewater`. ES dice "más de 9 años", EN "over 10 years".
2. **TOC fijo se superpone** al avatar y al contenido en desktop (visible a 800 px y a 1440 px).
3. **Home casi vacía:** solo hero + botón a About.
4. Sección "Technical skills" con 19 capturas apiladas: página muy larga.
5. La sección Projects (Rodar Libre) existe en el contenido pero **nunca se renderiza**; además referencia `screenshot_1..3.png`, que no existen (solo hay `rodarlibre.png`).
6. Ubicación mostrada como `America/Bogota` (ID IANA) en vez de "Bogotá, Colombia".

## Arquitectura objetivo

```
astro.config.mjs          site: https://juanroa.dev, i18n, sitemap
vercel.json               redirects 301
src/
  data/profile.ts         ÚNICA fuente de contenido, tipada, cada texto { en, es }
  i18n/ui.ts              strings de UI (nav, títulos de sección, botones) + helper
  layouts/Base.astro      <head> (SEO, hreflang, OG, JSON-LD), fondo, header, footer, Analytics
  components/
    Header.astro          nav en píldora con anclas + switch EN/ES (+ ubicación y reloj opcional)
    Hero.astro            avatar, nombre, rol, bio, ubicación, idiomas, redes
    Experience.astro      3–4 roles recientes completos; el resto en <details> "Experiencia anterior"
    Projects.astro        tarjetas: imagen, título, descripción, tags de stack, link opcional
    Skills.astro          chips agrupados
    Education.astro
    Footer.astro          © año · nombre · iconos de redes
    Icon.astro            SVG inline (github, linkedin, x, mail, globe, chevron, external)
  pages/index.astro       <Home locale="en" />
  pages/es/index.astro    <Home locale="es" />
  pages/404.astro         bilingüe, link a inicio
  styles/global.css       tokens + reset + tipografía + fondo
  assets/projects/…       capturas movidas aquí para optimizarlas con astro:assets
public/                   favicons, manifest, avatar si hace falta, og-en.png, og-es.png, robots.txt
```

**Modelo de contenido** (`src/data/profile.ts`): tipo `Localized<T> = { en: T; es: T }`. Cada experiencia es `{ id, company, url?, start, end | null, role: Localized<string>, bullets: Localized<string[]> }`; las fechas se formatean con `Intl.DateTimeFormat(locale)` (adiós a "Dec/Dic" escritos a mano). Así, una traducción faltante es un error de tipos, no un hueco silencioso.

**i18n:** routing nativo de Astro: `locales: ['en','es']`, `defaultLocale: 'en'`, `prefixDefaultLocale: false`. El switch de idioma es un link simple a la página equivalente. `<html lang>` correcto por página.

## Dirección visual (refresh)

Tokens tomados del sitio en vivo:

| Token | Valor | Uso |
|---|---|---|
| `--bg` | `#0a0a0a` | fondo de página |
| `--text` | `#ffffff` | texto fuerte |
| `--text-weak` | `#d2d2d2` | texto secundario (verificar contraste AA) |
| `--border` | `#3f3f3f` | bordes de tarjetas/píldoras |
| `--surface` | `#0000004d` + `backdrop-filter: blur` | nav y tarjetas |
| `--brand` | `#4de9dc` (aqua) | rol, links, acentos |
| `--accent` | `#fecc55` (amarillo) | iconos pequeños |
| `--glow` | `#924205` / `#081719` | gradiente radial del fondo |

- Fondo: replicar los `radial-gradient` de `src/once-ui/components/Background.tsx` (líneas 49–80) + patrón de puntos de 0.5 px, en CSS puro sobre un pseudo-elemento fijo.
- Tipografía: Inter variable self-hosted (`@fontsource-variable/inter`). Títulos display grandes y apretados (letter-spacing negativo) como hoy.
- Radios: 0.75 rem tarjetas, píldoras `999px` (border "playful" de hoy).
- Animación: fade-up sutil solo en el hero, solo CSS, desactivada con `prefers-reduced-motion`.
- Ancho de contenido ~720–760 px; tarjetas de proyectos en grid de 2 columnas en desktop, 1 en móvil.
- Sin TOC lateral: el header con anclas lo reemplaza.

## Contenido de las secciones

- **Hero:** avatar, "Juan Roa", "Software Engineer & Data Science researcher", bio (unificar a "10+ años"), "Bogotá, Colombia", chips de idiomas, botones de GitHub / LinkedIn / X / Email.
- **Experiencia:** 12 roles (EN es la referencia). Mostrar Qvision, SoilNet, Ruedata y SoilNet Researcher; el resto dentro de `<details>`. Los bullets que hoy van separados por `;` pasan a arrays.
- **Proyectos destacados** (propuesta, ajustar con las capturas):
  1. Digital Agronomist (SoilNet / UWW): `soilnet/digital_agronomist_1|3|5.png`, `UWW/digital_agronomist_approach.png`
  2. Rodar Libre (link a Play Store, stats 500+ installs · 5.0 · sin ads): `rodarlibre/rodarlibre.png`
  3. Bunny Studio, rebuild de AngularJS a React/Next: `bunnystudio/home.png`, `DRI_React_Components.png`
  4. Login widget con Web Components (UruIT): `uruit/bloomberg_login.png`
  5. Ruedata Lite (React Native): `ruedata/ruedata-lite.jpg`
  6. (opcional) Homelab DevOps: `devops/proxmox_grafana.png`

  Solo Rodar Libre tiene descripción hoy. Para los demás, redactar 1–2 líneas a partir de los bullets de experiencia y marcarlas para revisión.
- **Skills (chips):** Frontend (React, Next.js, React Native, TypeScript, Web Components) · Backend (Node.js, Ruby on Rails, Python) · Data (ETL, Machine Learning, SQL: MariaDB/MySQL/PostgreSQL) · DevOps (Linux, Proxmox, Grafana, AWS CI/CD).
- **Estudios:** M.S. Computer Science, University of Wisconsin-Whitewater · Ingeniería de Software, Universidad Cooperativa de Colombia.

## SEO e infraestructura

- `<title>`, description, canonical, `hreflang` en/es/x-default, Open Graph y Twitter por idioma.
- Imagen OG estática 1200×630 por idioma (`public/og-en.png`, `og-es.png`); generarla una sola vez, sin endpoint dinámico.
- JSON-LD `Person` (name, jobTitle, sameAs, worksFor, image).
- `@astrojs/sitemap` con la opción i18n; `public/robots.txt` apuntando al sitemap.
- Favicons y `manifest.webmanifest` copiados tal cual.
- Vercel Analytics: `@vercel/analytics`, componente `@vercel/analytics/astro` en `Base.astro`.
- Redirects 301 en `vercel.json`: `/about` → `/#experience`, `/es/about` → `/es/#experience`, `/en` → `/`, `/en/about` → `/#experience`. Verificar en el preview que el fragmento `#` se conserva; si Vercel no lo permite, redirigir a `/` y `/es/`.

## Fases de implementación (un commit por fase)

1. **Scaffold:** borrar Next/Once UI y la plantilla, iniciar Astro con pnpm, `astro.config.mjs` (site, i18n, sitemap), `global.css` con tokens y fondo, `Base.astro`. `pnpm build` en verde.
2. **Contenido:** construir `profile.ts` desde `messages/*.json` + `content-i18n.js`; reconciliar EN/ES (traducir Qvision y Creadev, resolver la entrada UWW, unificar "10+ años"); mover las capturas usadas a `src/assets/projects/`.
3. **Secciones:** Header, Hero, Experience, Projects, Skills, Education, Footer, 404.
4. **SEO/infra:** meta, hreflang, JSON-LD, OG estáticas, sitemap, robots, favicons, Analytics, `vercel.json`.
5. **QA:** `pnpm astro check` y `pnpm build` limpios; revisar `/` y `/es/` en el navegador a 375, 768 y 1440 px (sin scroll horizontal, sin superposiciones, contraste AA, navegación con teclado y foco visible); Lighthouse ≥ 95 en las cuatro categorías como objetivo.
6. **PR a `main`** con capturas antes/después, la lista de textos a revisar y los pasos manuales de Vercel.

## Criterio de terminado

- `dist/` estático con `/`, `/es/`, `404.html`, sitemap y robots.
- `package.json` sin Next, React ni Once UI: astro, @astrojs/sitemap, @vercel/analytics, @fontsource-variable/inter (+ sharp si hace falta).
- EN y ES con exactamente las mismas entradas.
- El preview de la PR en Vercel se ve como el refresh descrito arriba.

## Pasos manuales (Juan)

1. En Vercel → Project Settings → Build & Development: Framework Preset = **Astro**, Output Directory = `dist` (si quedó fijado a Next.js).
2. Revisar las traducciones nuevas y las descripciones de proyectos que proponga la PR.
3. Confirmar la licencia.
4. Merge. Opcional: renombrar el repo.

## Fuera de alcance (fácil de añadir después)

Blog (Astro content collections + MDX), formulario de contacto o newsletter, link de calendario (`cal.com/jroadev`, hoy desactivado), tema claro.
