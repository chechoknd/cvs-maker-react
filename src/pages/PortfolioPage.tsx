import { ArrowRight, BriefcaseBusiness, CheckCircle2, Code2, Mail, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { AnimatedSection } from '../components/AnimatedSection';
import { Badge } from '../components/Badge';
import { ExperienceTimeline } from '../components/ExperienceTimeline';
import { ProjectCard } from '../components/ProjectCard';
import { SectionHeading } from '../components/SectionHeading';
import { SkillMatrix } from '../components/SkillMatrix';
import { experiences, mainStack, profile, projects } from '../data/profile';

export function PortfolioPage() {
  return (
    <div className="overflow-hidden">
      <section className="relative mx-auto grid min-h-[calc(100vh-73px)] max-w-6xl items-center gap-12 px-5 py-16 md:grid-cols-[1.12fr_0.88fr] md:py-20">
        <div className="absolute inset-x-5 top-8 h-px bg-gradient-to-r from-transparent via-stone-300 to-transparent dark:via-zinc-800" aria-hidden="true" />
        <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, ease: 'easeOut' }}>
          <div className="flex flex-wrap items-center gap-3">
            <Badge variant="solid">{profile.primaryRole}</Badge>
            <span className="inline-flex items-center gap-2 rounded-full border border-stone-200 bg-white px-3 py-1 text-xs font-medium text-stone-600 shadow-sm dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-400">
              <MapPin size={13} aria-hidden="true" />
              {profile.location} · Inglés {profile.englishLevel}
            </span>
          </div>
          <h1 className="mt-7 max-w-4xl text-4xl font-semibold tracking-normal text-stone-950 md:text-6xl dark:text-white">
            Desarrollo frontend, integraciones y software empresarial con criterio técnico.
          </h1>
          <p className="mt-6 max-w-2xl text-xl leading-8 text-stone-600 dark:text-zinc-300">{profile.summary}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link to="/cv" className="surface-dark inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold shadow-sm transition">
              Ver CV visual
              <ArrowRight size={16} aria-hidden="true" />
            </Link>
            {profile.contact.email ? (
              <a href={`mailto:${profile.contact.email}`} className="inline-flex items-center justify-center gap-2 rounded-full border border-stone-300 bg-white px-5 py-3 text-sm font-semibold text-stone-800 transition hover:border-stone-950 dark:border-zinc-700 dark:bg-zinc-950 dark:text-zinc-200 dark:hover:border-zinc-500">
                Contactar
                <Mail size={16} aria-hidden="true" />
              </a>
            ) : (
              <Link to="/cv" className="inline-flex items-center justify-center gap-2 rounded-full border border-stone-300 bg-white px-5 py-3 text-sm font-semibold text-stone-800 transition hover:border-stone-950 dark:border-zinc-700 dark:bg-zinc-950 dark:text-zinc-200 dark:hover:border-zinc-500">
                Datos de contacto
                <Mail size={16} aria-hidden="true" />
              </Link>
            )}
          </div>
        </motion.div>

        <motion.aside
          className="relative rounded-lg border border-stone-200 bg-white p-6 shadow-[0_30px_100px_rgba(15,23,42,0.10)] dark:border-zinc-800 dark:bg-zinc-950 dark:shadow-none"
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.08 }}
        >
          <div className="border-b border-stone-200 pb-5 dark:border-zinc-800">
            <p className="text-sm font-semibold text-stone-950 dark:text-white">{profile.name}</p>
            <p className="mt-2 text-sm leading-6 text-stone-600 dark:text-zinc-400">{profile.secondaryRole} basado en Colombia. Inglés {profile.englishLevel}.</p>
          </div>
          <div className="mt-5 grid gap-3">
            {['Frontend avanzado', 'Integraciones empresariales', 'Backend .NET', 'Datos SQL'].map((item) => (
              <div key={item} className="flex items-center gap-3 rounded-lg border border-stone-200 bg-stone-50 p-3 dark:border-zinc-800 dark:bg-zinc-900">
                <CheckCircle2 size={18} className="text-blue-700" aria-hidden="true" />
                <span className="text-sm font-medium text-stone-800 dark:text-zinc-200">{item}</span>
              </div>
            ))}
          </div>
          <div className="mt-6 flex flex-wrap gap-2">
            {mainStack.slice(0, 10).map((item) => (
              <Badge key={item} variant="quiet">
                {item}
              </Badge>
            ))}
          </div>
        </motion.aside>
      </section>

      <AnimatedSection className="border-y border-stone-200 bg-white py-12 dark:border-zinc-800 dark:bg-zinc-950">
        <div className="mx-auto grid max-w-6xl gap-4 px-5 md:grid-cols-4">
          {[
            { icon: Code2, label: 'Frontend', value: 'Angular, TypeScript, NgRx, SSR y construcción de interfaces mantenibles.' },
            { icon: BriefcaseBusiness, label: 'Enterprise', value: '.NET, Azure Functions, SQL Server y sistemas corporativos.' },
            { icon: CheckCircle2, label: 'Integraciones', value: 'REST, SOAP, XML, JSON y flujos de intercambio de información.' },
            { icon: MapPin, label: 'Colaboración', value: 'Trabajo con equipos técnicos y áreas de negocio en entornos empresariales.' },
          ].map((item) => (
            <article key={item.label} className="rounded-lg border border-stone-200 p-5 dark:border-zinc-800">
              <item.icon size={18} className="text-blue-700 dark:text-blue-300" aria-hidden="true" />
              <h2 className="mt-4 font-semibold text-stone-950 dark:text-white">{item.label}</h2>
              <p className="mt-3 text-sm leading-6 text-stone-600 dark:text-zinc-400">{item.value}</p>
            </article>
          ))}
        </div>
      </AnimatedSection>

      <AnimatedSection className="mx-auto max-w-6xl px-5 py-16">
        <SectionHeading eyebrow="Experiencia" title="Software para operación empresarial" description="Experiencia combinando frontend, backend, datos, integraciones y soporte a despliegues en contextos corporativos." />
        <ExperienceTimeline experiences={experiences} compact />
      </AnimatedSection>

      <AnimatedSection className="bg-white py-16 dark:bg-zinc-950">
        <div className="mx-auto max-w-6xl px-5">
          <SectionHeading eyebrow="Proyectos" title="Trabajo técnico representativo" description="Proyectos descritos desde responsabilidades reales, tecnologías utilizadas y contexto empresarial." />
          <div className="grid gap-5 md:grid-cols-3">
            {projects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="mx-auto max-w-6xl px-5 py-16">
        <SectionHeading eyebrow="Stack" title="Tecnologías agrupadas por contexto" description="Una lectura rápida para equipos técnicos y reclutadores: frontend, backend, cloud, datos, herramientas e integraciones." />
        <SkillMatrix dense />
      </AnimatedSection>

      <AnimatedSection className="mx-auto max-w-6xl px-5 py-16">
        <div className="rounded-lg border border-stone-200 bg-stone-950 p-8 text-white md:p-10 dark:border-zinc-800">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-200">Contacto</p>
          <div className="mt-4 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="text-3xl font-semibold tracking-normal">Abierto a conversaciones técnicas y oportunidades profesionales.</h2>
              <p className="mt-3 max-w-2xl text-stone-300">Enfocado en roles frontend senior, full stack y proyectos remotos donde la mantenibilidad, la integración de sistemas y la colaboración técnica sean relevantes.</p>
            </div>
            {profile.contact.email ? (
              <a href={`mailto:${profile.contact.email}`} className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold !text-stone-950 transition hover:bg-stone-100">
                Escribir correo
                <ArrowRight size={16} aria-hidden="true" />
              </a>
            ) : (
              <Link to="/ats" className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold !text-stone-950 transition hover:bg-stone-100">
                Ver versión ATS
                <ArrowRight size={16} aria-hidden="true" />
              </Link>
            )}
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
}
