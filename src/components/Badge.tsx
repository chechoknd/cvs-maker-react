type BadgeProps = {
  children: string;
  variant?: 'default' | 'quiet' | 'solid' | 'strong';
};

export function Badge({ children, variant = 'default' }: BadgeProps) {
  const variants = {
    default: 'border-stone-200 bg-white text-stone-700 shadow-sm dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-300',
    quiet: 'border-stone-200 bg-stone-50 text-stone-600 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-400',
    solid: 'surface-dark border-stone-900',
    strong: 'border-blue-200 bg-blue-50 text-blue-800 dark:border-blue-900/70 dark:bg-blue-950/40 dark:text-blue-200',
  };

  return (
    <span className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium ${variants[variant]}`}>
      {children}
    </span>
  );
}
