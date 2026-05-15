import { PrintButton } from '../components/PrintButton';
import { profile, mainStack, skillGroups, projects, education, languages } from '../data/profileOmar';

export function AtsOmarPage() {
  return (
    <div className="mx-auto max-w-4xl bg-white px-5 py-10 text-stone-950 md:px-10 md:py-14">
      <header className="border-b border-stone-300 pb-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-normal">{profile.name}</h1>
            <p className="mt-2 text-lg font-semibold">{profile.headline}</p>
            <p className="mt-2 text-sm">{profile.location} | Inglés {profile.englishLevel}</p>
            <p className="mt-2 text-sm">
              {profile.contact.email} | {profile.contact.phone}
            </p>
            <p className="mt-2 text-sm">
              {profile.contact.links
                .filter((link) => link.href)
                .map((link) => `${link.label}: ${link.href}`)
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
        <h2>Competencias técnicas</h2>
        <p>{mainStack.join(' | ')}</p>
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

      <section className="ats-section">
        <h2>Educación</h2>
        <p className="font-semibold">{education.institution}</p>
        <p>{education.degree}</p>
        <p className="text-sm">{education.status}</p>
      </section>

      <section className="ats-section">
        <h2>Idiomas</h2>
        {languages.map((lang) => (
          <p key={lang.language}>
            <strong>{lang.language}:</strong> {lang.level}
          </p>
        ))}
      </section>
    </div>
  );
}
