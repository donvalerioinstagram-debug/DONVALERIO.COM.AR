import React, { useState, useEffect, useMemo, useRef } from 'react';
import { CATEGORIES, PRODUCTS, BRAND } from './data.js';

// ======== Topbar label and logo updated ========


function scrollToId(id) {
  const el = document.getElementById(id);
  if (el) {
    const top = el.getBoundingClientRect().top + window.pageYOffset - 90;
    window.scrollTo({ top, behavior: 'smooth' });
  }
}

function goToSection(go, currentScreen, id) {
  if (currentScreen !== 'landing') {
    go('landing');
    setTimeout(() => scrollToId(id), 100);
  } else {
    scrollToId(id);
  }
}

function Icon({ name, size = 18, stroke = 1.6 }) {
  const props = {
    width: size, height: size, viewBox: "0 0 24 24",
    fill: "none", stroke: "currentColor", strokeWidth: stroke,
    strokeLinecap: "round", strokeLinejoin: "round"
  };
  switch (name) {
    case 'search': return <svg {...props}><circle cx="11" cy="11" r="7"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>;
    case 'cart': return <svg {...props}><path d="M3 3h2l2.4 12.5a2 2 0 0 0 2 1.5h9.2a2 2 0 0 0 2-1.5L23 6H6"/><circle cx="9" cy="21" r="1.5"/><circle cx="19" cy="21" r="1.5"/></svg>;
    case 'plus': return <svg {...props}><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>;
    case 'minus': return <svg {...props}><line x1="5" y1="12" x2="19" y2="12"/></svg>;
    case 'check': return <svg {...props}><polyline points="20 6 9 17 4 12"/></svg>;
    case 'arrow': return <svg {...props}><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>;
    case 'x': return <svg {...props}><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>;
    case 'lock': return <svg {...props}><rect x="4" y="11" width="16" height="10" rx="1"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/></svg>;
    case 'truck': return <svg {...props}><path d="M1 3h14v13H1z"/><path d="M15 8h5l3 3v5h-8z"/><circle cx="5.5" cy="18.5" r="2"/><circle cx="18.5" cy="18.5" r="2"/></svg>;
    case 'shield': return <svg {...props}><path d="M12 2l8 4v6c0 5-3.5 9-8 10-4.5-1-8-5-8-10V6l8-4z"/></svg>;
    case 'tool': return <svg {...props}><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>;
    case 'info': return <svg {...props}><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12" y2="8"/></svg>;
    case 'phone': return <svg {...props}><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>;
    case 'pin': return <svg {...props}><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 1 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>;
    case 'whatsapp': return <svg {...props} viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M17.5 14.4c-.3-.15-1.7-.85-1.95-.95-.27-.1-.45-.15-.65.15-.2.3-.75.95-.9 1.15-.17.2-.35.22-.65.07-.3-.15-1.25-.46-2.4-1.5-.9-.8-1.5-1.8-1.68-2.1-.17-.3-.02-.47.13-.62.15-.15.35-.4.5-.6.15-.2.2-.35.3-.55.1-.2.05-.4-.05-.55-.1-.15-.9-2.15-1.05-2.35-.15-.2-.3-.17-.4-.17-.1 0-.5-.05-.85.35-.35.4-1.35 1.3-1.35 2.85s1.05 3.15 1.2 3.35c.15.2 1.95 3.05 4.85 4.15 2.9 1.1 2.9.7 3.4.65.5-.05 1.7-.7 1.9-1.35.2-.65.2-1.2.15-1.35-.05-.15-.2-.2-.5-.35z"/><path d="M12 2a10 10 0 0 0-8.5 15.2L2 22l4.9-1.4A10 10 0 1 0 12 2z"/></svg>;
    default: return null;
  }
}

function Placeholder({ code, name, aspect = "4 / 3", img }) {
  if (img) {
    return (
      <div className="ph ph-photo" style={{ aspectRatio: aspect }}>
        <img src={`/assets/products/${img}.webp`} alt={name} loading="lazy"/>
      </div>
    );
  }
  return (
    <div className="ph" style={{ aspectRatio: aspect }}>
      <div className="ph-label">
        <span className="code">{code}</span>
        <span>{name}</span>
      </div>
    </div>
  );
}

function Topbar({ currentScreen, go, cartCount, cartBump, openCart }) {
  return (
    <header className="topbar">
      <div className="topbar-strip">
        <div className="container">
          <span>Envío a todo el país · Retiro sin cargo en Rosario</span>
          <span>L–V 8 a 16 hs · {BRAND.phone}</span>
        </div>
      </div>
      <div className="topbar-main">
        <div className="logo" onClick={() => go('landing')}>
          <div className="logo-mark"><img src="/assets/logo.png" alt="Don Valerio"/></div>
          <div className="logo-text">
            <span className="brand">Don Valerio</span>
            <span className="sub">Equipamientos</span>
          </div>
        </div>
        <nav className="nav">
          <a className={currentScreen === 'catalog' ? 'active' : ''} onClick={() => go('catalog')}>Catálogo</a>
          <a onClick={() => goToSection(go, currentScreen, 'nosotros')}>Nosotros</a>
          <a onClick={() => goToSection(go, currentScreen, 'garantia')}>Garantía</a>
          <a onClick={() => goToSection(go, currentScreen, 'contacto')}>Contacto</a>
        </nav>
        <div className="topbar-actions">
          <div className="search">
            <Icon name="search" size={15} />
            <input placeholder="Buscar modelo, categoría…" />
          </div>
          <button className="cart-btn" onClick={openCart}>
            <Icon name="cart" size={16} />
            <span>Presupuesto</span>
            <span className={`cart-count ${cartBump ? 'bump' : ''}`}>{cartCount}</span>
          </button>
        </div>
      </div>
    </header>
  );
}

function Footer({ go }) {
  const wa = (msg) => window.open(`https://wa.me/5493416650190?text=${encodeURIComponent(msg)}`, '_blank');
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="fbrand">
            <div className="logo">
              <div className="logo-mark"><img src="/assets/logo.png" alt="Don Valerio"/></div>
              <div className="logo-text">
                <span className="brand">Don Valerio</span>
                <span className="sub">Equipamientos</span>
              </div>
            </div>
            <p className="fbrand-desc">Equipamiento profesional para panadería, pastelería y gastronomía. {BRAND.address}.</p>
          </div>
          <div>
            <h5>Productos</h5>
            {CATEGORIES.map(c => (
              <a key={c.id} onClick={() => go('catalog', { category: c.id })}>{c.label}</a>
            ))}
          </div>
          <div>
            <h5>Empresa</h5>
            <a onClick={() => goToSection(go, null, 'nosotros')}>Sobre nosotros</a>
            <a onClick={() => wa('Hola, quisiera saber si están buscando personal para sumarse al equipo de Don Valerio.')}>Trabajá con nosotros</a>
            <a onClick={() => goToSection(go, null, 'contacto')}>Contacto</a>
          </div>
          <div>
            <h5>Ayuda</h5>
            <a onClick={() => wa('Hola, tengo una consulta sobre sus productos.')}>Preguntas frecuentes</a>
            <a onClick={() => goToSection(go, null, 'garantia')}>Garantía</a>
            <a onClick={() => wa('Hola, quisiera consultar sobre envíos.')}>Envíos</a>
            <a onClick={() => wa('Hola, necesito servicio técnico para un equipo.')}>Servicio técnico</a>
          </div>
        </div>
        <div className="footer-base">
          <span>© 2026 DON VALERIO EQUIPAMIENTOS</span>
          <span>ROSARIO · SANTA FE · ARGENTINA</span>
        </div>
      </div>
    </footer>
  );
}

function Breadcrumb({ items, go }) {
  return (
    <div className="breadcrumb">
      {items.map((it, i) => (
        <React.Fragment key={i}>
          {i > 0 && <span className="sep">/</span>}
          {it.to ? <a onClick={() => go(it.to)}>{it.label}</a> : <span>{it.label}</span>}
        </React.Fragment>
      ))}
    </div>
  );
}

const HERO_SLIDES = [
  { type: 'logo' },
  { sku: 'B60-V', label: 'Batidora Planetaria 60 Lt' },
  { sku: 'BH-130', label: 'Amasadora Rápida 50 kg' },
  { sku: 'DSL-6B', label: 'Horno de Piso Refractario 3 Pisos' },
  { sku: 'HL-R10D', label: 'Horno Rotativo 10 Bandejas' },
  { sku: 'YH-32', label: 'Cámara de Fermentación 32 Bandejas' },
  { sku: 'BDQ-650E', label: 'Laminadora Vaivén de Pie 650 mm' },
  { sku: 'TRINCH-CE', label: 'Trinchadora Compacta con Embrague' },
];

function HeroCarousel() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI(v => (v + 1) % HERO_SLIDES.length), 4000);
    return () => clearInterval(t);
  }, []);
  return (
    <div className="hero-carousel">
      {HERO_SLIDES.map((s, idx) => (
        <div className={`hc-slide ${idx === i ? 'active' : ''} ${s.type === 'logo' ? 'hc-logo' : ''}`} key={idx}>
          {s.type === 'logo'
            ? <img src="/assets/logo.png" alt="Don Valerio"/>
            : <img src={`/assets/products/${s.sku}.webp`} alt={s.label}/>}
        </div>
      ))}
      {HERO_SLIDES.find((s,idx)=>idx===i && s.label) && <div className="hc-caption">{HERO_SLIDES[i].label}</div>}
      <div className="hc-dots">
        {HERO_SLIDES.map((_, idx) => (
          <button key={idx} className={`hc-dot ${idx === i ? 'active' : ''}`} onClick={() => setI(idx)} aria-label={`Slide ${idx + 1}`}/>
        ))}
      </div>
    </div>
  );
}

function CategoryCarousel({ categoryId }) {
  const items = useMemo(() => PRODUCTS.filter(p => p.category === categoryId && p.img).map(p => ({ sku: p.sku, img: p.img })), [categoryId]);
  const [i, setI] = useState(0);
  useEffect(() => {
    if (items.length < 2) return;
    const t = setInterval(() => setI(v => (v + 1) % items.length), 2200);
    return () => clearInterval(t);
  }, [items.length]);
  if (!items.length) return null;
  return (
    <div className="mini-carousel">
      {items.map((it, idx) => (
        <img key={it.sku} className={idx === i ? 'active' : ''} src={`/assets/products/${it.img}.webp`} alt=""/>
      ))}
    </div>
  );
}



function ProductCard({ p, go, addToCart }) {
  return (
    <div className="card" onClick={() => go('product', { sku: p.sku })}>
      <Placeholder code={p.sku} name={p.cap} img={p.img} />
      <div className="card-body">
        <div className="card-sku">{p.sku}</div>
        <h4>{p.name}</h4>
        <div className="brand-name" style={{fontSize: 12, color: 'var(--sage)', fontWeight: 500, letterSpacing: '0.04em', textTransform: 'uppercase', marginBottom: 8}}>
          {p.cap}
        </div>
        <div className="card-foot">
          <div style={{fontSize: 13, color: 'var(--ink-2)'}}>
            {CATEGORIES.find(c => c.id === p.category)?.label}
          </div>
          <button className="add-btn" onClick={(e) => { e.stopPropagation(); addToCart(p.sku, 1); }}>
            <Icon name="plus" size={12}/> Presupuestar
          </button>
        </div>
      </div>
    </div>
  );
}

export { Icon, Placeholder, Topbar, Footer, Breadcrumb, HeroCarousel, CategoryCarousel, ProductCard };
