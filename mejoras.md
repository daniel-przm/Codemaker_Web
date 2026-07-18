# Mejoras pendientes

## SEO / Social sharing

- **`public/images/og-image.png` no existe.** Es la imagen que debería mostrarse al compartir cualquier página del sitio en WhatsApp, Twitter/X, LinkedIn o Facebook. Ahora mismo `og:image` y `twitter:image` (definidos en `Layout.astro`) apuntan a un archivo que no está en disco, así que las comparticiones no muestran ninguna imagen. Falta crear/subir una imagen de 1200×630px con el branding de Codemaker.

## Contenido de la home

- **Imágenes de la sección "Algunos proyectos creados por alumnos"** (Sección 4 de `index.astro`, array `creations`): actualmente son capturas de las propias apps (`FeaturesStudios/*.png`), no fotos de proyectos reales hechos por alumnos. Sustituir por capturas reales de proyectos de alumnos cuando estén disponibles, para que el texto de la sección sea preciso.
