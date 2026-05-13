import { Mail, MapPin, Phone, Sparkles } from 'lucide-react';
import { AnimatedSection } from '../components/AnimatedSection';
import { Badge } from '../components/Badge';
import { ExperienceTimeline } from '../components/ExperienceTimeline';
import { PrintButton } from '../components/PrintButton';
import { ProjectCard } from '../components/ProjectCard';
import { SectionHeading } from '../components/SectionHeading';
import { SkillMatrix } from '../components/SkillMatrix';
import { mainStack, profile, projects, timeline } from '../data/profile';
import { visualExperiences } from '../data/portfolioExperience';

export function CvPage() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-10 md:py-16">
      <AnimatedSection className="cv-hero print-avoid relative overflow-hidden rounded-lg border border-stone-200 bg-white p-7 shadow-[0_30px_90px_rgba(15,23,42,0.08)] md:p-10 dark:border-zinc-800 dark:bg-zinc-950 dark:shadow-none">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" aria-hidden="true" />
        <div className="absolute right-0 top-0 h-40 w-40 border-l border-b border-stone-200 bg-stone-50 dark:border-zinc-800 dark:bg-zinc-900" aria-hidden="true" />
        <div className="relative grid gap-10 lg:grid-cols-[1.35fr_0.65fr]">
          <div>
            <div className="flex flex-wrap items-center gap-3">
              <Badge variant="solid">{profile.primaryRole}</Badge>
              <span className="inline-flex items-center gap-2 rounded-full border border-stone-200 bg-stone-50 px-3 py-1 text-xs font-medium text-stone-600 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-400">
                <Sparkles size={13} aria-hidden="true" />
                Full Stack · Enterprise software
              </span>
            </div>
            <h1 className="mt-7 max-w-4xl text-4xl font-semibold tracking-normal text-stone-950 md:text-6xl dark:text-white">{profile.name}</h1>
            <p className="mt-5 max-w-2xl text-xl leading-8 text-stone-600 dark:text-zinc-300">{profile.headline}</p>
            <p className="mt-7 max-w-3xl text-base leading-7 text-stone-700 dark:text-zinc-400">{profile.summary}</p>
            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {['Angular + TypeScript', '.NET + Azure', 'SQL + Integraciones'].map((item) => (
                <div key={item} className="rounded-lg border border-stone-200 bg-stone-50 p-3 text-sm font-semibold text-stone-800 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-200">
                  {item}
                </div>
              ))}
            </div>
          </div>
          <aside className="rounded-lg border border-stone-200 bg-stone-50 p-5 dark:border-zinc-800 dark:bg-zinc-900/70">
            <div className="space-y-4 text-sm text-stone-700 dark:text-zinc-300">
              <p className="flex items-center gap-3">
                <MapPin size={17} aria-hidden="true" />
                {profile.location}
              </p>
              <p className="flex items-center gap-3">
                <Mail size={17} aria-hidden="true" />
                {profile.contact.email ? (
                  <a href={`mailto:${profile.contact.email}`} className="hover:text-stone-950 dark:hover:text-white">
                    {profile.contact.email}
                  </a>
                ) : (
                  <span>Correo disponible bajo solicitud</span>
                )}
              </p>
              <p className="flex items-center gap-3">
                <Phone size={17} aria-hidden="true" />
                {profile.contact.phone ? (
                  <a href={`tel:${profile.contact.phone}`} className="hover:text-stone-950 dark:hover:text-white">
                    {profile.contact.phone}
                  </a>
                ) : (
                  <span>Teléfono disponible bajo solicitud</span>
                )}
              </p>
              <p>Inglés: {profile.englishLevel}</p>
            </div>
            <div className="mt-5 flex flex-wrap gap-2">
              {profile.contact.links.map((link) => (
                link.href ? (
                  <a key={link.label} href={link.href} className="external-link rounded-full border border-stone-200 bg-white px-3 py-1.5 text-sm font-medium text-stone-700 hover:text-stone-950 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-300 dark:hover:text-white">
                    {link.label}
                  </a>
                ) : (
                  <span key={link.label} className="rounded-full border border-stone-200 bg-white px-3 py-1.5 text-sm font-medium text-stone-500 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-500">
                    {link.label}
                  </span>
                )
              ))}
            </div>
            <div className="mt-6">
              <PrintButton />
            </div>
          </aside>
        </div>
      </AnimatedSection>

      <AnimatedSection className="mt-14">
        <SectionHeading title="Experiencia laboral" description="Trayectoria en desarrollo frontend, backend, datos, integraciones y soporte a despliegues para entornos empresariales." />
        <ExperienceTimeline experiences={visualExperiences} />
      </AnimatedSection>

      <AnimatedSection className="mt-14">
        <SectionHeading title="Skills y tecnologías" description="Stack organizado por contexto técnico para facilitar lectura de frontend, backend, cloud, datos, herramientas e integraciones." />
        <SkillMatrix />
        <div className="mt-6 flex flex-wrap gap-2">
          {mainStack.map((item) => (
            <Badge key={item} variant="quiet">
              {item}
            </Badge>
          ))}
        </div>
      </AnimatedSection>

      <AnimatedSection className="mt-14">
        <SectionHeading title="Proyectos destacados" description="Iniciativas representativas sin agregar métricas no verificadas ni experiencia ficticia." />
        <div className="grid gap-5 md:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </AnimatedSection>

      <AnimatedSection className="mt-14">
        <SectionHeading title="Timeline profesional" />
        <div className="grid gap-4 md:grid-cols-4">
          {timeline.map((item) => (
          <article key={item.date} className="print-avoid rounded-lg border border-stone-200 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-950">
              <p className="text-sm font-semibold text-blue-700 dark:text-blue-300">{item.date}</p>
              <h3 className="mt-3 font-semibold text-stone-950 dark:text-white">{item.title}</h3>
              <p className="mt-2 text-sm leading-6 text-stone-600 dark:text-zinc-400">{item.description}</p>
            </article>
          ))}
        </div>
      </AnimatedSection>
    </div>
  );
}
