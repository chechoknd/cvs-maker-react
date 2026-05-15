import { Outlet, NavLink } from 'react-router-dom';
import { ThemeToggle } from '../components/ThemeToggle';

const navItems = [
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'CV', href: '/cv' },
  { label: 'ATS', href: '/ats' },
  { label: 'ATS Omar', href: '/ats-omar' },
];

export function AppLayout() {
  return (
    <div className="min-h-screen bg-stone-50 text-stone-900 antialiased dark:bg-zinc-950 dark:text-zinc-100">
      <header className="print-hidden sticky top-0 z-50 border-b border-stone-200/80 bg-stone-50/90 backdrop-blur dark:border-zinc-800/80 dark:bg-zinc-950/85">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4" aria-label="Navegacion principal">
          <NavLink to="/portfolio" className="text-sm font-semibold tracking-normal text-stone-950 dark:text-white">
            Sergio Toro
          </NavLink>
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1 rounded-full border border-stone-200 bg-white p-1 shadow-sm dark:border-zinc-800 dark:bg-zinc-950">
              {navItems.map((item) => (
                <NavLink
                  key={item.href}
                  to={item.href}
                  className={({ isActive }) =>
                    `rounded-full px-3 py-1.5 text-sm font-medium transition ${
                      isActive ? 'surface-dark' : 'text-stone-600 hover:text-stone-950 dark:text-zinc-400 dark:hover:text-white'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </div>
            <ThemeToggle />
          </div>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
