import { InlineCode } from "@/once-ui/components";

const renderContent = (t) => {
    const person = {
        firstName: 'Juan',
        lastName:  'Roa',
        get name() {
            return `${this.firstName} ${this.lastName}`;
        },
        role:      t("person.role"),
        avatar:    '/images/avatar.jpg',
        location:  'America/Bogota',        // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
        languages: ['English', 'Spanish']  // optional: Leave the array empty if you don't want to display languages
    }

    const newsletter = {
        display: true,
        title: <>{t("newsletter.title", {firstName: person.firstName})}</>,
        description: <>{t("newsletter.description")}</>
    }

    const social = [
        // Links are automatically displayed.
        // Import new icons in /once-ui/icons.ts
        {
            name: 'GitHub',
            icon: 'github',
            link: 'https://github.com/roadev',
        },
        {
            name: 'LinkedIn',
            icon: 'linkedin',
            link: 'https://www.linkedin.com/in/roadev/',
        },
        {
            name: 'X',
            icon: 'x',
            link: 'https://x.com/jroadev',
        },
        {
            name: 'Email',
            icon: 'email',
            link: 'mailto:hello@juanroa.dev',
        },
    ]

    const home = {
        label: t("home.label"),
        title: t("home.title", {name: person.name}),
        description: t("home.description", {role: person.role}),
        headline: <>{t("home.headline")}</>,
        subline: <>{t("home.subline")}</>
    }

    const about = {
        label: t("about.label"),
        title: t("about.label"),
        description: t("about.description", {name: person.name, role: person.role, location: person.location}),
        tableOfContent: {
            display: true,
            subItems: true
        },
        avatar: {
            display: true
        },
        calendar: {
            display: true,
            link: 'https://cal.com/jroadev'
        },
        intro: {
            display: true,
            title: t("about.intro.title"),
            description: <>{t("about.intro.description")}</>
        },
        work: {
            display: true, // set to false to hide this section
            title: t("about.work.title"),
            experiences: Object.keys(t.raw('about.work.experiences')).map(company => ({
                company,
                timeframe: t(`about.work.experiences.${company}.timeframe`),
                role: t(`about.work.experiences.${company}.role`),
                achievements: t(`about.work.experiences.${company}.achievements`).split(";"),
                images: []
            }))
        },
        studies: {
            display: true, // set to false to hide this section
            title: t("about.studies.title"),
            institutions: Object.keys(t.raw('about.studies.institutions')).map(institution => ({
                name: institution,
                description: <>{t(`about.studies.institutions.${institution}.description`)}</>,
            }))
        },
        technical: {
            display: true, // set to false to hide this section
            title: t("about.technical.title"),
            skills: [
                {
                    title: "React",
                    description: "",
                    images: [
                        {
                            src: "/images/projects/soilnet/digital_agronomist_1.png",
                            alt: "Digital Agronomist Dashboard 1",
                            width: 16,
                            height: 9,
                        },
                        {
                            src: "/images/projects/bunnystudio/home.png",
                            alt: "Project image",
                            width: 16,
                            height: 9,
                        },
                        {
                            src: "/images/projects/UWW/neonatology_1.png",
                            alt: "Neonatology Outcomes",
                            width: 16,
                            height: 9,
                        },
                        {
                            src: "/images/projects/pulpo/pulpo_landing.png",
                            alt: "Pulpo WMS landing page",
                            width: 16,
                            height: 9,
                        },
                    ],
                },
                {
                    title: "Next.js",
                    description: "",
                    images: [
                        {
                            src: "/images/projects/soilnet/digital_agronomist_5.png",
                            alt: "Digital Agronomist landing",
                            width: 16,
                            height: 9,
                        },
                        {
                            src: "/images/projects/bunnystudio/DRI_React_Components.png",
                            alt: "Project image",
                            width: 16,
                            height: 9,
                        },
                    ],
                },
                {
                    title: "Python / ETL / Data Engineering",
                    description: "Python for Machine Learning and Data Science",
                    images: [
                        {
                            src: "/images/projects/soilnet/digital_agronomist_3.png",
                            alt: "Data Science for Agronomy",
                            width: 16,
                            height: 9,
                        },
                        {
                            src: "/images/projects/UWW/digital_agronomist_approach.png",
                            alt: "Digital Agronomist ETL approach",
                            width: 16,
                            height: 9,
                        },
                        {
                            src: "/images/projects/soilnet/digital_agronomist_4.png",
                            alt: "Machine Learning for Agronomy",
                            width: 16,
                            height: 9,
                        },
                        {
                            src: "/images/projects/soilnet/digital_agronomist_6.png",
                            alt: "Ada Boost evaluation",
                            width: 16,
                            height: 9,
                        },
                    ],
                },
                {
                    title: "Typescript & Javascript",
                    description: "Python for Machine Learning and Data Science",
                    images: [
                        {
                            src: "/images/projects/uruit/bloomberg_login.png",
                            alt: "Data Science for Agronomy",
                            width: 16,
                            height: 9,
                        },
                    ],
                },
                {
                    title: "SQL (MariabDB, MySQL, PostgreSQL)",
                    description: "SQL, Database design, ERD",
                    images: [
                        {
                            src: "/images/projects/UWW/digital_agronomist_erd.png",
                            alt: "Data Science for Agronomy",
                            width: 16,
                            height: 9,
                        },
                    ],
                },
                {
                    title: "React Native",
                    description: "",
                    images: [
                        {
                            src: "/images/projects/vigpro/aliciapp.png",
                            alt: "Screenshots for Aliciapp",
                            width: 16,
                            height: 9,
                        },
                    ],
                },
                {
                    title: "Ruby on Rails",
                    description: "",
                    images: [
                        {
                            src: "/images/projects/creadev/talonario_1.png",
                            alt: "Screenshots for Talonario",
                            width: 16,
                            height: 9,
                        },
                        {
                            src: "/images/projects/rgcali/rgcali_website_coaches.png",
                            alt: "Website Rails Girls Cali - coaches page",
                            width: 16,
                            height: 9,
                        },
                    ],
                },
                {
                    title: "DevOps / Linux SysAdmin / Virtualization",
                    description: "",
                    images: [
                        {
                            src: "/images/projects/devops/proxmox_grafana.png",
                            alt: "Screenshots for Proxmox and Grafana dashboard",
                            width: 16,
                            height: 9,
                        },
                    ],
                },
            ]
        }
    }

    const blog = {
        label: t("blog.label"),
        title: t("blog.title"),
        description: t("blog.description", {name: person.name})
        // Create new blog posts by adding a new .mdx file to app/blog/posts
        // All posts will be listed on the /blog route
    }

    const work = {
        label: t("work.label"),
        title: t("work.title"),
        description: t("work.description", {name: person.name})
        // Create new project pages by adding a new .mdx file to app/blog/posts
        // All projects will be listed on the /home and /work routes
    }

    const gallery = {
        label: t("gallery.label"),
        title: t("gallery.title"),
        description: t("gallery.description", {name: person.name}),
        // Images from https://pexels.com
        images: [
            {
                src: '/images/gallery/img-01.jpg',
                alt: 'image',
                orientation: 'vertical'
            },
            {
                src: '/images/gallery/img-02.jpg',
                alt: 'image',
                orientation: 'horizontal'
            },
            { 
                src: '/images/gallery/img-03.jpg',
                alt: 'image',
                orientation: 'vertical'
            },
            { 
                src: '/images/gallery/img-04.jpg',
                alt: 'image',
                orientation: 'horizontal'
            },
            {
                src: '/images/gallery/img-05.jpg',
                alt: 'image',
                orientation: 'horizontal'
            },
            {
                src: '/images/gallery/img-06.jpg',
                alt: 'image',
                orientation: 'vertical'
            },
            {
                src: '/images/gallery/img-07.jpg',
                alt: 'image',
                orientation: 'horizontal'
            },
            {
                src: '/images/gallery/img-08.jpg',
                alt: 'image',
                orientation: 'vertical'
            },
            {
                src: '/images/gallery/img-09.jpg',
                alt: 'image',
                orientation: 'horizontal'
            },
            {
                src: '/images/gallery/img-10.jpg',
                alt: 'image',
                orientation: 'horizontal'
            },
            { 
                src: '/images/gallery/img-11.jpg',
                alt: 'image',
                orientation: 'vertical'
            },
            {
                src: '/images/gallery/img-12.jpg',
                alt: 'image',
                orientation: 'horizontal'
            },
            {
                src: '/images/gallery/img-13.jpg',
                alt: 'image',
                orientation: 'horizontal'
            },
            { 
                src: '/images/gallery/img-14.jpg', 
                alt: 'image',
                orientation: 'horizontal'
            },
        ]
    }
    return {
        person,
        social,
        newsletter,
        home,
        about,
        blog,
        work,
        gallery
    }
};

export { renderContent };
