# Pope Cleaning Service - Web Frontend (React + Vite + Tailwind CSS)

Módulo cliente y administrativo web del **Trabajo de Grado: Pope Cleaning Service** (Universidad de San Buenaventura Bogotá).

- **Desarrollador:** Manuel Alejandro Tinjaca Simijaca

## Requisitos

- Node.js 20+
- npm

## Instalación y arranque

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # build de producción en dist/
npm run lint
```

## Stack

- React 19 + Vite 8 (JavaScript / JSX)
- React Router (`react-router-dom`)
- Tailwind CSS v3 (`tailwind.config.js` + `postcss.config.js`)
- Íconos: `lucide-react`

> Se usa Tailwind v3 porque en este equipo Windows (Smart App Control) bloquea el binario nativo de Tailwind v4.

## Estructura del código

- `src/App.jsx`: rutas de la aplicación.
- `src/components/Navbar.jsx`, `src/components/Footer.jsx`: layout común.
- `src/pages/Home.jsx`: landing page y vista general de servicios.
- `src/pages/Services.jsx`: catálogo completo de servicios.
- `src/pages/Pricing.jsx`: factores de cálculo de tarifas.
- `src/pages/QuoteWizard.jsx`: cotizador de 5 pasos con estimación en tiempo real.
- `src/pages/AboutUs.jsx`: información corporativa y académica.
- `src/pages/AdminLogin.jsx`: ingreso del staff administrativo (simulado).
- `src/pages/AdminDashboard.jsx`: dashboard con sugerencias del agente IA (Human-in-the-loop).
- `src/data/mockData.js`: datos de ejemplo.
- `src/services/api.js`: cliente REST (`VITE_API_URL`, por defecto `http://localhost:8000/api/v1`) con respuesta simulada si la API no responde.
