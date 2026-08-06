# Don Valerio Equipamientos — v2 (Vite + React)

Sitio de catálogo y armado de presupuesto. El cliente navega el catálogo,
suma equipos a su lista y la envía por WhatsApp. **No hay pago online** —
es un flujo B2B de cotización.

## Cambios respecto a la versión anterior

- **Build real con Vite.** Se eliminó Babel-en-navegador y React development mode.
  Antes el visitante descargaba ~4MB y compilaba JSX en su navegador; ahora recibe
  ~60KB de app (15KB gzip) minificados.
- **SEO completo.** Title optimizado, meta description, Open Graph (preview en
  WhatsApp/Facebook), Twitter Card, JSON-LD LocalBusiness, canonical, robots.txt y sitemap.xml.
- **Flujo de pago eliminado.** Las pantallas Checkout/Payment/Success capturaban
  tarjeta de crédito del lado del cliente (inseguro, y roto porque los productos no
  tienen precio). Se quitaron por completo. El único camino es presupuesto por WhatsApp.
- **Módulos ES.** Cada archivo importa/exporta explícitamente en vez de usar globales
  en `window`.
- **Security headers** configurados (`vercel.json` y `public/_headers`): CSP, HSTS,
  X-Frame-Options, nosniff, Referrer-Policy.

## Comandos

```bash
npm install       # instalar dependencias
npm run dev       # servidor de desarrollo
npm run build     # build de producción -> carpeta dist/
npm run preview   # previsualizar el build
```

## Deploy en Vercel

Subí el repo o la carpeta. Vercel detecta Vite automáticamente:
- Build command: `npm run build`
- Output directory: `dist`
- El `vercel.json` aplica los security headers solo.

## Pendiente / próximos pasos

1. **Imagen OG real.** Crear `public/assets/og-cover.jpg` (1200×630) para el preview
   al compartir el link. Ahora apunta a una ruta que hay que generar.
2. **Imagen del producto en el drawer del carrito.** El `CartDrawer` muestra un
   placeholder; se puede reemplazar por la foto real (`/assets/products/${sku}.png`).
3. **Verificar CUIT/CBU** en `src/data.js` (BANK_INFO) — quedaron datos de ejemplo.
4. Considerar routing real con URLs (`/catalogo`, `/producto/B60-V`) usando
   react-router, para que cada producto sea indexable individualmente.
