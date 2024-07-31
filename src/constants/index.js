import {
  mobile,
  creator,
  web,
  typescript,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  threejs,
  chinatown,
  portifolio,
  summerize,
  aiGenerator,
  freelancer,
  next
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
    name: "Next.Js",
    icon: next,
  },
  {
    name: "React JS",
    icon: reactjs,
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
    name: "TypeScript",
    icon: typescript,
  },
  
  {
    name: "Tailwind CSS",
    icon: tailwind,
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
    title: "Desenvolvedor Freelancer",
    company_name: "Freelancer",
    icon: freelancer,
    iconBg: "#E6DEDD",
    date: 'Jan 2023 - Maio 2024',
    points: [
      "Desenvolvimento de Projetos Práticos utilizando tecnologias com base em Javascript, como React, Next e Node aplicando código legível e uniforme para fácil compreensão e reutilização.",
      "Criação de novos softwares, seguindo regras e procedimentos de desenvolvimento dos códigos para atender às especificações dos projetos.",
      "Definição do layout dos aplicativos e sites desenvolvidos, criando uma experiência agradável e intuitiva para os usuários.",
    ],
  }
  ,
  {
    title: "Auxiliar de TI",
    company_name: "Chinatown Atacado e Varejo",
    icon: chinatown,
    iconBg: "#FF0000",
    date: "maio de 2024 - o momento",
    points: [
      "Monitoramento de sistemas operacionais, servidores e execução de comandos para solucionar problemas de Domínio e Rede.",
      "Planejamento e execução de atividades conforme os prazos estabelecidos, contribuindo para o bom andamento das operações.",
      "Colaboração com a equipe de desenvolvimento para solucionar erros e falhas de software recém-lançados relatados pelos usuários, auxiliando na implementação de correções.",
    ],
  },
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