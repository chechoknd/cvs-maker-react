import { Printer } from 'lucide-react';
import { printCurrentPage } from '../utils/print';

export function PrintButton() {
  return (
    <button
      type="button"
      onClick={printCurrentPage}
      className="surface-dark print-hidden inline-flex items-center gap-2 rounded-full px-4 py-2.5 text-sm font-semibold shadow-sm transition focus:outline-none focus:ring-2 focus:ring-stone-950 focus:ring-offset-2 dark:focus:ring-white dark:focus:ring-offset-zinc-950"
      aria-label="Imprimir o exportar PDF"
      title="Imprimir o exportar PDF"
    >
      <Printer size={16} aria-hidden="true" />
      Imprimir PDF
    </button>
  );
}
