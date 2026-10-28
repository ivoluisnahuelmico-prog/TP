# AGENTS.md — Instrucciones del proyecto

## Proyecto
PC Builder: comparador de componentes de PC gamer.

## Reglas del proyecto
- Usar únicamente HTML5, CSS3 y JavaScript puro (sin frameworks, sin React, sin dependencias externas).
- Mantener el HTML, el CSS y el JavaScript en archivos separados: `index.html`, `style.css`, `script.js`.
- No usar backend ni bases de datos: los datos viven en un array dentro de `script.js`.
- Todos los precios y datos son ficticios (ejemplo) y deben identificarse como tales.
- No dejar botones que parezcan funcionales pero no lo sean.
- Usar nombres de variables y funciones claros y fáciles de entender.

## Cómo ejecutar
- Servir la carpeta con un servidor local, por ejemplo: `python -m http.server 8000`
- Abrir en el navegador: `http://localhost:8000`

## Estructura de archivos
- `index.html`: estructura de la página.
- `style.css`: estilos.
- `script.js`: datos de ejemplo y lógica.
- `AGENTS.md`: este archivo.

## Convenciones
- Estado de la interfaz (seleccionados, filtros, búsqueda) en variables/objetos dentro de `script.js`.
- Una función por cada pieza de la interfaz (render, filtro, comparación).
