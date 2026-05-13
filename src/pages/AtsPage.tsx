import { PrintButton } from '../components/PrintButton';
import { mainStack, profile, projects, skillGroups } from '../data/profile';
import { atsExperiences } from '../data/portfolioExperience';

export function AtsPage() {
  return (
    <div className="mx-auto max-w-4xl bg-white px-5 py-10 text-stone-950 md:px-10 md:py-14">
      <header className="border-b border-stone-300 pb-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-normal">{profile.name}</h1>
            <p className="mt-2 text-lg font-semibold">{profile.headline}</p>
            <p className="mt-2 text-sm">{profile.location} | Inglés {profile.englishLevel}</p>
            <p className="mt-2 text-sm">
              {profile.contact.email || 'Correo disponible bajo solicitud'} | {profile.contact.phone || 'Teléfono disponible bajo solicitud'}
            </p>
            <p className="mt-2 text-sm">
              {profile.contact.links
                .map((link) => (link.href ? `${link.label}: ${link.href}` : link.label))
                .join(' | ')}
            </p>
          </div>
          <PrintButton />
        </div>
      </header>

      <section className="ats-section">
        <h2>Resumen profesional</h2>
        <p>{profile.summary}</p>
      </section>

      <section className="ats-section">
        <h2>Competencias técnicas principales</h2>
        <p>{mainStack.join(' | ')}</p>
      </section>

      <section className="ats-section">
        <h2>Experiencia laboral</h2>
        <div className="space-y-7">
          {atsExperiences.map((experience) => (
            <article key={`${experience.company}-${experience.period}`} className="break-inside-avoid">
              <h3>{experience.role}</h3>
              <p className="font-semibold">{experience.company}</p>
              <p className="text-sm">
                {experience.location ? `${experience.period} | ${experience.location}` : experience.period}
              </p>
              <ul>
                {experience.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
              <p className="mt-2 text-sm">
                <strong>Tecnologías:</strong> {experience.technologies.join(', ')}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="ats-section">
        <h2>Skills</h2>
        {skillGroups.map((group) => (
          <p key={group.title}>
            <strong>{group.title}:</strong> {group.items.join(', ')}
          </p>
        ))}
      </section>

      <section className="ats-section">
        <h2>Proyectos destacados</h2>
        {projects.map((project) => (
          <article key={project.title} className="mb-4 break-inside-avoid">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <p className="text-sm">
              <strong>Stack:</strong> {project.stack.join(', ')}
            </p>
          </article>
        ))}
      </section>
    </div>
  );
}
