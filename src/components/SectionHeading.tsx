type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
};

export function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <div className="mb-8 max-w-2xl">
      {eyebrow ? <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-blue-700 dark:text-blue-300">{eyebrow}</p> : null}
      <h2 className="text-2xl font-semibold tracking-normal text-stone-950 md:text-3xl dark:text-white">{title}</h2>
      {description ? <p className="mt-3 text-base leading-7 text-stone-600 dark:text-zinc-400">{description}</p> : null}
    </div>
  );
}
