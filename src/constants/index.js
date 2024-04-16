import {
    mysql,
    mobile,
    backend,
    web,
    python,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    sencha,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    equilend,
    hack,
    gdsc,
    draverabezerra,
    medical_UI,
    /*tripguide, */
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
      name: "Python",
      icon: python,
    }, 
    /* {
      name: "Sencha",
      icon: sencha,
    }, */
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    /* {
      name: "Node JS",
      icon: nodejs,
    }, */
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
    {
      name: "mysql",
      icon: mysql,
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
    {
      title: "Google Devloper Student Club Tech Lead",
      company_name: "Google Developer Student Club at Manhattan College",
      icon: gdsc,
      iconBg: "#E6DEDD",
      date: "Jan 2024 - Present",
      points: [
        "Organized tech events, seminars, and networking sessions as GDSC Tech Lead.",
        "Planned activities linking academic learning with practical tech applications.",
        "Created opportunities for learning about new technologies and meeting industry experts.",
        "Facilitated networking with professionals and peers to enhance career prospects.",
        "Contributed to building a vibrant and supportive student tech community.",
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
        "Web-based portfolio showcasing the expertise of a medical doctor/nutritionist. Created using HTML, CSS, and Bootstrap, offering valuable insights into healthcare and nutrition.",
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
    {
      name: "First Medical UI",
      description:
        "My first project was a user-friendly web interface for a medical X-ray site, built with HTML, CSS, JavaScript, and Bootstrap. Main focus was on developing my UI skills and understanding how bootstrap works.",
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
      image: medical_UI,
      Live_link: "https://npmedicaldesignui.netlify.app",
      source_code_link: "https://github.com/RM25BAM/medical_first_UI_projectm",
    }
    /*,
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
  
  export { services, technologies, experiences, testimonials, projects };