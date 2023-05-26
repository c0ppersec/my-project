import {
  mobile,
  backend,
  creator,
  tvc,
  mv,
  shortmovie,
  ads,
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
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  grablogo,
  samsunglogo,
  bonumpos,
  bonumlogo,
  indosemarlogo,
  dplogo,
  enchanteurlogo,
  jobit,
  tripguide,
  threejs,
  grab,
  lovedelivery,
  msw,
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
    title: "TV Commercial",
    icon: tvc,
  },
  {
    title: "Music Video",
    icon: mv,
  },
  {
    title: "Short Movie",
    icon: shortmovie,
  },
  {
    title: "Digital Ads",
    icon: ads,
  },
];

const technologies = [
  // {
  //   name: "HTML 5",
  //   icon: html,
  // },
  // {
  //   name: "CSS 3",
  //   icon: css,
  // },
  // {
  //   name: "JavaScript",
  //   icon: javascript,
  // },
  // {
  //   name: "TypeScript",
  //   icon: typescript,
  // },
  // {
  //   name: "React JS",
  //   icon: reactjs,
  // },
  // {
  //   name: "Redux Toolkit",
  //   icon: redux,
  // },
  // {
  //   name: "Tailwind CSS",
  //   icon: tailwind,
  // },
  // {
  //   name: "Node JS",
  //   icon: nodejs,
  // },
  // {
  //   name: "MongoDB",
  //   icon: mongodb,
  // },
  // {
  //   name: "Three JS",
  //   icon: threejs,
  // },
  // {
  //   name: "git",
  //   icon: git,
  // },
  // {
  //   name: "figma",
  //   icon: figma,
  // },
  // {
  //   name: "docker",
  //   icon: docker,
  // },
  {
    name: "grablogo",
    icon: grablogo,
  },
  {
    name: "samsunglogo",
    icon: samsunglogo,
  },
  {
    name: "bonumlogo",
    icon: bonumlogo,
  },
  {
    name: "dplogo",
    icon: dplogo,
  },
  {
    name: "enchanteurlogo",
    icon: enchanteurlogo,
  },
  {
    name: "indosemarlogo",
    icon: indosemarlogo,
  },
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "Starbucks",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "React Native Developer",
    company_name: "Tesla",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Shopify",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Meta",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
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
    name: "Grab TVC",
    description:
      "PH : Walk Art Creative",
    tags: [
      {
        name: "tvcindonesia",
        color: "blue-text-gradient",
      },
      {
        name: "tvcommercial",
        color: "green-text-gradient",
      },
      {
        name: "productionhouse",
        color: "pink-text-gradient",
      },
    ],
    image: grab,
    source_code_link: "https://www.youtube.com/watch?v=bXLQkUQAeo0",
  },
  {
    name: "Berliana - Love Delivery",
    description:
      "PH : Walk Art Creative",
    tags: [
      {
        name: "musicvideo",
        color: "blue-text-gradient",
      },
      {
        name: "productionhouse",
        color: "green-text-gradient",
      },
      {
        name: "walkartcreative",
        color: "pink-text-gradient",
      },
    ],
    image: lovedelivery,
    source_code_link: "https://www.youtube.com/watch?v=__u02R228AQ",
  },
  {
    name: "Eau de Parfume Ms.W",
    description:
      "PH : Walk Art Creative",
    tags: [
      {
        name: "digitalads",
        color: "blue-text-gradient",
      },
      {
        name: "productionhouse",
        color: "green-text-gradient",
      },
      {
        name: "walkartcreative",
        color: "pink-text-gradient",
      },
    ],
    image: msw,
    source_code_link: "https://www.youtube.com/watch?v=TJoD2fI8qhA",
  },
  {
    name: "Raih Kemenangan Di Hari Yang Fitri Bersama BONUM",
    description:
      "PH: Walk Art Creative.",
    tags: [
      {
        name: "shortmovie",
        color: "blue-text-gradient",
      },
      {
        name: "walkartcreative",
        color: "green-text-gradient",
      },
      {
        name: "bonumpos",
        color: "pink-text-gradient",
      },
    ],
    image: bonumpos,
    source_code_link: "https://www.youtube.com/watch?v=2ly9RfFTd8c",
  },
  {
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
  },
  
];

export { services, technologies, experiences, testimonials, projects };
