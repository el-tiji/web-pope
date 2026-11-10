import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig(({ command }) => ({
  // En GitHub Pages el sitio se publica en https://<usuario>.github.io/web-pope/
  // En desarrollo se mantiene en la raíz (http://localhost:3000).
  base: command === 'build' ? '/web-pope/' : '/',
  plugins: [react()],
  server: {
    port: 3000,
  },
}))
