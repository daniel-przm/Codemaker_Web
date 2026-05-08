# VoxelStudio: Editor 3D estilo Minecraft en el navegador

VoxelStudio es el editor de diseño por vóxeles de Codemaker3D, pensado para que estudiantes construyan mundos y estructuras 3D de forma intuitiva, sin instalar nada, directamente en el navegador.

---

## ¿Qué es un vóxel?

Un vóxel (volumetric pixel) es el equivalente 3D de un píxel: un cubo de 1×1×1 unidades. VoxelStudio permite construir cualquier forma apilando y coloreando estos cubos, al estilo Minecraft.

---

## Herramientas de edición

El editor ofrece tres modos de trabajo que se activan desde la barra lateral izquierda:

| Herramienta | Función |
|-------------|---------|
| **Construir** (martillo) | Clic en la cara de un vóxel para añadir uno nuevo adyacente |
| **Pintar** (paleta) | Clic en un vóxel existente para cambiar su color |
| **Borrar** (borrador) | Clic en un vóxel para eliminarlo |

La herramienta de construir usa detección de normales de cara: el nuevo cubo aparece exactamente en la dirección donde apunta la cara clicada. Además, hay una protección que impide borrar el último vóxel de la escena.

---

## Paleta de colores

Hay 10 colores predefinidos, incluyendo **dos colores con transparencia** (opacidad al 60%), útiles para simular cristal o agua. Los vóxeles transparentes muestran sus aristas con menor opacidad para no saturar la escena.

Los colores se seleccionan en el panel de la barra lateral, que se despliega automáticamente al usar las herramientas de construir o pintar.

---

## Navegación de cámara

| Acción | Control |
|--------|---------|
| Rotar / orbitar | Clic izquierdo + arrastrar |
| Zoom | Rueda del ratón |
| Desplazar (pan) | Clic central o clic derecho + arrastrar |
| Resetear vista | Botón Home en la barra lateral |

El gizmo de ejes en la esquina superior izquierda (en tiempo real) ayuda a mantener la orientación espacial mientras se rota la cámara.

---

## Deshacer y rehacer

El sistema mantiene un historial de hasta **10 estados anteriores** en memoria. Los atajos de teclado son estándar:

- **Ctrl + Z** → Deshacer
- **Ctrl + Y** / **Ctrl + Shift + Z** → Rehacer

También hay botones de deshacer/rehacer en la cabecera del editor.

---

## Guardado y proyectos

- **Guardado manual**: botón en la cabecera, genera también una miniatura JPEG automáticamente.
- **Auto-guardado**: se activa cada 5 minutos si hay cambios pendientes (requiere licencia activa).
- Los proyectos se almacenan en Firestore con toda la información de los vóxeles y un indicador de cambios no guardados.

---

## Modo solo lectura

Si la licencia del usuario ha expirado, el editor entra en modo solo lectura: se bloquean las herramientas de edición, el guardado y los atajos de teclado. Un banner rojo en la parte superior informa del estado.

---

## Detalles técnicos

- **Renderizado**: Three.js con WebGL, antialiasing activado, ratio de píxeles adaptado al dispositivo.
- **Geometría**: una `BoxGeometry` compartida + `EdgesGeometry` para los bordes negros de cada vóxel.
- **Material**: `MeshStandardMaterial` (PBR) con roughness 0.2 y metalness 0.1.
- **Escena**: iluminación ambiental + luz direccional; fondo gris oscuro `#202025`; cuadrícula de 50×50 unidades.
- **Memoria**: geometrías y materiales se disponen (`dispose()`) en cada re-renderizado para evitar fugas.
- **Detección de colisiones**: tolerancia de 0.1 unidades para evitar duplicados por imprecisión de punto flotante.

---

## Estado inicial

Al crear un nuevo proyecto, la escena arranca con un único vóxel azul (`#007AFB`) centrado en el origen, sobre el plano de la cuadrícula.
