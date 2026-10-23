import type { Locale, Localized, YearMonth } from '../data/profile';

export const defaultLocale: Locale = 'en';

/** Home page of each locale (English has no prefix). */
export const homePath: Localized<string> = { en: '/', es: '/es/' };

/** Open Graph locale codes. */
export const ogLocale: Localized<string> = { en: 'en_US', es: 'es_CO' };

export const languageName: Localized<string> = { en: 'English', es: 'Español' };

export const sections = ['experience', 'projects', 'skills', 'education'] as const;
export type Section = (typeof sections)[number];

export const ui = {
	skipToContent: { en: 'Skip to content', es: 'Saltar al contenido' },
	sectionsNav: { en: 'Sections', es: 'Secciones' },
	languageNav: { en: 'Language', es: 'Idioma' },
	localTime: { en: 'Local time in Bogotá', es: 'Hora local en Bogotá' },
	nav: {
		experience: { en: 'Experience', es: 'Experiencia' },
		projects: { en: 'Projects', es: 'Proyectos' },
		skills: { en: 'Skills', es: 'Skills' },
		education: { en: 'Education', es: 'Estudios' },
	} satisfies Record<Section, Localized<string>>,
	headings: {
		experience: { en: 'Work experience', es: 'Experiencia laboral' },
		projects: { en: 'Featured projects', es: 'Proyectos destacados' },
		skills: { en: 'Skills', es: 'Habilidades técnicas' },
		education: { en: 'Education', es: 'Estudios' },
	} satisfies Record<Section, Localized<string>>,
	avatarAlt: { en: 'Portrait of Juan Roa', es: 'Foto de Juan Roa' },
	languages: { en: 'Languages', es: 'Idiomas' },
	socialNav: { en: 'Contact and social links', es: 'Contacto y redes' },
	present: { en: 'Present', es: 'Actualidad' },
	dateRangeTo: { en: 'to', es: 'a' },
	earlierExperience: { en: 'Earlier experience', es: 'Experiencia anterior' },
	tech: { en: 'Built with', es: 'Tecnologías' },
	opensInNewTab: { en: '(opens in a new tab)', es: '(se abre en una pestaña nueva)' },
	notFound: {
		title: { en: 'Page not found', es: 'Página no encontrada' },
		body: {
			en: 'The page you are looking for does not exist or has moved.',
			es: 'La página que buscas no existe o cambió de dirección.',
		},
		back: { en: 'Back to home', es: 'Volver al inicio' },
	},
};

export function toLocale(value: string | undefined): Locale {
	return value === 'es' ? 'es' : defaultLocale;
}

/** `2025-12` → `Dec 2025` / `dic 2025` */
export function formatMonth(value: YearMonth, locale: Locale): string {
	const [year, month] = value.split('-').map(Number);
	return new Intl.DateTimeFormat(locale, { month: 'short', year: 'numeric', timeZone: 'UTC' }).format(
		new Date(Date.UTC(year, month - 1, 1)),
	);
}
