# juanroa.dev

Personal site of Juan Roa, built with [Astro](https://astro.build) as a static site and deployed on Vercel.

## Develop

Requires Node.js 22+ and pnpm.

```sh
pnpm install
pnpm dev        # http://localhost:4321
pnpm check      # type-check .astro and .ts files
pnpm build      # static output in dist/
pnpm preview    # serve dist/ locally
```

## Where things live

| Path | What |
|---|---|
| `src/data/profile.ts` | All site content (experience, projects, skills, education, links). Every text is `{ en, es }`, so a missing translation is a type error. |
| `src/i18n/ui.ts` | Interface strings (navigation, section titles, buttons). |
| `src/components/` | One component per section. |
| `src/layouts/Base.astro` | `<head>` (SEO, hreflang, Open Graph, JSON-LD), background, header, footer, analytics. |
| `src/styles/global.css` | Design tokens, reset and background. |
| `src/assets/` | Images optimized at build time by `astro:assets`. |
| `public/` | Files served as-is: favicons, manifest, robots.txt, Open Graph images. |
| `vercel.json` | 301 redirects from the old Next.js URLs. |

English lives at `/` and Spanish at `/es/` (Astro i18n routing, English without prefix).

## License

Code is MIT licensed (see `LICENSE`). Written content, photos and screenshots are © Juan Roa, all rights reserved.
