# CV Maker React

Aplicación profesional de CV y portfolio para Sergio Andrés Toro Álvarez, construida con React, Vite, TypeScript, Tailwind CSS, Framer Motion y React Router.

## Instalación

```bash
npm install
```

## Ejecución local

```bash
npm run dev
```

Rutas principales:

- `/cv`: CV visual premium.
- `/ats`: versión limpia y optimizada para ATS.
- `/portfolio`: landing profesional de portfolio.

## Build

```bash
npm run build
```

## Exportación PDF

1. Ejecuta el proyecto con `npm run dev`.
2. Abre `/cv` o `/ats`.
3. Usa el botón `Imprimir PDF` o el atajo del navegador.
4. En el diálogo de impresión, selecciona `Guardar como PDF`.

Los estilos de impresión viven en `src/styles/print.css` y están optimizados para reducir cortes visuales, mantener buena legibilidad y ocultar navegación o elementos interactivos.

## Estructura

```text
src/
  components/  Componentes reutilizables de UI
  pages/       Páginas principales por ruta
  layouts/     Layout base de la aplicación
  data/        Información editable del perfil, experiencia, skills y proyectos
  styles/      Estilos globales y estilos de impresión
  hooks/       Hooks reutilizables
  utils/       Utilidades compartidas
  assets/      Recursos visuales locales
```

## Editar información personal

La información editable está centralizada en `src/data/profile.ts`.

Para actualizar nombre, rol, contacto, experiencia, skills, tecnologías o proyectos, modifica ese archivo. Las páginas consumen esos datos sin hardcodear contenido profesional dentro de la UI.
