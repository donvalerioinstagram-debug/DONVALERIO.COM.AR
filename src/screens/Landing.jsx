import React from 'react';
import { CATEGORIES, PRODUCTS, BRAND } from '../data.js';
import { Icon, Placeholder, HeroCarousel, CategoryCarousel, ProductCard } from '../ui.jsx';

function Landing({ go, addToCart }) {
  return (
    <>
      <section className="hero">
        <div className="container hero-grid">
          <div>
            <div className="hero-eyebrow">Rosario · Desde 1978</div>
            <h1>Máquinas que <em>hornean</em> historias.</h1>
            <p className="hero-lede">
              Batidoras, amasadoras, hornos y cámaras de fermentación para panaderías,
              pastelerías y cocinas profesionales. Consultanos y armamos el presupuesto
              para tu proyecto.
            </p>
            <div className="hero-actions">
              <button className="btn btn-primary btn-lg" onClick={() => go('catalog')}>
                Ver catálogo <Icon name="arrow" size={16}/>
              </button>
              <button className="btn btn-outline btn-lg" onClick={() => {
                const msg = encodeURIComponent('Hola Don Valerio, me gustaría recibir asesoramiento sobre equipamiento para panadería/gastronomía.');
                window.open(`https://wa.me/5493416650190?text=${msg}`, '_blank');
              }}>
                Hablar con un asesor
              </button>
            </div>
            <div className="hero-stats">
              <div className="stat"><div className="n">48 años</div><div className="l">Equipando panaderías</div></div>
              <div className="stat"><div className="n">2.800+</div><div className="l">Máquinas instaladas</div></div>
              <div className="stat"><div className="n">12 meses</div><div className="l">Garantía oficial</div></div>
            </div>
          </div>
          <div>
            <HeroCarousel />
          </div>
        </div>
      </section>

      <section style={{background: 'var(--ink)', padding: '40px 0'}}>
        <div className="container">
          <p style={{color: '#fff', fontSize: 24, fontWeight: 700, letterSpacing: '0.02em', textAlign: 'center', margin: 0, lineHeight: 1.4}}>
            SOMOS UNA EMPRESA DEDICADA A PROVEER EL EQUIPAMIENTO QUE MAS SE AJUSTE A LAS NECESIDADES DE CADA CLIENTE
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <div>
              <div className="eyebrow">01 — Líneas de producto</div>
              <h2>Nueve líneas, todo el oficio cubierto.</h2>
            </div>
            <button className="btn btn-ghost" onClick={() => go('catalog')}>Ver todo <Icon name="arrow" size={14}/></button>
          </div>
          <div className="cat-grid" style={{gridTemplateColumns: 'repeat(3, 1fr)'}}>
            {CATEGORIES.map(c => (
              <div key={c.id} className="cat-cell" onClick={() => go('catalog', { category: c.id })}>
                <div className="num">{c.n} / {String(CATEGORIES.length).padStart(2,'0')}</div>
                <div>
                  <h3>{c.label}</h3>
                  <div className="count">{c.desc}</div>
                </div>
                <CategoryCarousel categoryId={c.id} />
                <div className="arrow">→</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <div>
              <div className="eyebrow">02 — Más consultados</div>
              <h2>Los favoritos del oficio.</h2>
            </div>
          </div>
          <div className="product-grid">
            {['B20-V','BHS-30-B','EB-4A','YH-16','SB-3HP','TRINCH-CE'].map(sku => {
              const p = PRODUCTS.find(x => x.sku === sku);
              return p ? <ProductCard key={sku} p={p} go={go} addToCart={addToCart} /> : null;
            })}
          </div>
        </div>
      </section>

      <section id="nosotros" className="section" style={{borderBottom: 0}}>
        <div className="container">
          <div className="section-head">
            <div>
              <div className="eyebrow">03 — Por qué Don Valerio</div>
              <h2>Un servicio que amasa confianza desde 1978.</h2>
            </div>
          </div>
          <p style={{maxWidth: 720, color: 'var(--ink-2)', fontSize: 15, lineHeight: 1.7, marginBottom: 40}}>
            Somos una empresa nueva en el mercado, con mas de 50 años de trayectoria familiar en el rubro, que garantizan una atención personalizada y de calidad.<br/><br/>
            Tenemos venta de productos nacionales e importados y además contamos con servicio post-venta con el propósito de mantener una excelente relación con nuestros clientes aun después de finalizada la compra.
          </p>
          <div className="cat-grid" style={{gridTemplateColumns: 'repeat(3, 1fr)'}}>
            <div className="cat-cell" style={{cursor: 'default'}}>
              <Icon name="truck" size={28} />
              <div>
                <h3 style={{marginTop: 40}}>Envío a todo el país</h3>
                <div className="count">Flete propio en el Gran Rosario, logística al resto del país.</div>
              </div>
            </div>
            <div id="garantia" className="cat-cell" style={{cursor: 'default'}}>
              <Icon name="shield" size={28} />
              <div>
                <h3 style={{marginTop: 40}}>Garantía 12 meses</h3>
                <div className="count">12 meses de garantía oficial. Repuestos originales siempre.</div>
              </div>
            </div>
            <div className="cat-cell" style={{cursor: 'default'}}>
              <Icon name="tool" size={28} />
              <div>
                <h3 style={{marginTop: 40}}>Servicio técnico propio</h3>
                <div className="count">Taller en Rosario, asistencia remota y visitas programadas.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contacto" className="section" style={{borderBottom: 0}}>
        <div className="container">
          <div className="section-head">
            <div>
              <div className="eyebrow">04 — Contacto</div>
              <h2>Hablemos de tu proyecto.</h2>
            </div>
          </div>
          <div className="cat-grid" style={{gridTemplateColumns: 'repeat(3, 1fr)'}}>
            <div className="cat-cell" style={{cursor: 'default'}}>
              <Icon name="phone" size={28} />
              <div>
                <h3 style={{marginTop: 40}}>{BRAND.phone}</h3>
                <div className="count">L–V de 8 a 16 hs</div>
              </div>
            </div>
            <div className="cat-cell" style={{cursor: 'default'}}>
              <Icon name="pin" size={28} />
              <div>
                <h3 style={{marginTop: 40}}>Rosario, Santa Fe</h3>
                <div className="count">{BRAND.address}</div>
              </div>
            </div>
            <div className="cat-cell" style={{cursor: 'pointer'}} onClick={() => {
              const msg = encodeURIComponent('Hola Don Valerio, me gustaría recibir asesoramiento sobre equipamiento para panadería/gastronomía.');
              window.open(`https://wa.me/5493416650190?text=${msg}`, '_blank');
            }}>
              <Icon name="whatsapp" size={28} />
              <div>
                <h3 style={{marginTop: 40}}>WhatsApp</h3>
                <div className="count">Escribinos y te asesoramos al instante</div>
              </div>
              <div className="arrow">→</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}


export { Landing };
