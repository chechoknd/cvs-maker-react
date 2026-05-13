import type { Experience } from '../data/types';
import { Badge } from './Badge';

type ExperienceTimelineProps = {
  experiences: Experience[];
  compact?: boolean;
};

export function ExperienceTimeline({ experiences, compact = false }: ExperienceTimelineProps) {
  return (
    <div className="relative space-y-5">
      <div className="absolute left-3 top-2 hidden h-[calc(100%-1rem)] w-px bg-stone-200 md:block dark:bg-zinc-800" aria-hidden="true" />
      {experiences.map((experience) => (
        <article
          key={`${experience.company}-${experience.period}`}
          className="print-avoid relative rounded-lg border border-stone-200 bg-white p-5 shadow-[0_16px_45px_rgba(15,23,42,0.05)] md:ml-10 md:p-6 dark:border-zinc-800 dark:bg-zinc-950 dark:shadow-none"
        >
          <span className="absolute -left-[2.35rem] top-7 hidden h-6 w-6 rounded-full border-4 border-stone-50 bg-blue-700 md:block dark:border-zinc-950" aria-hidden="true" />
          <div className="grid gap-4 lg:grid-cols-[1fr_auto] lg:items-start">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-700 dark:text-blue-300">{experience.period}</p>
              <h3 className="mt-2 text-lg font-semibold text-stone-950 dark:text-white">{experience.role}</h3>
              <p className="mt-1 text-sm font-medium text-stone-700 dark:text-zinc-300">
                {experience.location ? `${experience.company} · ${experience.location}` : experience.company}
              </p>
            </div>
            <div className="flex flex-wrap gap-2 lg:max-w-sm lg:justify-end">
              {experience.technologies.slice(0, compact ? 4 : 7).map((technology, index) => (
                <Badge key={technology} variant={index < 3 ? 'strong' : 'quiet'}>
                  {technology}
                </Badge>
              ))}
            </div>
          </div>

          <ul className="mt-5 grid gap-2 text-sm leading-6 text-stone-700 md:grid-cols-2 dark:text-zinc-300">
            {experience.highlights.slice(0, compact ? 3 : experience.highlights.length).map((item) => (
              <li key={item} className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-stone-400 dark:bg-zinc-500" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </article>
      ))}
    </div>
  );
}
