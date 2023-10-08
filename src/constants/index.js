import {
    mobile,
    backend,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    equilend,
    hack,
    draverabezerra,
/*     jobit,
    tripguide, */
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Native Developer",
      icon: mobile,
    },
     {
      title: "Product Management",
      icon: backend,
    }
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
  ];
  
  const experiences = [
    {
      title: "Software Engineering Fellow",
      company_name: "Hack Diversity",
      icon: hack,
      iconBg: "#E6DEDD",
      date: "Jan 2023 - Aug 2023",
      points: [
        "Collaborated with a team of 5 in the production stages of technical projects with the utilization of the MERN stack (MongoDB, React, Express.js and node.js).",
        "Selected as one of 15 candidates for the highly competitive Hack.Diversity Fellowship's first Cohort in New York City.",
        "Empowered minority students in breaking into the tech field in New York where the program focuses on career leadership and workforce development.",
        "Attended training sessions aimed at supporting and advancing Black and Latinx talent in the workplace.",
        "Partnered with a mentor to enhance my technical knowledge and actively participate in the technology community.",
      ],
    },
    {
      title: "Software Development Intern",
      company_name: "Equilend",
      icon: equilend,
      iconBg: "#E6DEDD",
      date: "Jun 2023 - Aug 2023",
      points: [
        "Created an efficiency-boosting feature for integration into the upcoming trading platform release. This enhancement will be utilized daily by users, significantly improving their trading experience.",
        "Experienced in Javascript Development to design leveraging expertise in designing and implementing robust and efficient applications.",
        "Skilled in executing SQL queries while professionally managing Oracle databases.",
        "Mastered utilization of IBM MQ to secure message and data exchange in distributed systems.",
        "Executed proper Git version control practices and maintained a weekly code push schedule.",
        "Skilled in Java development, leveraging expertise in designing and implementing robust and efficient applications.",
      ],
    },
  ];

  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ]; 
  
  const projects = [
    {
      name: "Dra Vera Bezerra",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "css",
          color: "blue-text-gradient",
        },
        {
          name: "html",
          color: "green-text-gradient",
        },
        {
          name: "bootstrap",
          color: "pink-text-gradient",
        },
      ],
      image: draverabezerra,
      Live_link: "https://www.draverabezerra.com",
      source_code_link: "https://github.com/RM25BAM/www.draverabezzerra.com",
    },
    /* {
      name: "Job IT",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    }, */
  ];
  
  export { services, technologies, experiences,  testimonials,  projects };