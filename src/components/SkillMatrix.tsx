import { skillGroups } from '../data/profile';
import { Badge } from './Badge';

type SkillMatrixProps = {
  dense?: boolean;
};

export function SkillMatrix({ dense = false }: SkillMatrixProps) {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {skillGroups.map((group) => (
        <article
          key={group.title}
          className="print-avoid rounded-lg border border-stone-200 bg-white p-5 shadow-sm dark:border-zinc-800 dark:bg-zinc-950 dark:shadow-none"
        >
          <div className="flex items-center justify-between gap-4 border-b border-stone-100 pb-4 dark:border-zinc-800">
            <h3 className="font-semibold text-stone-950 dark:text-white">{group.title}</h3>
            <span className="rounded-full bg-stone-100 px-2.5 py-1 text-xs font-semibold text-stone-600 dark:bg-zinc-900 dark:text-zinc-300">
              {group.items.length}
            </span>
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            {group.items.slice(0, dense ? 6 : group.items.length).map((item, index) => (
              <Badge key={item} variant={index < 3 ? 'strong' : 'quiet'}>
                {item}
              </Badge>
            ))}
          </div>
        </article>
      ))}
    </div>
  );
}
