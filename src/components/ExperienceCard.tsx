import { Badge } from './Badge';
import type { Experience } from '../data/types';

type ExperienceCardProps = {
  experience: Experience;
};

export function ExperienceCard({ experience }: ExperienceCardProps) {
  return (
    <article className="print-avoid rounded-lg border border-stone-200 bg-white p-6 shadow-[0_20px_60px_rgba(15,23,42,0.06)] dark:border-zinc-800 dark:bg-zinc-950 dark:shadow-none">
      <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
        <div>
          <h3 className="text-lg font-semibold text-stone-950 dark:text-white">{experience.role}</h3>
          <p className="mt-1 text-sm font-medium text-stone-700 dark:text-zinc-300">{experience.company}</p>
        </div>
        <div className="text-sm text-stone-500 md:text-right dark:text-zinc-500">
          <p>{experience.period}</p>
          <p>{experience.location}</p>
        </div>
      </div>

      <ul className="mt-5 space-y-2 text-sm leading-6 text-stone-700 dark:text-zinc-300">
        {experience.highlights.map((item) => (
          <li key={item} className="flex gap-3">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-700" />
            <span>{item}</span>
          </li>
        ))}
      </ul>

      <div className="mt-5 flex flex-wrap gap-2">
        {experience.technologies.map((technology) => (
          <Badge key={technology} variant="quiet">
            {technology}
          </Badge>
        ))}
      </div>
    </article>
  );
}
