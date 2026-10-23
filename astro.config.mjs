// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Production serves www (juanroa.dev answers with a 308 to www), so canonical
// URLs, hreflang and the sitemap must use the www host.
export default defineConfig({
	site: 'https://www.juanroa.dev',
	output: 'static',
	i18n: {
		locales: ['en', 'es'],
		defaultLocale: 'en',
		routing: {
			prefixDefaultLocale: false,
		},
	},
	vite: {
		// Plain CSS only; an inline config stops Vite from picking up a PostCSS
		// config from a parent directory (e.g. a checkout of the old Next.js app).
		css: { postcss: {} },
	},
	integrations: [
		sitemap({
			i18n: {
				defaultLocale: 'en',
				locales: { en: 'en', es: 'es' },
			},
		}),
	],
});
