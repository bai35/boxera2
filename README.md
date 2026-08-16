# NEXO — Tienda de tecnología (proyecto React)

Proyecto de e-commerce completo inspirado en tiendas de celulares y tecnología
(catálogo, carrito y checkout), construido con **React + Vite + React Router**.
Todo el contenido (marca, productos, precios) es de ejemplo/genérico para que
lo reemplaces con tu propia información.

## Cómo correrlo

```bash
npm install
npm run dev
```

Abre el link que muestra la terminal (normalmente `http://localhost:5173`).

Para generar la versión de producción:

```bash
npm run build
npm run preview
```

## Estructura

```
src/
  components/   Header, Hero, ProductCard, Footer
  pages/        Home, Catalog, Cart, Checkout
  context/      CartContext (estado global del carrito)
  data/         products.js (catálogo de ejemplo)
  index.css     Sistema de diseño (variables, layout, componentes)
```

## Funcionalidades

- Catálogo con filtro por marca (iPhone, Samsung, iPad, Watch, MacBook).
- Carrito persistente (se guarda en `localStorage` del navegador).
- Editar cantidades / eliminar productos del carrito.
- Checkout con formulario de datos + método de pago y pantalla de confirmación.
- Envío gratis automático sobre S/ 3000.

## Personalizar

- **Productos:** edita `src/data/products.js`.
- **Colores y tipografías:** variables CSS al inicio de `src/index.css` (`:root`).
- **Textos de marca:** `Header.jsx`, `Hero.jsx` y `Footer.jsx`.
- **Checkout real:** el formulario actualmente simula el pedido en el frontend.
  Para producción necesitas conectar un backend o pasarela de pago (Culqi,
  Niubiz, Mercado Pago, etc.) y un método de envío de correos/WhatsApp.

## Nota

Este proyecto no reproduce el diseño, textos ni imágenes de ningún sitio
existente — es una plantilla original que puedes adaptar libremente.
