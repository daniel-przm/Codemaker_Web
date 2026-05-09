---
title: "Qué es Robotics Studio: programa un robot real sin salir del navegador"
description: "Robotics Studio es el editor de robótica educativa de Codemaker3D. Diseña un mapa, programa un robot con bloques visuales y observa la simulación 3D en tiempo real, sin hardware."
pubDate: 2026-05-08
tags: ["Robótica", "Robotics Studio", "Educación", "Docentes"]
draft: false
---

# RoboticsStudio: Programa un robot real… sin salir del navegador

RoboticsStudio es el editor de robótica educativa de Codemaker3D. Los estudiantes diseñan un mapa, programan un robot con bloques visuales y lo ven ejecutar en una simulación 3D en tiempo real. No requiere hardware, cables ni instalación.

---

## El robot

El personaje principal es un robot de tracción diferencial (dos ruedas independientes), al estilo de los robots educativos físicos como mBot o Thymio. Su aspecto es completamente personalizable:

- **Color del cuerpo** y **color de las ruedas** ajustables
- **Pantalla LED 16×8** en la parte frontal, editable píxel a píxel para mostrar caras, símbolos o patrones
- **LED de estado** en la parte trasera que cambia de color con el código

---

## Diseñar el mapa

Antes de programar, los estudiantes construyen el entorno donde el robot se moverá. El terreno es una cuadrícula de 12×12 casillas. Las herramientas del panel izquierdo permiten pintar:

**Elementos 3D:**
- Pared (cubo rojo, obstáculo físico)
- Salida (casilla de inicio, triángulo azul)
- Meta (bandera verde animada)
- Moneda (moneda dorada flotante con animación)

**Colores de suelo:**
- Rojo · Azul · Amarillo · Verde · Morado

**Siguelíneas** (para practicar algoritmos de línea):
- Líneas rectas N-S y E-W
- Curvas en las cuatro esquinas (NE, NO, SE, SO)
- Las líneas se simulan con precisión: el sensor las detecta solo dentro de una franja de ±0.15 casillas

---

## Programar con bloques (Blockly)

El panel derecho es el entorno de programación visual basado en Blockly. Todo el código va dentro del bloque **"Al iniciar"** (punto de entrada único). El código generado es JavaScript asíncrono, lo que permite manejar tiempos de espera y movimientos secuenciales de forma natural.

### Categorías de bloques

#### Movimiento por pasos
Ideal para recorridos predefinidos:
- Avanzar / Retroceder N casillas
- Girar izquierda / derecha N grados
- Detener

#### Movimiento preciso
Para control granular en bucles de siguelíneas:
- Avanzar / Retroceder 0.05 unidades
- Girar 2° izquierda / derecha

#### Sensores
Todos devuelven booleano o número, listos para usar en condiciones:

| Bloque | Descripción |
|--------|-------------|
| `Sensor izquierdo / derecho` | True si el IR detecta línea negra |
| `Distancia` | Número de casillas hasta la pared frontal |
| `Obstáculo adelante` | True si hay pared a ≤1 casilla |
| `Borde adelante` | True si la siguiente casilla sale del mapa |
| `Detectar moneda` | True si el robot está sobre una moneda |
| `Detectar meta` | True si el robot está sobre la meta |
| `Detectar color` | True si el suelo es del color indicado |

#### LED y pantalla
- Encender LED de estado con color personalizado (20 colores predefinidos + selector hex)
- Apagar LED
- Dibujar patrón en la pantalla 16×8 (editor visual integrado en el bloque)
- Limpiar pantalla

#### Control y lógica
- Bucle infinito (`Para siempre`)
- Mientras / Hasta que
- Esperar N segundos
- Repetir N veces
- Si / Si-entonces-si-no
- Operaciones lógicas (Y, O) y comparaciones

#### Variables
- Crear, asignar e incrementar variables
- Los valores se muestran en tiempo real en el panel de sensores durante la simulación

---

## Ejecutar y depurar

Con el mapa listo y el código escrito, tres botones controlan la simulación:

- **▶ Ejecutar** — lanza el programa (el robot debe estar en la casilla de Salida si existe)
- **⏹ Detener** — interrumpe la ejecución en cualquier momento
- **⏮ Reiniciar** — devuelve el robot a su posición inicial y limpia el estado

**Feedback visual durante la ejecución:**
- El robot se mueve con interpolación suave (lerp/slerp)
- Al chocar con una pared: animación de golpe + emoji 💥 flotante
- Al recoger una moneda: tostada "⭐ +1 Moneda" + la moneda desaparece
- Al llegar a la meta: tostada "🚩 ¡Meta!" + animación de bandera

---

## Panel de sensores en tiempo real

El panel izquierdo muestra el estado del robot mientras simula:

- **Vista del robot**: mini canvas 3D con dos modos:
  - **Robot** — vista isométrica del terreno desde arriba
  - **Selfie** — cámara detrás del robot, simulando una perspectiva en primera persona
- **Sensores IR**: indicadores IZQ / DER que muestran en verde (negro detectado) o rojo (blanco)
- **Variables**: selector desplegable con el valor actualizado en tiempo real
- **LED**: muestra el color actual del LED de estado (o "Apagado")

---

## Navegación de cámara

| Acción | Control |
|--------|---------|
| Rotar vista | Clic izquierdo + arrastrar (suelo vacío) |
| Pan | Clic central |
| Zoom | Rueda del ratón |
| Resetear cámara | Botón "N" (vista isométrica por defecto) |

Una brújula en tiempo real indica siempre la orientación de la cámara respecto al norte del mapa.

---

## Guardado y proyectos

- **Guardado manual** desde la cabecera (captura thumbnail automático)
- **Auto-guardado** cada 30 segundos si hay cambios pendientes
- El proyecto almacena: terreno, código Blockly (XML), posición del robot y apariencia personalizada
- **Borrador local** guardado en `localStorage` para no perder el código en caso de recarga

---

## Modo solo lectura

Si la licencia ha expirado, el editor de terreno queda deshabilitado (opacidad al 50%) y el guardado se bloquea. El panel de programación y la simulación permanecen accesibles para revisar el trabajo.

---

## Detalles técnicos

- **Renderizado 3D**: Three.js + React Three Fiber
- **Física**: Sistema de cuadrícula 2D personalizado (sin motor físico externo)
- **Colisión**: Sondeo amplio en 3 puntos perpendiculares al movimiento (evita clipping en esquinas)
- **Detección de línea**: Comprueba si el punto del sensor cae dentro de la franja de la casilla (±0.15 unidades)
- **Programación**: Blockly cargado desde CDN, tema oscuro, genera JavaScript asíncrono con `AbortController` para la parada
- **Pantalla LED**: Textura procedural en canvas (16×8 píxeles) aplicada como mapa al modelo 3D
- **Interpolación**: Posición con lerp 0.12, rotación con slerp 0.18 (movimiento suave por frame)
- **Animaciones de eventos**: Sprites emoji con desvanecimiento de 1.4 segundos
