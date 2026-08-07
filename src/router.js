import { CATEGORIES, PRODUCTS } from './data.js';

/**
 * Router mínimo basado en la History API.
 * Estructura de URLs:
 *   /                                        -> landing
 *   /catalogo                                -> catálogo completo
 *   /presupuesto                             -> lista de presupuesto
 *   /:categoria                              -> catálogo filtrado
 *   /:categoria/:producto                    -> ficha de producto
 */

export const catBySlug = (slug) => CATEGORIES.find(c => c.slug === slug);
export const catById = (id) => CATEGORIES.find(c => c.id === id);
export const prodBySlug = (slug) => PRODUCTS.find(p => p.slug === slug);
export const prodBySku = (sku) => PRODUCTS.find(p => p.sku === sku);

/** Construye la ruta de una pantalla. */
export function pathFor(screen, props = {}) {
  if (screen === 'landing') return '/';
  if (screen === 'cart') return '/presupuesto';
  if (screen === 'catalog') {
    const c = props.category ? catById(props.category) : null;
    return c ? `/${c.slug}` : '/catalogo';
  }
  if (screen === 'product') {
    const p = prodBySku(props.sku);
    if (!p) return '/catalogo';
    const c = catById(p.category);
    return `/${c ? c.slug : 'producto'}/${p.slug}`;
  }
  return '/';
}

/** Interpreta la URL actual y devuelve { screen, props }. */
export function parsePath(pathname) {
  const parts = decodeURIComponent(pathname).split('/').filter(Boolean);

  if (parts.length === 0) return { screen: 'landing', props: {} };
  if (parts[0] === 'catalogo') return { screen: 'catalog', props: {} };
  if (parts[0] === 'presupuesto') return { screen: 'cart', props: {} };

  const cat = catBySlug(parts[0]);

  if (parts.length === 1) {
    return cat
      ? { screen: 'catalog', props: { category: cat.id } }
      : { screen: 'notfound', props: {} };
  }

  if (parts.length === 2) {
    const prod = prodBySlug(parts[1]);
    if (prod) return { screen: 'product', props: { sku: prod.sku } };
    return cat
      ? { screen: 'catalog', props: { category: cat.id } }
      : { screen: 'notfound', props: {} };
  }

  return { screen: 'notfound', props: {} };
}

/** Título y descripción por pantalla, para el <head>. */
export function metaFor(screen, props = {}) {
  const SUF = 'Don Valerio Equipamientos';
  if (screen === 'product') {
    const p = prodBySku(props.sku);
    if (p) {
      const c = catById(p.category);
      return {
        title: `${p.name} — ${c ? c.label : ''} en Rosario | ${SUF}`,
        desc: `${p.desc} Consultá precio y disponibilidad. Envíos a todo el país, retiro sin cargo en Rosario.`,
      };
    }
  }
  if (screen === 'catalog' && props.category) {
    const c = catById(props.category);
    if (c) return {
      title: `${c.label} en Rosario — ${c.desc} | ${SUF}`,
      desc: `${c.label} para panaderías, pastelerías y cocinas profesionales. ${c.desc}. Envíos a todo el país, retiro sin cargo en Rosario.`,
    };
  }
  if (screen === 'catalog') return {
    title: `Catálogo de Equipamiento Gastronómico en Rosario | ${SUF}`,
    desc: 'Batidoras, amasadoras, hornos, sobadoras y cámaras de fermentación. 42 modelos con stock en Rosario y envíos a todo el país.',
  };
  if (screen === 'cart') return {
    title: `Mi presupuesto | ${SUF}`,
    desc: 'Armá tu lista de equipos y envianos tu presupuesto por WhatsApp.',
  };
  return {
    title: 'Equipamiento Gastronómico y de Panadería en Rosario | Don Valerio',
    desc: 'Batidoras, amasadoras, hornos, sobadoras y cámaras de fermentación para panaderías, pastelerías y cocinas profesionales. 48 años equipando el rubro.',
  };
}

/** Aplica title, description, canonical y OG al documento. */
export function applyMeta(screen, props) {
  const { title, desc } = metaFor(screen, props);
  const url = 'https://www.donvalerio.com.ar' + pathFor(screen, props);

  document.title = title;

  const set = (sel, attr, val) => {
    let el = document.head.querySelector(sel);
    if (!el) {
      el = document.createElement(sel.startsWith('link') ? 'link' : 'meta');
      if (sel.includes('property=')) el.setAttribute('property', sel.match(/property='([^']+)'/)[1]);
      else if (sel.includes('name=')) el.setAttribute('name', sel.match(/name='([^']+)'/)[1]);
      else if (sel.includes('rel=')) el.setAttribute('rel', 'canonical');
      document.head.appendChild(el);
    }
    el.setAttribute(attr, val);
  };

  set("meta[name='description']", 'content', desc);
  set("meta[property='og:title']", 'content', title);
  set("meta[property='og:description']", 'content', desc);
  set("meta[property='og:url']", 'content', url);
  set("link[rel='canonical']", 'href', url);
}
