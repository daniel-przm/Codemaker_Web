---
title: "Qué es FormStudio: modelado orgánico por subdivisión en el navegador"
description: "FormStudio es el editor de esculpido poligonal de Codemaker3D. Parte de una jaula de control y la suaviza con Catmull-Clark en tiempo real, como Blender o ZBrush, todo desde el navegador."
pubDate: 2026-05-08
tags: ["Modelado 3D", "FormStudio", "3D", "Docentes"]
draft: false
---

# FormStudio: Editor de modelado orgánico por subdivisión en el navegador

FormStudio es el editor de esculpido poligonal de Codemaker3D, diseñado para crear formas orgánicas y complejas mediante subdivisión de superficies. Parte de una malla de control (jaula) y la suaviza automáticamente con el algoritmo Catmull-Clark, igual que en herramientas profesionales como Blender o ZBrush, todo desde el navegador sin instalar nada.

---

## Formas base disponibles

Al añadir un objeto a la escena se elige una forma de partida:

- **Esfera** — proyección esférica estándar sobre cubo
- **Quadball** — esfera con topología cuádruple uniforme, ideal para cabezas y cuerpos
- **Cubo** — paralelepípedo con caras cuadradas
- **Cilindro** — cubo estirado en Y, base para columnas y extremidades
- **Cápsula** — esfera alargada con polos suavizados
- **Cono** — cubo con ápice cónico
- **Toroide** — anillo paramétrico con costura cerrada

Todas las formas generan topología quad (cuadriláteros) que garantiza resultados suaves tras la subdivisión.

---

## Dos modos de trabajo

FormStudio distingue dos niveles de edición:

### Modo Objeto
Vista general de la escena. Permite seleccionar, transformar, duplicar y eliminar objetos completos. Se activa haciendo clic fuera de cualquier objeto o pulsando `Esc`.

### Modo Edición
Edición de la jaula de un objeto concreto: se accede con **doble clic** sobre él. En este modo se pueden manipular caras individuales con todas las herramientas de cara. Se sale haciendo clic fuera del objeto o en el fondo de la escena.

---

## Transformaciones de objeto (Modo Objeto)

Con un objeto seleccionado, tres modos de gizmo visual en el viewport:

| Modo | Tecla rápida | Descripción |
|------|-------------|-------------|
| **Mover** | `G` | Traslada el objeto en X, Y, Z |
| **Rotar** | `R` | Gira el objeto en cualquier eje |
| **Escalar** | `S` | Redimensiona el objeto por eje |

---

## Herramientas de cara (Modo Edición)

Con una o más caras seleccionadas, el panel lateral ofrece siete herramientas:

| Herramienta | Descripción |
|-------------|-------------|
| **Mover** | Desplaza la cara a lo largo de su normal o en cualquier eje con gizmo de 3 flechas |
| **Rotar** | Gira la cara con tres anillos de rotación (normal, tangente, bitangente) — control absoluto arrastrando alrededor del centro |
| **Escalar** | Agranda o reduce la cara respecto a su centro |
| **Extruir** | Crea nueva geometría empujando la cara hacia afuera |
| **Crease** | Marca una arista como "dura" para que la subdivisión no la suavice |
| **Loop Cut** | Inserta un corte de bucle que divide un anillo de caras por la mitad |
| **Pintar** | Colorea caras individuales con el color de pincel seleccionado |

### Selección de caras
- **Clic** — selecciona una cara
- **Shift + clic** — añade o quita caras de la selección actual
- Las caras seleccionadas se resaltan en azul

---

## Subdivisión de superficies (Catmull-Clark)

El corazón de FormStudio: la jaula (malla de control) define la forma; el suavizado se calcula automáticamente en tiempo real.

**Nivel de suavizado** (ajustable en Modo Objeto y Modo Edición):

| Nivel | Descripción |
|-------|-------------|
| **1** | Jaula visible, suavizado mínimo — ideal para editar |
| **2** | Suavizado medio, buen equilibrio calidad/rendimiento |
| **3** | Máximo suavizado para vista final |

El nivel afecta solo a la visualización; la jaula editable no cambia.

---

## Extrusión: Individual y Unida

La herramienta Extruir tiene dos modos seleccionables directamente en el botón cuando hay 2 o más caras seleccionadas:

- **Individual** — cada cara se extruye independientemente a lo largo de su propia normal
- **Unido** — todas las caras seleccionadas se extruyen como un bloque sólido en dirección a la normal común del grupo, sin que se separen entre sí

---

## Crease (aristas duras)

Permite controlar qué aristas resisten el suavizado:

- Pasar el ratón sobre una arista muestra una **previsualización** blanca
- Hacer clic alterna el estado crease de esa arista
- Las aristas con crease se muestran en **amarillo** sobre la malla
- Compatible con Loop Cut: al insertar un corte, los creases existentes se propagan correctamente a las nuevas aristas

---

## Loop Cut

Inserta un anillo de aristas perpendicular a un bucle de caras existente:

- Pasar el ratón por una cara muestra la **previsualización** del corte en morado
- Hacer clic aplica el corte, duplicando la densidad de esa banda de la jaula

---

## Subdividir jaula

Permite hornear un nivel de subdivisión como nueva jaula editable, añadiendo caras reales con las que trabajar. Aumenta la densidad de la malla de control para mayor detalle local.

- Máximo 1 aplicación (para mantener rendimiento)
- Irreversible excepto con `Ctrl + Z`

---

## Simetría

Edición espejada en tiempo real alrededor del eje X:

- Activar en el panel lateral dentro de Modo Edición
- Cada operación sobre una cara se replica automáticamente en su cara simétrica
- Ideal para modelar personajes y objetos bilateralmente simétricos

---

## Color

Dos niveles de color independientes:

- **Color de objeto** (Modo Objeto) — color base para toda la malla, con selector libre y restauración al color arcilla por defecto
- **Color de cara** (herramienta Pintar, Modo Edición) — sobreescribe el color en caras individuales; los colores de cara tienen prioridad sobre el color de objeto

---

## Panel de objetos

La barra lateral lista todos los objetos de la escena y permite:

- Identificar el tipo de forma base de cada objeto
- **Duplicar** un objeto (aparece desplazado 2.5 u. en X)
- **Eliminar** cualquier objeto, incluso si es el único de la escena

---

## Deshacer / Rehacer

- **Ctrl + Z** — deshace la última operación
- **Ctrl + Y** — rehace
- Historial global de hasta **20 pasos**, compartido entre todos los objetos de la escena
- Cubre operaciones de cara, transformaciones de objeto, creases, loop cuts y cambios de color

---

## Navegación de cámara

| Acción | Control |
|--------|---------|
| Orbitar | Clic izquierdo + arrastrar |
| Pan | Clic derecho o central + arrastrar |
| Zoom | Rueda del ratón |

---

## Modo solo lectura

Si la licencia ha expirado, el editor bloquea todas las modificaciones y muestra un banner de advertencia. La visualización y navegación de la escena siguen disponibles.

---

## Detalles técnicos

- **Motor 3D**: Three.js + `@react-three/fiber`
- **Subdivisión**: implementación propia de Catmull-Clark sobre malla quad
- **Raycasting**: sobre la malla subdividida (no la jaula) para máxima precisión visual
- **Líneas gruesas**: `LineSegments2` + `LineMaterial` para creases y previsualizaciones con grosor real en WebGL
- **Topología**: quad mesh — todas las caras son cuadriláteros para garantizar suavizado uniforme
- **Material**: `MeshStandardMaterial` con color por vértice (PBR)
- **Iluminación**: ambiental + dos direccionales fijas, sombras opcionales
