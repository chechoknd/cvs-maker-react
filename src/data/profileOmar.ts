import type { BriefProject, Profile } from './types';

export const profile: Profile = {
  name: 'Omar Durley Zapata Alzate',
  location: 'Colombia',
  headline: 'Junior Software Developer & Trainee',
  primaryRole: 'Junior Software Developer',
  secondaryRole: 'Trainee',
  englishLevel: 'B2',
  contact: {
    email: 'ozacodex@gmail.com',
    phone: '316 8670333',
    links: [
      { label: 'GitHub', href: '' },
      { label: 'LinkedIn', href: '' },
    ],
  },
  summary:
    'Desarrollador de Software en nivel inicial (Junior Trainee) con un sólido manejo del inglés (B2) y una gran pasión por la tecnología, la transferencia de conocimiento y el aprendizaje continuo. Cuento con bases teóricas y prácticas en desarrollo backend (Java/Spring Boot) y bases de datos relacionales, complementadas con una alta capacidad de comunicación asertiva. Mi enfoque está orientado a integrarme a equipos de desarrollo para seguir fortaleciendo mis habilidades, resolver problemas de manera analítica, apoyar en procesos de formación y facilitar el aprendizaje técnico, aportando compromiso y entusiasmo en la adopción de buenas prácticas.',
};

export const mainStack = [
  'Java',
  'Spring Boot',
  'MySql',
  'SQL Server',
  'HTML5',
  'CSS3',
  'Git',
  'GitHub'
];

export const skillGroups = [
  {
    title: 'Backend & Datos',
    items: ['Java', 'Spring Boot', 'MySql', 'SQL Server'],
  },
  {
    title: 'Frontend Básico',
    items: ['HTML5', 'CSS3'],
  },
  {
    title: 'Herramientas & Entornos',
    items: ['Git', 'GitHub'],
  },
  {
    title: 'Habilidades Blandas',
    items: [
      'Comunicación pedagógica',
      'Empatía',
      'Adaptabilidad',
      'Trabajo en equipo',
      'Liderazgo colaborativo',
    ],
  },
];

export const projects: BriefProject[] = [
  {
    title: 'CRM Personalizado – Sector Textil',
    description:
      'Participación en el diseño lógico y optimización de una plataforma para la gestión de clientes y procesos comerciales. Apoyo directo en la resolución de problemas funcionales, asegurando la estabilidad de la aplicación y la mejora de la experiencia de usuario.',
    stack: ['Java', 'Spring Boot', 'MySql'],
  },
  {
    title: 'Generador Automatizado de Hojas de Vida',
    description:
      'Colaboración en el desarrollo de una herramienta web basada en plantillas dinámicas para la estructuración de información. Implementación de mejoras visuales y corrección de errores de lógica, optimizando la usabilidad del sistema.',
    stack: ['Java', 'SQL Server', 'HTML', 'CSS'],
  },
];

export const education = {
  institution: 'Servicio Nacional de Aprendizaje (SENA)',
  degree: 'Tecnología en Análisis y Desarrollo de Software',
  status: 'Etapa productiva (Listo para vinculación inmediata)',
};

export const languages = [
  { language: 'Español', level: 'Nativo' },
  { language: 'Inglés', level: 'B2 - Capacidad para mantener conversaciones de negocio, leer documentación técnica.' },
];
