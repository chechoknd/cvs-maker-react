import { experiences } from './profile';
import type { Experience } from './types';

const doctusExperience: Experience = {
  company: 'Doctus',
  role: 'Desarrollador de Software',
  period: 'Noviembre 2021 - Noviembre 2022',
  location: '',
  highlights: [
    'Migración de proyectos MVC en .NET hacia arquitecturas frontend basadas en Angular, modernizando interfaces y estructura de presentación.',
    'Diseño e implementación de microservicios con .NET Core, favoreciendo modularidad, mantenibilidad y evolución del sistema.',
    'Análisis de requerimientos y diseño de soluciones técnicas para servicios RESTful y SOAP.',
    'Mantenimiento continuo de aplicaciones, bases de datos y servidores, atendiendo estabilidad operativa y soporte técnico.',
    'Participación en equipos ágiles bajo Scrum, documentando procesos, funcionalidades y decisiones técnicas.',
    'Implementación de pruebas unitarias y prácticas de TDD para fortalecer calidad y confiabilidad del código.',
    'Contribución en migraciones mediante microfrontends, apoyando modularidad e independencia entre frentes de desarrollo.',
  ],
  technologies: ['Angular', '.NET Core', 'Microservices', 'RESTful APIs', 'SOAP', 'TDD', 'Microfrontends', 'Scrum'],
};

export const portfolioExperiences: Experience[] = [
  experiences[0],
  doctusExperience,
  experiences[1],
  experiences[2],
];

export const visualExperiences = portfolioExperiences;

export const atsExperiences = portfolioExperiences;
