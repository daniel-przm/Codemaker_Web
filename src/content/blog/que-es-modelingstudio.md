---
title: "Qué es Modeling Studio: modelado 3D paramétrico en el navegador"
description: "Modeling Studio es el editor de modelado de Codemaker3D para crear piezas y escenas 3D con precisión. Combina modelado sólido CSG, simetría y planos técnicos exportables en PDF."
pubDate: 2026-05-08
tags: ["Modelado 3D", "Modeling Studio", "3D", "Docentes"]
draft: true
---

# ModelingStudio: Editor de modelado 3D paramétrico en el navegador

ModelingStudio es el editor de modelado de Codemaker3D, diseñado para que estudiantes creen piezas y escenas 3D con precisión. Combina herramientas de modelado sólido (CSG), alineación, simetría y planos técnicos exportables, todo sin instalar nada.

---

## Primitivas disponibles

Se pueden añadir estas figuras base a la escena:

- Cubo · Esfera · Cilindro · Cono
- Pirámide · Prisma · Toro · Plano · Cápsula

Cada primitiva aparece con una posición Y automática correcta (por ejemplo, planos a Y=0, el resto a Y=0.5) y color azul por defecto (`#007AFB`).

---

## Transformaciones

Tres modos de transformación con gizmo visual en el viewport y entrada numérica simultánea:

| Modo | Tecla rápida | Descripción |
|------|-------------|-------------|
| **Mover** | `G` | Traslada objetos en X, Y, Z |
| **Rotar** | `R` | Gira en cualquier eje |
| **Escalar** | `S` | Redimensiona por eje individual |

Todas las transformaciones son compatibles con selección múltiple y con el sistema de snap.

---

## Selección

- **Clic individual** — selecciona un objeto
- **Caja de selección** — clic y arrastrar para seleccionar varios
- **Shift + clic** — añade o quita objetos de la selección actual

---

## Operaciones booleanas (CSG)

Permite combinar formas sólidas usando geometría constructiva:

- **Unión** — fusiona dos o más objetos en uno solo
- **Sustracción** — recorta una figura usando otra como "agujero"
- Los objetos marcados como agujero se distinguen visualmente (color semitransparente)
- **Desagrupar** — separa un resultado booleano de vuelta a sus componentes originales, respetando sus posiciones en el mundo

---

## Alineación y distribución

Con dos o más objetos seleccionados:

- **Alinear** en X, Y o Z → mínimo / centro / máximo
- **Distribuir** equidistantemente a lo largo de cualquier eje (requiere 3+ objetos)

---

## Simetría y espejo

Permite reflejar objetos en X, Y o Z con un clic. El pivote de espejo se calcula a partir del centro del objeto.

---

## Array lineal

Crea copias en línea de un objeto con control sobre:

- **Cantidad** de copias (2–50)
- **Espaciado** en metros
- **Eje** de la matriz (X, Y o Z)

---

## Sistema de snap

Dos niveles de snap combinables:

1. **Snap a geometría 3D** — detecta puntos canónicos de los objetos cercanos:
   - Vértices extremos (esquinas)
   - Puntos de cuadrante (cilindros/esferas)
   - Centros de cara
   - Puntos medios de arista
   - Acelerado con BVH para escenas complejas

2. **Snap a cuadrícula** (botón imán):
   - Movimiento: incrementos de 1 metro
   - Rotación: incrementos de 45°
   - Escala: incrementos de 1 metro

---

## Apariencia y materiales

- **5 colores predefinidos** + selector de color libre
- **Transparencia** por objeto (100% u opacidad al 40%)
- **Librería de texturas** aplicables a cualquier objeto
- **Transformación UV** (solo selección individual):
  - Escala de repetición (0.1× – 20×) en X e Y
  - Offset de posición (0–1)
  - Rotación del patrón (−180° a +180°)

---

## Navegación de cámara

| Acción | Control |
|--------|---------|
| Orbitar | Clic izquierdo + arrastrar |
| Pan | Clic derecho o central + arrastrar |
| Zoom | Rueda del ratón |
| Vista frontal / lateral / top | Botones X / Z / Y |
| Ortográfico / perspectiva | Toggle en la barra lateral |
| Ajustar todo en pantalla | Botón Reset |

---

## Planos técnicos (CAD) — Beta

Una vista técnica profesional con cuatro proyecciones sincronizadas:

- **Alzado** (frente) · **Perfil** (lado) · **Planta** (top) · **Perspectiva** (referencia 3D)

**Herramientas de dibujo:**
- Líneas continuas y discontinuas
- Circunferencias y arcos (continuos y discontinuos)
- Herramienta de corte/trim

**Acotación:**
- Clic a dos puntos con snap automático
- Etiquetas de cota desplazables
- Cálculo automático de distancias reales

**Snap en 2D:**
- Vértices de silueta (contorno exterior)
- Vértices de aristas de pliegue (umbral de 25°)
- Indicadores visuales por tipo: cuadrado / rombo / círculo / triángulo

**Escalas estándar:** 1:1, 1:2, 1:5, 1:10, 1:20, 1:50, 1:100, 2:1, 5:1

**Exportación:**
- **PNG** — imagen de alta resolución (2×)
- **PDF** — lámina A4 apaisada con cajetín (nombre del alumno, fecha, escala, proyecto)

---

## Exportación 3D

- **STL** — exporta la escena completa o solo los objetos seleccionados, listo para impresión 3D

---

## Deshacer / Rehacer y portapapeles

- **Ctrl + Z / Ctrl + Y** — historial de hasta 10 pasos en cada dirección
- **Ctrl + C / Ctrl + V** — copia y pega objetos con desplazamiento automático de 1 unidad
- Las copias heredan color, textura y escala, con nombre "`(Copia)`" añadido

---

## Panel de objetos

La barra lateral derecha lista todos los objetos de la escena y permite:

- Renombrar objetos individualmente
- Duplicar o eliminar con un clic
- Seleccionar rápidamente haciendo clic en el nombre

---

## Modo solo lectura

Si la licencia ha expirado, el editor bloquea todas las modificaciones y muestra un banner de advertencia. Las operaciones de visualización y los planos técnicos siguen disponibles.

---

## Detalles técnicos

- **Motor 3D**: Three.js + `@react-three/fiber`
- **CSG**: `three-bvh-csg` con BVH para intersecciones eficientes
- **Material**: `MeshStandardMaterial` (PBR)
- **Unidades**: metros reales (precisión 1 mm en snap, 0.1 mm en planos técnicos)
- **Iluminación**: ambiental + direccional ajustable (0–3), sombras opcionales
- **Rendimiento**: caché de geometrías, WeakMap para BVH, optimización de contact shadows
