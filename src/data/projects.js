const projects = [
  {
    id: 1,

    featured: true,

    title: "Recipe Finder Platform",

    subtitle: "Full Stack Web Application",

    description:
      "A modern recipe sharing platform where users can discover, upload, bookmark and manage recipes using secure authentication, REST APIs and responsive UI.",

    image: "/projects/recipe.png",

    technologies: [
      "React",
      "Django",
      "Django REST Framework",
      "JWT",
      "MySQL",
    ],

    demo: null,

    category: "Full Stack",

    status: "Completed",

    featuredText: "Featured Project",

    year: "2026",
  },

  {
    id: 2,

    featured: true,

    title: "RFC Backend System",

    subtitle: "Backend REST API",

    description:
      "A scalable backend system built with Django REST Framework featuring authentication, user management, recipe CRUD operations, comments, bookmarks and secure REST APIs.",

    image: "/projects/rfc.png",

    technologies: [
      "Python",
      "Django",
      "REST API",
      "SQLite",
    ],

    demo: null,

    category: "Backend",

    status: "Completed",

    featuredText: "Production Ready",

    year: "2026",
  },

  {
    id: 3,

    featured: false,

    title: "Thermal Imaging IoT",

    subtitle: "Final Year Project",

    description:
      "IoT-based thermal imaging solution for detecting external parasites in pets using intelligent image processing and thermal sensors.",

    image: "/projects/thermal.png",

    technologies: [
      "Python",
      "IoT",
      "ESP32",
      "Thermal Camera",
      "CNN",
    ],

    demo: null,

    category: "IoT",

    status: "Ongoing",

    featuredText: null,

    year: "2026",
  },

  {
    id: 4,

    featured: false,

    title: "AI Data Visualization Chatbot",

    subtitle: "Artificial Intelligence",

    description:
      "AI-powered chatbot capable of generating intelligent charts and visualizations from CSV and Excel datasets.",

    image: "/projects/chatbot.png",

    technologies: [
      "Python",
      "Pandas",
      "Matplotlib",
      "Plotly",
    ],

    demo: null,

    category: "Artificial Intelligence",

    status: "Completed",

    featuredText: null,

    year: "2025",
  },

  {
    id: 5,

    featured: false,

    title: "Personal Portfolio",

    subtitle: "React Portfolio",

    description:
      "Modern portfolio website built using React and Vite showcasing projects, technical skills, education and certifications.",

    image: "/projects/portfolio.png",

    technologies: [
      "React",
      "Vite",
      "Framer Motion",
      "CSS",
    ],

    demo: null,

    category: "Frontend",

    status: "Ongoing",

    featuredText: null,

    year: "2026",
  },
];

export default projects;