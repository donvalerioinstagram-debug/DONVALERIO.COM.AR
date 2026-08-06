import React, { useState } from 'react';
import { CATEGORIES, PRODUCTS, FICHAS } from '../data.js';
import { Icon, Placeholder, Breadcrumb } from '../ui.jsx';

function Product({ go, addToCart, sku }) {
  const p = PRODUCTS.find(x => x.sku === sku) || PRODUCTS[0];
  const [qty, setQty] = useState(1);
  const [imgIdx, setImgIdx] = useState(0);
  const catLabel = CATEGORIES.find(c => c.id === p.category)?.label || '—';

  const handleWA = () => {
    const msg = encodeURIComponent(
      `Hola Don Valerio! Quisiera consultar el precio del siguiente equipo:\n\n` +
      `• ${p.name} (${p.sku}) — ${p.cap} — Cantidad: ${qty}\n\n` +
      `Gracias!`
    );
    window.open(`https://wa.me/5493416650190?text=${msg}`, '_blank');
  };

  return (
    <div className="container pd">
      <Breadcrumb items={[
        {label:'Inicio', to:'landing'},
        {label:'Catálogo', to:'catalog'},
        {label: catLabel, to:'catalog'},
        {label: p.name}
      ]} go={go} />

      <div className="pd-grid">
        <div className="pd-gallery">
          <Placeholder code={`${p.sku}/${imgIdx + 1}`} name={p.cap} aspect="4/3" img={p.img} />
        </div>

        <div className="pd-info">
          <div style={{fontSize: 12, color: 'var(--sage)', letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: 600, marginBottom: 10}}>
            {catLabel}
          </div>
          <h1>{p.name}</h1>
          <div className="sku-row">
            <span>Modelo · {p.sku}</span>
            <span>Capacidad · {p.cap}</span>
            {p.order ? (
              <span className="stock-tag" style={{background:'color-mix(in oklch, var(--warn) 12%, transparent)', color:'var(--warn)'}}>A pedido · 30 días</span>
            ) : (
              <span className="stock-tag">✓ Stock disponible</span>
            )}
          </div>
          <p className="pd-desc">{p.desc}</p>

          <div style={{
            margin: '24px 0',
            padding: '20px 24px',
            background: 'var(--accent-soft)',
            borderLeft: '3px solid var(--accent)',
            fontSize: 14,
            color: 'var(--ink-2)',
            lineHeight: 1.6,
          }}>
            <b style={{color: 'var(--ink)', display: 'block', marginBottom: 4}}>Consultá el precio</b>
            Agregá este equipo a tu lista y envianos tu presupuesto por WhatsApp.
            Te respondemos en el día con precio, disponibilidad y financiación.
          </div>

          <div className="qty-picker">
            <button onClick={() => setQty(Math.max(1, qty - 1))}><Icon name="minus" size={14}/></button>
            <div className="n">{qty}</div>
            <button onClick={() => setQty(qty + 1)}><Icon name="plus" size={14}/></button>
          </div>

          <div className="pd-cta">
            <button className="btn btn-primary btn-lg" onClick={() => { addToCart(p.sku, qty); go('cart'); }}>
              Agregar al presupuesto
            </button>
            <button className="btn btn-outline btn-lg" onClick={handleWA} title="Consultar por WhatsApp">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
              Consultar ahora
            </button>
          </div>

          <div className="pd-specs">
            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16}}>
              <h3>Ficha técnica</h3>
              {FICHAS.includes(p.sku) && (
                <a className="btn btn-outline" href={`/assets/fichas/${p.sku}.webp`} download={`Ficha tecnica ${p.sku}.webp`} style={{fontSize: 13, padding: '8px 16px', whiteSpace: 'nowrap'}}>
                  Descargar ficha técnica
                </a>
              )}
            </div>
            {p.specs.map(([k,v], i) => (
              <div key={i} className="spec-row">
                <span className="k">{k}</span>
                <span className="v">{v}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}


export { Product };
