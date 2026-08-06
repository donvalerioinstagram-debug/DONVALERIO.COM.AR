import React from 'react';
import { CATEGORIES, PRODUCTS } from '../data.js';
import { Icon, Breadcrumb } from '../ui.jsx';

// ======== Cart = Armador de presupuesto ========

const WA_NUMBER = '5493416650190';

function buildWAMessage(items) {
  const lines = items.map(i => {
    const p = PRODUCTS.find(x => x.sku === i.sku);
    return `• ${p.name} (${p.sku}) — ${p.cap} — cantidad: ${i.qty}`;
  }).join('\n');
  return encodeURIComponent(
    `Hola Don Valerio! 👋 Quisiera solicitar un presupuesto para los siguientes equipos:\n\n${lines}\n\nQuedo a la espera. ¡Muchas gracias!`
  );
}

function CartDrawer({ open, close, cart, updateQty, removeItem, go }) {
  const items = cart.map(c => ({ ...PRODUCTS.find(x => x.sku === c.sku), qty: c.qty }));

  const handleWA = () => {
    close();
    window.open(`https://wa.me/${WA_NUMBER}?text=${buildWAMessage(cart)}`, '_blank');
  };

  return (
    <>
      <div className={`drawer-backdrop ${open ? 'open' : ''}`} onClick={close} />
      <div className={`drawer ${open ? 'open' : ''}`}>
        <div className="drawer-head">
          <div>
            <h3>Mi presupuesto</h3>
            <div style={{fontSize: 12, color: 'var(--ink-3)', marginTop: 2}}>{items.length} equipo{items.length !== 1 ? 's' : ''} en lista</div>
          </div>
          <button className="close" onClick={close}><Icon name="x" size={20}/></button>
        </div>
        <div className="drawer-body">
          {items.length === 0 && (
            <div style={{textAlign:'center', padding: '80px 20px', color: 'var(--ink-3)'}}>
              <Icon name="cart" size={40} />
              <p style={{marginTop: 16, fontWeight: 500}}>Tu lista está vacía</p>
              <p style={{fontSize: 13, marginTop: 8}}>Agregá equipos del catálogo para armar tu presupuesto.</p>
            </div>
          )}
          {items.map(i => (
            <div key={i.sku} className="line-item">
              <div className="li-img"><img src={`/assets/products/${i.sku}.webp`} alt={i.name} loading="lazy"/></div>
              <div>
                <div className="li-name">{i.name}</div>
                <div className="li-sku">{i.sku} · {i.cap}</div>
                <div className="li-qty">
                  <button onClick={() => updateQty(i.sku, i.qty - 1)}><Icon name="minus" size={10}/></button>
                  <span className="n">{i.qty}</span>
                  <button onClick={() => updateQty(i.sku, i.qty + 1)}><Icon name="plus" size={10}/></button>
                </div>
              </div>
              <div>
                <button className="li-remove" onClick={() => removeItem(i.sku)}>Quitar</button>
              </div>
            </div>
          ))}
        </div>
        {items.length > 0 && (
          <div className="drawer-foot">
            <button className="btn btn-primary btn-block btn-lg" style={{gap: 10}} onClick={handleWA}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
              Enviar por WhatsApp
            </button>
            <button className="btn btn-ghost btn-block" style={{marginTop: 8}} onClick={() => { close(); go('cart'); }}>
              Ver lista completa
            </button>
          </div>
        )}
      </div>
    </>
  );
}

function CartPage({ go, cart, updateQty, removeItem, clearCart }) {
  const items = cart.map(c => ({ ...PRODUCTS.find(x => x.sku === c.sku), qty: c.qty }));

  const handleWA = () => {
    window.open(`https://wa.me/${WA_NUMBER}?text=${buildWAMessage(cart)}`, '_blank');
  };

  if (items.length === 0) {
    return (
      <div className="container cart-page" style={{textAlign: 'center', padding: '80px 32px'}}>
        <div style={{fontSize: 56, marginBottom: 16}}>📋</div>
        <h2 style={{fontSize: 32, marginBottom: 12}}>Tu lista está vacía</h2>
        <p style={{color: 'var(--ink-2)', marginBottom: 32}}>Navegá el catálogo y sumá los equipos que te interesan.</p>
        <button className="btn btn-primary btn-lg" onClick={() => go('catalog')}>
          Ver catálogo <Icon name="arrow" size={16}/>
        </button>
      </div>
    );
  }

  return (
    <div className="container cart-page">
      <Breadcrumb items={[{label:'Inicio', to:'landing'},{label:'Mi presupuesto'}]} go={go}/>
      <div style={{display:'flex', justifyContent:'space-between', alignItems:'flex-end', marginBottom: 32}}>
        <div>
          <h1 style={{fontSize: 40}}>Mi presupuesto</h1>
          <p style={{color:'var(--ink-2)', marginTop: 8, fontSize: 15}}>
            Revisá tu lista y enviala por WhatsApp. Te respondemos con precios en el día.
          </p>
        </div>
        <button className="btn btn-ghost btn-sm" onClick={clearCart} style={{color: 'var(--ink-3)'}}>
          Limpiar lista
        </button>
      </div>

      <div className="cart-grid">
        <div className="cart-items">
          {items.map(i => (
            <div key={i.sku} className="cart-row">
              <div className="li-img"><img src={`/assets/products/${i.sku}.webp`} alt={i.name} loading="lazy"/></div>
              <div style={{flex: 1}}>
                <div className="li-sku">{i.sku} · {CATEGORIES.find(c => c.id === i.category)?.label}</div>
                <div style={{fontSize: 16, fontWeight: 600, marginTop: 4}}>{i.name}</div>
                <div style={{fontSize: 13, color: 'var(--sage)', marginTop: 2}}>{i.cap}</div>
                <button className="li-remove" style={{marginTop: 10}} onClick={() => removeItem(i.sku)}>Quitar de la lista</button>
              </div>
              <div className="li-qty">
                <button onClick={() => updateQty(i.sku, i.qty - 1)}><Icon name="minus" size={10}/></button>
                <span className="n">{i.qty}</span>
                <button onClick={() => updateQty(i.sku, i.qty + 1)}><Icon name="plus" size={10}/></button>
              </div>
            </div>
          ))}
        </div>

        <aside className="summary" style={{top: 120}}>
          <h4 style={{fontSize: 11, letterSpacing:'0.15em', textTransform:'uppercase', color:'var(--ink-3)', fontWeight: 600, paddingBottom: 14, borderBottom: '1px solid var(--line)', marginBottom: 16}}>
            Resumen
          </h4>
          <div style={{marginBottom: 20}}>
            {items.map(i => (
              <div key={i.sku} style={{display:'flex', justifyContent:'space-between', padding:'8px 0', borderBottom:'1px solid var(--line)', fontSize: 13}}>
                <div>
                  <div style={{fontWeight: 600}}>{i.name}</div>
                  <div style={{color:'var(--ink-3)', marginTop: 2}}>{i.cap} × {i.qty}</div>
                </div>
                <div style={{color:'var(--ink-3)', fontSize: 12, fontFamily:'JetBrains Mono, monospace'}}>×{i.qty}</div>
              </div>
            ))}
          </div>

          <div style={{padding: '16px', background: 'var(--accent-soft)', marginBottom: 20, borderLeft: '3px solid var(--accent)', fontSize: 13, lineHeight: 1.6}}>
            <b style={{display:'block', marginBottom: 4}}>¿Cómo funciona?</b>
            Enviamos tu lista por WhatsApp y un asesor te responde con precios actualizados, disponibilidad y opciones de financiación.
          </div>

          <button className="btn btn-primary btn-block btn-lg" style={{gap: 10}} onClick={handleWA}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
            Enviar presupuesto por WhatsApp
          </button>
          <button className="btn btn-ghost btn-block" style={{marginTop: 8}} onClick={() => go('catalog')}>
            Seguir buscando equipos
          </button>
          <div style={{marginTop: 16, fontSize: 12, color: 'var(--ink-3)', display:'flex', alignItems:'center', gap: 6}}>
            <Icon name="shield" size={12}/> L–V 8 a 16 hs · Respondemos en el día
          </div>
        </aside>
      </div>
    </div>
  );
}


export { CartDrawer, CartPage, buildWAMessage, WA_NUMBER };
