import type { ImageMetadata } from 'astro';

import avatar from '../assets/avatar.jpg';
import bunnyStudio from '../assets/projects/bunny-studio.png';
import digitalAgronomist from '../assets/projects/digital-agronomist.png';
import homelab from '../assets/projects/homelab.png';
import loginWidget from '../assets/projects/login-widget.png';
import rodarLibre from '../assets/projects/rodar-libre.jpg';
import ruedataLite from '../assets/projects/ruedata-lite.jpg';

export const locales = ['en', 'es'] as const;
export type Locale = (typeof locales)[number];

/** Every text on the site exists in both languages; a missing one is a type error. */
export type Localized<T> = { en: T; es: T };

/** `YYYY-MM` */
export type YearMonth = `${number}-${number}`;

export interface Person {
	firstName: string;
	lastName: string;
	name: string;
	role: Localized<string>;
	bio: Localized<string>;
	location: Localized<string>;
	timeZone: string;
	languages: Localized<string[]>;
	avatar: ImageMetadata;
	email: string;
}

export interface SocialLink {
	id: 'github' | 'linkedin' | 'x' | 'email';
	label: string;
	url: string;
}

export interface Experience {
	id: string;
	company: string;
	start: YearMonth;
	/** `null` while the role is current. */
	end: YearMonth | null;
	role: Localized<string>;
	bullets: Localized<string[]>;
	/** Shown expanded; the rest go under "Earlier experience". */
	featured?: boolean;
}

export interface Project {
	id: string;
	name: Localized<string>;
	context: Localized<string>;
	description: Localized<string>;
	image: ImageMetadata;
	imageAlt: Localized<string>;
	/** `contain` for screenshots whose aspect ratio is far from the 16:10 card. */
	imageFit?: 'cover' | 'contain';
	tags: string[];
	links?: { url: string; label: Localized<string> }[];
	stats?: Localized<string>[];
}

export interface SkillGroup {
	id: string;
	title: Localized<string>;
	items: string[];
}

export interface Education {
	id: string;
	institution: string;
	degree: Localized<string>;
}

export const person: Person = {
	firstName: 'Juan',
	lastName: 'Roa',
	name: 'Juan Roa',
	role: {
		en: 'Software Engineer and Data Science researcher',
		es: 'Ingeniero de Software e Investigador en Data Science',
	},
	bio: {
		en: 'Juan is a Software Engineer with 10+ years of experience in full-stack development, data science, and cloud computing. He excels in leading technical projects, optimizing software performance, and applying machine learning to real-world agricultural challenges.',
		es: 'Juan es un Ingeniero de Software con más de 10 años de experiencia en desarrollo full-stack, data science y cloud computing. Se destaca en liderar proyectos técnicos, optimizar el rendimiento de software y aplicar machine learning a retos del mundo real en la agricultura.',
	},
	location: { en: 'Bogotá, Colombia', es: 'Bogotá, Colombia' },
	timeZone: 'America/Bogota',
	languages: { en: ['English', 'Spanish'], es: ['Inglés', 'Español'] },
	avatar,
	email: 'hello@juanroa.dev',
};

export const seo = {
	title: {
		en: 'Juan Roa · Software Engineer and Data Science researcher',
		es: 'Juan Roa · Ingeniero de Software e Investigador en Data Science',
	},
	description: {
		en: 'Juan Roa is a Software Engineer with 10+ years of experience in full-stack development, data science and cloud computing, based in Bogotá, Colombia.',
		es: 'Juan Roa es Ingeniero de Software con más de 10 años de experiencia en desarrollo full-stack, data science y cloud computing, desde Bogotá, Colombia.',
	},
} satisfies Record<string, Localized<string>>;

export const social: SocialLink[] = [
	{ id: 'github', label: 'GitHub', url: 'https://github.com/roadev' },
	{ id: 'linkedin', label: 'LinkedIn', url: 'https://www.linkedin.com/in/roadev/' },
	{ id: 'x', label: 'X', url: 'https://x.com/jroadev' },
	{ id: 'email', label: 'Email', url: `mailto:${person.email}` },
];

export const experience: Experience[] = [
	{
		id: 'qvision',
		company: 'Qvision Technologies',
		start: '2025-12',
		end: null,
		featured: true,
		role: { en: 'Sr. Full Stack Engineer', es: 'Sr. Full Stack Engineer' },
		bullets: {
			en: ['Implemented several improvements to the UI of internal systems of ACH Colombia.'],
			es: ['Implementé varias mejoras en la interfaz de los sistemas internos de ACH Colombia.'],
		},
	},
	{
		id: 'soilnet',
		company: 'SoilNet LLC',
		start: '2024-08',
		end: null,
		featured: true,
		role: {
			en: 'Data Science Project Supervisor',
			es: 'Data Science Project Supervisor (Investigación)',
		},
		bullets: {
			en: [
				'Led the "Digital Agronomist" project\'s technical development, guiding frontend (React), backend (Node.js), database (MariaDB), and Python ETL implementations.',
				'Applied statistical and machine learning methods to improve the accuracy of nutrient predictions (e.g., nitrogen, phosphorus, potassium) and integrated weather data for a holistic view on nutrient management.',
				'Refined data cleaning and processing techniques to ensure high-quality datasets for agronomic modeling.',
			],
			es: [
				'Dirigí el desarrollo técnico del proyecto "El Agrónomo Digital", dando mentoría y gerenciando el proyecto usando metodologías ágiles a estudiantes de UW-Whitewater en Wisconsin, USA con proyectos de Frontend (React), backend API (Node.js), bases de datos (MySQL/MariaDB) e implementaciones de Python ETL, enfocándose en integración robusta de datos y optimización de modelos.',
				'Apliqué métodos de Estadística Multivariante avanzada y Machine Learning para mejorar los datasets de suelos y cultivos, incrementando considerablemente la precisión en la predicción de nutrientes clave como Nitrógeno, Fósforo y Potasio.',
				'Conduje actualizaciones y mejoras en la limpieza de los datos, imputación y técnicas de procesamiento de datos para asegurar la alta calidad y sostenibilidad de los datasets para modelamiento agronómico.',
			],
		},
	},
	{
		id: 'ruedata',
		company: 'Ruedata Inc',
		start: '2025-04',
		end: '2025-07',
		featured: true,
		role: { en: 'Sr. Frontend Engineer', es: 'Senior Frontend Engineer' },
		bullets: {
			en: [
				'Participated on the system, project design and development of the new Rue Lite Mobile App for Android and iOS using React Native.',
				'Supported decision making for the Rue Lite Mobile app product.',
			],
			es: [
				'Participé en diseño, desarrollo, implementación y despliegue de Ruedata Lite Mobile App para Android, iOS.',
				'Apoyé la toma de decisiones de producto de la app móvil Ruedata Lite.',
			],
		},
	},
	{
		id: 'soilnet-research',
		company: 'SoilNet LLC',
		start: '2024-05',
		end: '2024-08',
		featured: true,
		role: { en: 'Researcher (Soil Science and Agronomy)', es: 'Investigador' },
		bullets: {
			en: [
				'Conducted research for the "Digital Agronomist" project while awaiting STEM OPT authorization.',
				'Mentored interns on data science solutions, covering database design, API integrations, and predictive models for agronomy.',
			],
			es: [
				'Conduje actividades de investigación para "El Agrónomo Digital" mientras esperaba la autorización de empleamiento post-graduación de mi maestría.',
				'Di clases magistrales y mentorías a estudiantes y practicantes de la University of Wisconsin-Whitewater para la implementación de soluciones en Data Science, con enfoque en diseño de bases de datos, integraciones de API REST y modelos predictivos de Machine Learning para Agronomía.',
			],
		},
	},
	{
		id: 'uww',
		company: 'University of Wisconsin-Whitewater',
		start: '2022-08',
		end: '2024-08',
		role: { en: 'Graduate Assistant', es: 'Asistente de Posgrado' },
		bullets: {
			en: [
				'Mentored 20+ students in Python programming courses, enhancing their skills in programming projects.',
				'Graded and reviewed over 500 labs and assignments, providing constructive feedback to support student learning.',
			],
			es: [
				'Realicé mentorías a más de 20 estudiantes en dos cursos de programación con Python por semestre durante 2 años para el departamento de tecnología y cyberseguridad de la universidad.',
				'Califiqué y revisé más de 500 laboratorios de programación, tareas y trabajos de clase. Di retroalimentación constructiva sobre cada uno de ellos para contribuir al aprendizaje y mejora de los estudiantes.',
			],
		},
	},
	{
		id: 'uruit',
		company: 'UruIT',
		start: '2020-11',
		end: '2022-04',
		role: { en: 'Sr. Full Stack Developer', es: 'Sr. Full Stack Developer' },
		bullets: {
			en: [
				'Developed a high-performance login widget using the Native Web Components API, compatible with React and Vue projects.',
				'Reduced technical debt by 60% with a cross-framework solution, enabling faster deployment and streamlined maintenance.',
			],
			es: [
				'Desarrollé un login widget de alto rendimiento utilizando los Web Components API, integrándolo paralelamente en proyectos o microfrontends en React, Vue, Angular y otros para estandarizar la autenticación de usuarios.',
				'Reduje la deuda técnica en un 60% al crear una solución framework multiplataforma que eliminó el código redundante en micro-frontends, permitiendo un despliegue y mantenimiento más ágil para nuevos proyectos.',
			],
		},
	},
	{
		id: 'bunny-studio',
		company: 'Bunny Studio',
		start: '2019-06',
		end: '2020-10',
		role: { en: 'Sr. Full Stack Engineer', es: 'Sr. Full Stack Engineer' },
		bullets: {
			en: [
				'Rebuilt a legacy AngularJS UI system with ReactJS & NextJS, improving page load times by 80% and boosting user engagement.',
				'Resolved critical bugs in systems using Node.js, PHP, Python, and Elixir, and improved code quality through comprehensive reviews.',
			],
			es: [
				'Reconstruí y optimicé el frontend legacy en AngularJS desarrollando una nueva plataforma con ReactJS y NextJS, reduciendo así los tiempos de carga de la página en un 80% por medio de server side rendering para finalmente mejorar significativamente la conversión y retención de usuarios.',
				'Realicé mejoras de los micro-servicios y toda su infraestructura así como resolviendo bugs críticos en sistemas corriendo en docker en Node.js, PHP, Python y Elixir. También me aseguré de la calidad del código por medio de code reviews y aprobaciones de pull requests.',
			],
		},
	},
	{
		id: 'vigpro',
		company: 'VIGPRO S.A.S',
		start: '2018-06',
		end: '2019-06',
		role: { en: 'Sr. Full Stack Developer', es: 'Sr. Full Stack Developer' },
		bullets: {
			en: [
				'Designed a PostgreSQL database and backend with Ruby on Rails and Node.js, optimizing API integrations and reducing costs.',
				'Led three cross-functional teams, ensuring high-quality code and best practices across Ruby, JavaScript, and PHP projects.',
				'Automated CI/CD pipelines for AWS, improving deployment reliability and reducing release times.',
				"Led the launch and deployment of VIGPRO's first iOS and Android app, improving the user experience and expanding market reach.",
			],
			es: [
				'Diseñé e implementé una base de datos en PostgreSQL y una arquitectura de backend en Ruby on Rails y Node.js, optimizando integraciones de API de terceros para proyectos internos de optimización de tarifas para procedimientos quirúrgicos para el sector salud, el cual reducía considerablemente los costos operacionales.',
				'Lideré 3 equipos full-stack realizando revisiones de código y aprobando pull request para código en lenguajes como: Ruby, Javascript y PHP, asegurando la calidad del código y mejores prácticas.',
				'Automaticé los CI/CD pipelines para despliegues en AWS usando Docker y Jenkins, reduciendo así tiempos de despliegue y automatizando la mejora de estabilidad del sistema.',
				'Estuve a cargo del lanzamiento y despliegue de la primera app de VIGPRO para iOS y Android, mejorando la experiencia de usuario y expandiendo el market reach.',
			],
		},
	},
	{
		id: 'imaginamos',
		company: 'Imaginamos Digital Agency',
		start: '2017-12',
		end: '2018-05',
		role: { en: 'Full Stack Developer', es: 'Full Stack Developer' },
		bullets: {
			en: [
				'Developed a high-performance e-commerce platform with NextJS and Redux, boosting online sales for La 14 supermarket.',
				'Enhanced user experience for Cardash through dynamic UI components using React and GraphQL.',
			],
			es: [
				'Lideré el desarrollo de una plataforma de e-commerce de alto rendimiento hecha en NextJS y Redux el cual permitió un aumento significativo de las ventas en el centro comercial La 14.',
				'Desarrollé e implementé componentes dinámicos para la startup Cardash de San Francisco, CA, mejorando la experiencia de usuario e integraciones por medio de React y GraphQL.',
			],
		},
	},
	{
		id: 'devhack',
		company: 'Devhack',
		start: '2017-12',
		end: '2018-07',
		role: {
			en: 'Teacher of React and React Native Courses',
			es: 'Profesor de cursos de React y React Native',
		},
		bullets: {
			en: [
				'Instructed ReactJS courses with a focus on Redux and mobile-first design, mentoring students in modern web development practices.',
			],
			es: [
				'Instruí los cursos de ReactJS enfocados en manejo complejo de estado con Redux y principios de mobile first. Dí mentorías a estudiantes en buenas y modernas prácticas de desarrollo web.',
			],
		},
	},
	{
		id: 'pulpo',
		company: 'PulpoWMS',
		start: '2016-09',
		end: '2017-12',
		role: { en: 'Frontend Developer', es: 'Frontend Developer' },
		bullets: {
			en: [
				'Developed and optimized Material Design web components for Pulpo WMS using React, Redux, and ImmutableJS.',
			],
			es: [
				'Desarrollé y optimicé web components diseñados en Material Design con React Toolbox para la plataforma Pulpo WMS usando React, Redux e ImmutableJS, mejorando la experiencia de usuario y la eficiencia general de la plataforma.',
			],
		},
	},
	{
		id: 'creadev',
		company: 'Creadev',
		start: '2015-01',
		end: '2016-09',
		role: { en: 'Founder / Frontend Developer', es: 'Fundador / Frontend Developer' },
		bullets: {
			en: [
				'Designed and developed web applications for startups, focusing on modern UI/UX principles, responsive design, and performance optimization.',
				'Led frontend development using JavaScript, React, and modern web technologies to deliver scalable and maintainable solutions.',
				'Collaborated with early-stage businesses to translate ideas into functional MVPs, guiding product development from concept to deployment.',
			],
			es: [
				'Diseñé y desarrollé aplicaciones web para startups, con foco en principios modernos de UI/UX, diseño responsive y optimización del rendimiento.',
				'Lideré el desarrollo frontend con JavaScript, React y tecnologías web modernas para entregar soluciones escalables y mantenibles.',
				'Trabajé con empresas en etapa temprana para convertir ideas en MVPs funcionales, guiando el desarrollo de producto desde el concepto hasta el despliegue.',
			],
		},
	},
];

export const projects: Project[] = [
	{
		id: 'digital-agronomist',
		name: { en: 'Digital Agronomist', es: 'El Agrónomo Digital' },
		context: { en: 'SoilNet LLC · UW-Whitewater', es: 'SoilNet LLC · UW-Whitewater' },
		description: {
			en: 'Platform that turns soil and plant lab results into nutrient insights for farmers. I led its development (React, Node.js, MariaDB, Python ETL) and the machine learning models that improved nitrogen, phosphorus and potassium predictions.',
			es: 'Plataforma que convierte resultados de laboratorio de suelos y plantas en información de nutrientes para agricultores. Lideré su desarrollo (React, Node.js, MariaDB, ETL en Python) y los modelos de machine learning que mejoraron la predicción de nitrógeno, fósforo y potasio.',
		},
		image: digitalAgronomist,
		imageAlt: {
			en: 'Digital Agronomist dashboard with a plant analysis of corn and recent lab results',
			es: 'Panel de El Agrónomo Digital con un análisis foliar de maíz y resultados de laboratorio recientes',
		},
		tags: ['React', 'Node.js', 'MariaDB', 'Python', 'Machine Learning'],
	},
	{
		id: 'rodar-libre',
		name: { en: 'RodarLibre', es: 'RodarLibre' },
		context: { en: 'Founder, CEO & CTO · iOS and Android', es: 'Fundador, CEO y CTO · iOS y Android' },
		description: {
			en: 'The first app for drivers in Colombia. Riders log fuel fill-ups and oil changes, sync their vehicle and documents from RUNT, get expiry reminders, check traffic fines in SIMIT, and find events and discounts from partner workshops, shops, riding clubs and insurers.',
			es: 'La primera app para conductores en Colombia. Permite registrar tanqueadas y cambios de aceite, sincronizar el vehículo y sus documentos con el RUNT, recibir avisos de vencimiento, consultar multas en el SIMIT y encontrar eventos y descuentos de talleres, tiendas, clubes moteros y aseguradoras aliadas.',
		},
		image: rodarLibre,
		imageAlt: {
			en: 'Three RodarLibre screens: RUNT sync, partner events and a clean traffic-fines check',
			es: 'Tres pantallas de RodarLibre: sincronización con el RUNT, eventos de aliados y consulta de multas sin pendientes',
		},
		tags: ['React Native', 'iOS', 'Android'],
		links: [
			{ url: 'https://rodarlibre.co', label: { en: 'rodarlibre.co', es: 'rodarlibre.co' } },
			{ url: 'https://apps.apple.com/us/app/rodarlibre/id6762035476', label: { en: 'App Store', es: 'App Store' } },
			{
				url: 'https://play.google.com/store/apps/details?id=com.rodarlibre',
				label: { en: 'Google Play', es: 'Google Play' },
			},
		],
		stats: [
			{ en: '500+ installs', es: '500+ descargas' },
			{ en: '5.0 ★ rating', es: '5.0 ★ de calificación' },
			{ en: 'Ad-free', es: 'Sin anuncios' },
		],
	},
	{
		id: 'bunny-studio',
		name: { en: 'Bunny Studio rebuild', es: 'Nuevo frontend de Bunny Studio' },
		context: { en: 'Bunny Studio', es: 'Bunny Studio' },
		description: {
			en: "Rebuilt the creative-services marketplace's legacy AngularJS front end in React and Next.js with server-side rendering, cutting page load times by 80%.",
			es: 'Reconstruí el frontend legacy en AngularJS del marketplace de servicios creativos con React, Next.js y server-side rendering, reduciendo los tiempos de carga en un 80%.',
		},
		image: bunnyStudio,
		imageAlt: { en: 'Bunny Studio home page', es: 'Página de inicio de Bunny Studio' },
		tags: ['React', 'Next.js', 'SSR', 'Node.js'],
	},
	{
		id: 'login-widget',
		name: { en: 'Cross-framework login widget', es: 'Login widget multi-framework' },
		context: { en: 'UruIT', es: 'UruIT' },
		description: {
			en: 'High-performance login widget built on the native Web Components API and dropped into React, Vue and Angular micro-frontends to standardize sign-in, cutting technical debt by 60%.',
			es: 'Login widget de alto rendimiento construido con la API nativa de Web Components e integrado en micro-frontends de React, Vue y Angular para estandarizar la autenticación, reduciendo la deuda técnica en un 60%.',
		},
		image: loginWidget,
		imageAlt: {
			en: 'Login form rendered by the web component inside a client site',
			es: 'Formulario de login renderizado por el web component dentro del sitio de un cliente',
		},
		imageFit: 'contain',
		tags: ['Web Components', 'TypeScript', 'React', 'Vue'],
	},
	{
		id: 'ruedata-lite',
		name: { en: 'Ruedata Lite', es: 'Ruedata Lite' },
		context: { en: 'Ruedata Inc', es: 'Ruedata Inc' },
		description: {
			en: 'Mobile app for Android and iOS built with React Native. I took part in its system design, development and launch, and supported the product decisions.',
			es: 'App móvil para Android e iOS construida con React Native. Participé en su diseño de sistema, desarrollo y lanzamiento, y apoyé las decisiones de producto.',
		},
		image: ruedataLite,
		imageAlt: { en: 'Ruedata app listing on Google Play', es: 'Ficha de la app de Ruedata en Google Play' },
		tags: ['React Native', 'iOS', 'Android'],
	},
	{
		id: 'homelab',
		name: { en: 'Homelab and monitoring', es: 'Homelab y monitoreo' },
		context: { en: 'Personal infrastructure', es: 'Infraestructura personal' },
		description: {
			en: 'Self-hosted virtualization lab on Proxmox, with Grafana dashboards that track CPU, memory, storage and network across the cluster.',
			es: 'Laboratorio de virtualización autoalojado en Proxmox, con dashboards de Grafana que monitorean CPU, memoria, almacenamiento y red del clúster.',
		},
		image: homelab,
		imageAlt: { en: 'Grafana dashboard for a Proxmox cluster', es: 'Dashboard de Grafana de un clúster Proxmox' },
		tags: ['Proxmox', 'Grafana', 'Linux'],
	},
];

export const skills: SkillGroup[] = [
	{
		id: 'frontend',
		title: { en: 'Frontend', es: 'Frontend' },
		items: ['React', 'Next.js', 'React Native', 'TypeScript', 'Web Components'],
	},
	{
		id: 'backend',
		title: { en: 'Backend', es: 'Backend' },
		items: ['Node.js', 'Ruby on Rails', 'Python'],
	},
	{
		id: 'data',
		title: { en: 'Data', es: 'Datos' },
		items: ['ETL', 'Machine Learning', 'SQL', 'MariaDB', 'MySQL', 'PostgreSQL'],
	},
	{
		id: 'devops',
		title: { en: 'DevOps', es: 'DevOps' },
		items: ['Linux', 'Proxmox', 'Grafana', 'Docker', 'AWS', 'CI/CD'],
	},
];

export const education: Education[] = [
	{
		id: 'uww',
		institution: 'University of Wisconsin-Whitewater',
		degree: { en: "Master's in Computer Science", es: 'Máster en Computer Science' },
	},
	{
		id: 'ucc',
		institution: 'Universidad Cooperativa de Colombia',
		degree: { en: "Bachelor's in Software Engineering", es: 'Pregrado en Ingeniería de Sistemas' },
	},
];

// Types guarantee both languages exist; this keeps bullet lists the same length too.
for (const entry of experience) {
	if (entry.bullets.en.length !== entry.bullets.es.length) {
		throw new Error(`profile.ts: "${entry.id}" has ${entry.bullets.en.length} EN bullets but ${entry.bullets.es.length} ES bullets`);
	}
}
