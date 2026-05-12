import type { BriefProject, Experience, Profile, TimelineItem } from "./types";

export const profile: Profile = {
  name: "Sergio Andrés Toro Álvarez",
  location: "Colombia",
  headline: "Senior Frontend Engineer | Full Stack Developer",
  primaryRole: "Senior Frontend Engineer",
  secondaryRole: "Full Stack Developer",
  englishLevel: "B2",
  contact: {
    email: "",
    phone: "",
    links: [
      { label: "GitHub", href: "" },
      { label: "LinkedIn", href: "" },
    ],
  },
  summary:
    "Desarrollador de software con experiencia en entornos empresariales, especializado en frontend con Angular, TypeScript y arquitecturas mantenibles, con capacidad full stack sobre .NET, Azure Functions y bases de datos relacionales. Ha trabajado en levantamiento de requerimientos, integraciones REST/SOAP, procesos de despliegue y evolución de sistemas corporativos, combinando criterio técnico, claridad funcional y colaboración con equipos multidisciplinarios.",
};

export const mainStack = [
  "Angular",
  "TypeScript",
  "JavaScript",
  "C#",
  ".NET",
  "Azure Functions",
  "SQL Server",
  "NgRx",
  "SSR",
  "Azure DevOps",
  "CI/CD",
  "Node.js",
  "REST APIs",
  "SOAP",
  "Git",
  "GitHub",
  "TFS",
  "Docker",
];

export const skillGroups = [
  {
    title: "Frontend Engineering",
    items: [
      "Angular",
      "TypeScript",
      "JavaScript",
      "NgRx",
      "SSR",
      "Vue.js",
      "Quasar Framework",
    ],
  },
  {
    title: "Backend",
    items: ["C#", ".NET", "Node.js", "PHP", "Laravel", "NancyFX"],
  },
  {
    title: "Cloud, DevOps y herramientas",
    items: [
      "Azure Functions",
      "Azure DevOps",
      "CI/CD",
      "Docker",
      "Git",
      "GitHub",
      "TFS",
      "TortoiseSVN",
    ],
  },
  {
    title: "Datos, integraciones y reportes",
    items: [
      "SQL Server",
      "MySQL",
      "Stored Procedures",
      "REST APIs",
      "SOAP",
      "XML",
      "JSON",
      "TXT",
      "CSV",
      "Crystal Reports",
      "Jasper Studio",
    ],
  },
];

export const experiences: Experience[] = [
  {
    company: "TCS - Tata Consultancy Services",
    role: "Desarrollador de Software",
    period: "15 junio 2023 - 21 abril 2026",
    location: "Colombia",
    highlights: [
      "Análisis y refinamiento de requerimientos en entornos empresariales, traduciendo necesidades funcionales en soluciones técnicas mantenibles.",
      "Construcción de interfaces con Angular y TypeScript, cuidando arquitectura de componentes, consistencia visual y escalabilidad del frontend.",
      "Implementación de lógica backend y procesos serverless con .NET, Azure Functions y SQL Server para soportar flujos corporativos.",
      "Integración de APIs REST y servicios internos, facilitando interoperabilidad entre aplicaciones y procesos de negocio.",
      "Acompañamiento técnico en despliegues, validaciones y ciclos de entrega, colaborando con equipos empresariales y áreas técnicas.",
    ],
    technologies: [
      "Angular",
      "TypeScript",
      ".NET",
      "Azure Functions",
      "SQL Server",
      "REST APIs",
    ],
  },
  {
    company: "SUPERCARNES JH",
    role: "Desarrollador de Software",
    period: "10 agosto 2020 - 27 Octubre 2021",
    location: "Colombia",
    highlights: [
      "Evolución y mantenimiento continuo de software operacional para gestión cárnica y facturación electrónica, con foco en estabilidad del negocio.",
      "Implementación de funcionalidades sobre PHP, Laravel, Vue.js y Quasar Framework, integradas con bases de datos SQL Server y MySQL.",
      "Diseño, ajuste y optimización funcional de consultas y stored procedures para soportar procesos administrativos y operativos.",
      "Construcción y mantenimiento de reportes en Crystal Reports y Jasper Studio, orientados a consulta, control y operación del negocio.",
      "Soporte evolutivo a módulos existentes, atendiendo cambios funcionales y necesidades operativas sin comprometer continuidad del sistema.",
    ],
    technologies: [
      "PHP",
      "Laravel",
      "Vue.js",
      "Quasar Framework",
      "SQL Server",
      "MySQL",
    ],
  },
  {
    company: "ATP - APLICACIÓN DE TECNOLOGÍA DE PUNTA, S.A.S.",
    role: "Desarrollador de Software",
    period: "14 octubre 2014 - 15 enero 2020",
    location: "Colombia",
    highlights: [
      "Implementación de interfaces de datos para interoperabilidad entre sistemas corporativos como SAP, Manhattan y Siesa.",
      "Diseño de procesos de intercambio de información mediante XML, JSON, TXT y CSV, atendiendo necesidades de integración entre plataformas.",
      "Construcción y mantenimiento de aplicaciones backend y frontend con C#, JavaScript, AngularJS, WPF y SQL Server.",
      "Implementación y soporte de Web Services RESTful y SOAP para conectar aplicaciones internas y sistemas empresariales.",
      "Análisis de requerimientos, diseño técnico de soluciones y mantenimiento evolutivo de aplicaciones corporativas y legacy.",
      "Soporte técnico en administración de servidores, control de versiones con TortoiseSVN, GitHub y TFS, y generación de etiquetas ZPL y tirillas POS.",
    ],
    technologies: [
      "C#",
      "JavaScript",
      "AngularJS",
      "WPF",
      "SQL Server",
      "REST",
      "SOAP",
    ],
  },
];

export const projects: BriefProject[] = [
  {
    title: "Plataformas empresariales con Angular y .NET",
    description:
      "Interfaces y servicios para aplicaciones corporativas, con foco en Angular, TypeScript, .NET, Azure Functions, SQL Server e integración de APIs.",
    stack: ["Angular", "TypeScript", ".NET", "SQL Server", "Azure Functions"],
  },
  {
    title: "Sistema de gestión cárnica y facturación electrónica",
    description:
      "Evolución de una solución operacional para gestión cárnica y facturación electrónica, incluyendo módulos funcionales, consultas, stored procedures y reportes.",
    stack: ["Laravel", "Vue.js", "Quasar", "SQL Server", "MySQL"],
  },
  {
    title: "Integraciones de datos empresariales",
    description:
      "Procesos de intercambio de información entre plataformas corporativas mediante servicios REST/SOAP y formatos estructurados como XML, JSON, TXT y CSV.",
    stack: ["C#", "SOAP", "REST APIs", "XML", "JSON", "SQL Server"],
  },
];

export const timeline: TimelineItem[] = [
  {
    date: "2014",
    title: "Desarrollo empresarial e integraciones",
    description:
      "Backend, frontend e interfaces de datos para sistemas corporativos.",
  },
  {
    date: "2020",
    title: "Software operacional y reportes",
    description:
      "Soluciones de gestión, datos, reportes y facturación electrónica.",
  },
  {
    date: "2023",
    title: "Entornos enterprise",
    description:
      "Desarrollo con Angular, .NET, Azure Functions y SQL Server en equipos empresariales.",
  },
  {
    date: "Actualidad",
    title: "Frontend senior y full stack",
    description:
      "Foco en interfaces mantenibles, integraciones y evolución de sistemas corporativos.",
  },
];
