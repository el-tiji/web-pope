// GitHub Pages no sabe resolver rutas de una SPA (por ejemplo /web-pope/servicios).
// Copiando index.html como 404.html, GitHub Pages entrega la app y React Router
// se encarga de mostrar la página correcta.
import { copyFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const dist = resolve(root, 'dist');

copyFileSync(resolve(dist, 'index.html'), resolve(dist, '404.html'));
console.log('✔ dist/404.html generado (fallback de rutas para GitHub Pages)');
