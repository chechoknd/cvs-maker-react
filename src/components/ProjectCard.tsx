import type { BriefProject } from '../data/types';
import { Badge } from './Badge';

type ProjectCardProps = {
  project: BriefProject;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="print-avoid rounded-lg border border-stone-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(15,23,42,0.08)] dark:border-zinc-800 dark:bg-zinc-950 dark:shadow-none dark:hover:border-zinc-700">
      <h3 className="text-lg font-semibold text-stone-950 dark:text-white">{project.title}</h3>
      <p className="mt-3 text-sm leading-6 text-stone-600 dark:text-zinc-400">{project.description}</p>
      <div className="mt-5 flex flex-wrap gap-2">
        {project.stack.map((item) => (
          <Badge key={item} variant="quiet">
            {item}
          </Badge>
        ))}
      </div>
    </article>
  );
}
