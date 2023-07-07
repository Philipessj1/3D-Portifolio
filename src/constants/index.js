import {
  mobile,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  threejs,
  construction,
  portifolio,
  summerize,
  aiGenerator
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "Sobre",
  },
  {
    id: "work",
    title: "Projetos",
  },
  {
    id: "contact",
    title: "Contato",
  },
];

const services = [
  {
    title: "Desenvolvedor Web",
    icon: web,
  },
  {
    title: "Desenvolvedor Backend",
    icon: creator,
  },
  {
    title: "MERN Stack",
    icon: mobile,
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
    icon: construction,
  }
  ,
  {
    title: "React.js Developer",
    company_name: "Starbucks",
    icon: portifolio,
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
    icon: portifolio,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  }
];

const projects = [
  {
    name: "Portifolio 3D",
    description:
      "Portifolio 3D responsivo feito com React e Threejs.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Vite",
        color: "orange-text-gradient",
      },
      {
        name: "Threejs",
        color: "white-text-gradient",
      },
      {
        name: "Tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: portifolio,
    source_code_link: "https://github.com/Philipessj1/3D-Portifolio",
    live_link: 'https://philipe-mello.vercel.app'
  },
  {
    name: "Resumidor de Artigos",
    description:
      "Resumidor de Artigos com OpenAi GPT-4. Simplifique sua leitura com o Summerize, um resumidor de artigos de código aberto que transforma artigos longos em resumos claros e concisos.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Vite",
        color: "orange-text-gradient",
      },
      {
        name: "Redux",
        color: "violet-text-gradient",
      },
      {
        name: "Tailwind",
        color: "pink-text-gradient",
      },
      
    ],
    image: summerize,
    source_code_link: "https://github.com/Philipessj1/Summerizer-Ai",
    live_link: 'https://summerizer-ai.vercel.app/'
  },
  {
    name: "Gerador de imagens IA",
    description:
      "Gerador de imagens com OpenAi DALL-E. Transforme palavras em arte e dê vida a sua imaginação com o DALL-E.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Vite",
        color: "orange-text-gradient",
      },
      {
        name: "Express",
        color: "yellow-text-gradient",
      },
      {
        name: "MongoDB",
        color: "green-pink-text-gradient",
      },
      {
        name: "Tailwind",
        color: "pink-text-gradient",
      },
      
    ],
    image: aiGenerator,
    source_code_link: "https://github.com/Philipessj1/Ai-image-project",
    live_link: 'https://dalle-ai-generator.vercel.app/'
  },
  
];

export { services, technologies, experiences, projects };