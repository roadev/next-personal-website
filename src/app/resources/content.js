import { InlineCode } from "@/once-ui/components";

const person = {
    firstName: 'Juan',
    lastName:  'Roa',
    get name() {
        return `${this.firstName} ${this.lastName}`;
    },
    role:      'Software Engineer',
    avatar:    '/images/avatar.jpg',
    location:  'America/Bogota',
    languages: ['English', 'Spanish']  // optional: Leave the array empty if you don't want to display languages
}

const newsletter = {
    display: false,
    title: <>Subscribe to {person.firstName}'s Newsletter</>,
    description: <>I occasionally write about design, technology, and share thoughts on the intersection of creativity and engineering.</>
}

const social = [
    // Import new icons in /once-ui/icons.ts
    {
        name: 'GitHub',
        icon: 'github',
        link: 'https://github.com/roadev/',
    },
    {
        name: 'LinkedIn',
        icon: 'linkedin',
        link: 'https://www.linkedin.com/in/roadev/',
    },
    {
        name: 'X',
        icon: 'x',
        link: 'https://x.com/jroadev/',
    },
    {
        name: 'Email',
        icon: 'email',
        link: 'mailto:hello@juanroa.dev',
    },
]

const home = {
    label: 'Home',
    title: `${person.name}'s Portfolio`,
    description: `Portfolio website showcasing my work as a ${person.role}`,
    headline: <>Software Engineer and Data Science researcher</>,
    subline: 'Juan is a Software Engineer with over 9 years of experience in full-stack development, data science, and cloud computing. He excels in leading technical projects, optimizing software performance, and applying machine learning to real-world agricultural challenges.'
}

const about = {
    label: 'About',
    title: 'About me',
    description: `Meet ${person.name}, ${person.role} from ${person.location}`,
    tableOfContent: {
        display: true,
        subItems: true
    },
    avatar: {
        display: true
    },
    calendar: {
        display: false,
        link: 'https://cal.com'
    },
    intro: {
        display: true,
        title: 'Introduction',
        description: <>Juan is a Software Engineer with over 8 years of experience in full-stack development, data science, and cloud computing. He excels in leading technical projects, optimizing software performance, and applying machine learning to real-world agricultural challenges.</>
    },
    work: {
        display: true,
        title: 'Work Experience',
        experiences: [
            {
                company: 'Soil Net LLC',
                timeframe: 'Aug 2024 – Present',
                role: 'Data Science Project Supervisor',
                achievements: [
                    <>Led the "Digital Agronomist" project’s technical development, guiding frontend (React), backend (Node.js), database (MariaDB), and Python ETL implementations.</>,
                    <>Applied statistical and machine learning methods to improve the accuracy of nutrient predictions (e.g., nitrogen, phosphorus, potassium) and integrated weather data for a holistic view on nutrient management.</>,
                    <>Refined data cleaning and processing techniques to ensure high-quality datasets for agronomic modeling.</>
                ],
                images: []
            },
            {
                company: 'Soil Net LLC',
                timeframe: 'May 2024 – Aug 2024',
                role: 'Research Collaborator (Soil Science and Agronomy)',
                achievements: [
                    <>Conducted research for the "Digital Agronomist" project while awaiting STEM OPT authorization.</>,
                    <>Mentored interns on data science solutions, covering database design, API integrations, and predictive models for agronomy.</>
                ],
                images: []
            },
            {
                company: 'University of Wisconsin-Whitewater',
                timeframe: 'Aug 2022 – Aug 2024',
                role: 'Graduate Assistant',
                achievements: [
                    <>Mentored 20+ students in Python programming courses, enhancing their skills in programming projects.</>,
                    <>Graded and reviewed over 500 labs and assignments, providing constructive feedback to support student learning.</>
                ],
                images: []
            },
            {
                company: 'UruIT',
                timeframe: 'Nov 2020 – Apr 2022',
                role: 'Sr. Full Stack Developer',
                achievements: [
                    <>Developed a high-performance login widget using the Native Web Components API, compatible with React and Vue projects.</>,
                    <>Reduced technical debt by 60% with a cross-framework solution, enabling faster deployment and streamlined maintenance.</>
                ],
                images: []
            },
            {
                company: 'Bunny Studio',
                timeframe: 'Jun 2019 – Oct 2020',
                role: 'Sr. Full Stack Engineer',
                achievements: [
                    <>Rebuilt a legacy AngularJS UI system with ReactJS & NextJS, improving page load times by 80% and boosting user engagement.</>,
                    <>Resolved critical bugs in systems using Node.js, PHP, Python, and Elixir, and improved code quality through comprehensive reviews.</>
                ],
                images: []
            },
            {
                company: 'VIGPRO SAS',
                timeframe: 'Jun 2018 – Jun 2019',
                role: 'Sr. Full Stack Developer',
                achievements: [
                    <>Designed a PostgreSQL database and backend with Ruby on Rails and Node.js, optimizing API integrations and reducing costs.</>,
                    <>Led three cross-functional teams, ensuring high-quality code and best practices across Ruby, JavaScript, and PHP projects.</>,
                    <>Automated CI/CD pipelines for AWS, improving deployment reliability and reducing release times.</>
                ],
                images: []
            },
            {
                company: 'Imaginamos Digital Agency',
                timeframe: 'Dec 2017 – May 2018',
                role: 'Full Stack Developer',
                achievements: [
                    <>Developed a high-performance e-commerce platform with NextJS and Redux, boosting online sales for La 14 supermarket.</>,
                    <>Enhanced user experience for Cardash through dynamic UI components using React and GraphQL.</>
                ],
                images: []
            },
            {
                company: 'Devhack.co',
                timeframe: 'Dec 2017 – Jul 2018',
                role: 'Teacher of React and React Native Courses',
                achievements: [
                    <>Instructed ReactJS courses with a focus on Redux and mobile-first design, mentoring students in modern web development practices.</>
                ],
                images: []
            },
            {
                company: 'Pulpo WMS',
                timeframe: 'Sep 2016 – Dec 2017',
                role: 'Frontend Developer',
                achievements: [
                    <>Developed and optimized Material Design web components for Pulpo WMS using React, Redux, and ImmutableJS.</>
                ],
                images: []
            },
            {
                company: 'Creadev.co',
                timeframe: 'Jan 2015 – Sep 2016',
                role: 'Founder / Frontend Developer',
                achievements: [
                    <>Designed and developed web applications for startups, focusing on modern UI/UX principles, responsive design, and performance optimization.</>,
                    <>Led frontend development using JavaScript, React, and modern web technologies to deliver scalable and maintainable solutions.</>,
                    <>Collaborated with early-stage businesses to translate ideas into functional MVPs, guiding product development from concept to deployment.</>
                ],
                images: []
            }
        ]
    },
    studies: {
        display: true, // set to false to hide this section
        title: 'Studies',
        institutions: [
            {
                name: 'University of Wisconsin-Whitewater',
                description: <>Master's in Computer Science.</>,
            },
            {
                name: 'Universidad Cooperativa de Colombia',
                description: <>Software Engineering.</>,
            }
        ]
    },
    technical: {
        display: true,
        title: 'Technical skills',
        skills: [
            {
              title: "React",
              description: <></>,
              // optional: leave the array empty if you don't want to display images
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
              description: <></>,
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
                description: <>Python for Machine Learing and Data Science</>,
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
                description: <>Python for Machine Learing and Data Science</>,
                images: [
                  {
                    src: "/images/projects/uruit/bloomberg_login.png",
                    alt: "Data Science for Agronomy",
                    width: 16,
                    height: 9,
                  },
                //   {
                //     src: "/images/projects/soilnet/digital_agronomist_4.png",
                //     alt: "Machine Learning for Agronomy",
                //     width: 16,
                //     height: 9,
                //   },
                ],
              },
              {
                title: "SQL (MariabDB, MySQL, PostgreSQL)",
                description: <>SQL, Database design, ERD</>,
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
                description: <></>,
                images: [
                  {
                    src: "/images/projects/vigpro/aliciapp.png",
                    alt: "Screenshots for Aliciapp",
                    width: 16,
                    height: 9,
                  },
                ],
              },
          ],
    }
}

const blog = {
    label: 'Blog',
    title: 'Writing about design and tech...',
    description: `Read what ${person.name} has been up to recently`
    // Create new blog posts by adding a new .mdx file to app/blog/posts
    // All posts will be listed on the /blog route
}

const work = {
    label: 'Work',
    title: 'My projects',
    description: `Design and dev projects by ${person.name}`
    // Create new project pages by adding a new .mdx file to app/blog/posts
    // All projects will be listed on the /home and /work routes
}

const gallery = {
    label: 'Gallery',
    title: 'My photo gallery',
    description: `A photo collection by ${person.name}`,
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

export { person, social, newsletter, home, about, blog, work, gallery };