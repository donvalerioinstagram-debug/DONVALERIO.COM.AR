import React, { useState, useMemo } from 'react';
import { CATEGORIES, PRODUCTS } from '../data.js';
import { Breadcrumb, ProductCard } from '../ui.jsx';

function Catalog({ go, addToCart, category }) {
  const [cat, setCat] = useState(category || 'all');
  const [sort, setSort] = useState('featured');
  const [volt, setVolt] = useState('all');

  const CAT_INTRO = {
    batidoras: 'En Don Valerio Equipamientos, tenemos para ofrecer una amplia línea de batidoras planetarias. Nacionales o importadas, de 7 a 60 litros, para emprendimientos o producción intensiva.\n\nSi estas por emprender, necesitas renovar los equipos de tu negocio o simplemente sos fan de la cocina, somos el lugar indicado.\nConsultanos por todos los modelos que tenemos disponibles y elegí la tuya.',
    amasadoras: 'En Don Valerio Equipamientos, tenemos para ofrecer una amplia línea de amasadoras.\nNacionales o importadas, convencional con mando, rápidas, diferentes capacidades.\n\nSi estas por emprender, necesitas renovar los equipos de tu negocio o simplemente sos fan de la cocina, somos el lugar indicado.\nConsultanos por todos los modelos que tenemos  disponibles y elegí la tuya.',
    hornos: 'En Don Valerio Equipamientos, tenemos para ofrecer una amplia línea de hornos. Nacionales o importados, convectores, de piso refractario o rotativos, en distintas capacidades.\n\nSi estas por emprender, necesitas renovar los equipos de tu negocio o simplemente sos fan de la cocina, somos el lugar indicado.\nConsultanos por todos los modelos que tenemos disponibles y elegí el tuyo.',
    camaras: 'En Don Valerio Equipamientos, tenemos para ofrecer una amplia línea de cámaras de fermentación. Nacionales o importadas, de 6, 16 o 32 bandejas, para todo tipo de producción.\n\nSi estas por emprender, necesitas renovar los equipos de tu negocio o simplemente sos fan de la cocina, somos el lugar indicado.\nConsultanos por todos los modelos que tenemos disponibles y elegí la tuya.',
    sobadoras: 'En Don Valerio Equipamientos, tenemos para ofrecer una amplia línea de sobadoras. Nacionales o importadas, de mesa o profesionales, en distintas potencias.\n\nSi estas por emprender, necesitas renovar los equipos de tu negocio o simplemente sos fan de la cocina, somos el lugar indicado.\nConsultanos por todos los modelos que tenemos disponibles y elegí la tuya.',
    trinchadoras: 'En Don Valerio Equipamientos, tenemos para ofrecer una amplia línea de trinchadoras. Nacionales o importadas, compacta o JR, para cortar, armar y trinchar con precisión.\n\nSi estas por emprender, necesitas renovar los equipos de tu negocio o simplemente sos fan de la cocina, somos el lugar indicado.\nConsultanos por todos los modelos que tenemos disponibles y elegí la tuya.',
    rebanadoras: 'En Don Valerio Equipamientos, tenemos para ofrecer nuestra línea de rebanadoras. Nacionales o importadas, de mesa, con cuchillas inoxidables y corte uniforme.\n\nSi estas por emprender, necesitas renovar los equipos de tu negocio o simplemente sos fan de la cocina, somos el lugar indicado.\nConsultanos por todos los modelos que tenemos disponibles y elegí la tuya.',
    laminadoras: 'En Don Valerio Equipamientos, tenemos para ofrecer una amplia línea de laminadoras. Nacionales o importadas, de mesa o de pie, en distintos anchos de rolo.\n\nSi estas por emprender, necesitas renovar los equipos de tu negocio o simplemente sos fan de la cocina, somos el lugar indicado.\nConsultanos por todos los modelos que tenemos disponibles y elegí la tuya.',
    divisoras: 'En Don Valerio Equipamientos, tenemos para ofrecer nuestra línea de divisoras boleadoras. Nacionales o importadas, semi-automáticas, para porcionado uniforme y boleado rápido.\n\nSi estas por emprender, necesitas renovar los equipos de tu negocio o simplemente sos fan de la cocina, somos el lugar indicado.\nConsultanos por todos los modelos que tenemos disponibles y elegí la tuya.',
  };

  const filtered = useMemo(() => {
    let list = cat === 'all' ? PRODUCTS : PRODUCTS.filter(p => p.category === cat);
    if (volt !== 'all') {
      const v = volt === '220' ? '220' : '380';
      list = list.filter(p => p.specs.some(([,val]) => val.includes(v)));
    }
    if (sort === 'name') list = [...list].sort((a,b) => a.name.localeCompare(b.name));
    return list;
  }, [cat, sort, volt]);

  const filterItem = (label, active, onClick, count, key) => (
    <div key={key || label} className={`filter-item ${active ? 'active' : ''}`} onClick={onClick}>
      <span>{label}</span><span className="c">{count}</span>
    </div>
  );

  return (
    <div className="container">
      <Breadcrumb items={[{label:'Inicio', to:'landing'}, {label: 'Catálogo'}]} go={go} />
      <div style={{marginBottom: 8}}>
        <h1 style={{fontSize: 44, marginBottom: 8}}>Catálogo completo</h1>
        <p style={{color: 'var(--ink-2)', fontSize: 15, marginBottom: 0}}>
          {PRODUCTS.length} modelos · Equipamiento gastronómico profesional · Stock en Rosario.
        </p>
      </div>

      {CAT_INTRO[cat] && (
        <div style={{margin: '24px 0', padding: '20px 24px', background: 'var(--accent-soft)', borderLeft: '3px solid var(--accent)', fontSize: 14, color: 'var(--ink-2)', lineHeight: 1.6, whiteSpace: 'pre-line'}}>
          {CAT_INTRO[cat]}
        </div>
      )}

      <div className="catalog-layout">
        <aside className="filters">
          <div className="group">
            <h5>Categorías</h5>
            <div className={`filter-item ${cat === 'all' ? 'active' : ''}`} onClick={() => setCat('all')}>
              <span>Todas</span><span className="c">{PRODUCTS.length}</span>
            </div>
            {CATEGORIES.map(c => (
              <div key={c.id} className={`filter-item ${cat === c.id ? 'active' : ''}`} onClick={() => setCat(c.id)}>
                <span>{c.label}</span>
                <span className="c">{PRODUCTS.filter(p => p.category === c.id).length}</span>
              </div>
            ))}
          </div>
          <div className="group">
            <h5>Alimentación</h5>
            <div className={`filter-item ${volt === 'all' ? 'active' : ''}`} onClick={() => setVolt('all')}>
              <span>Todas</span><span className="c">{PRODUCTS.length}</span>
            </div>
            <div className={`filter-item ${volt === '220' ? 'active' : ''}`} onClick={() => setVolt(volt === '220' ? 'all' : '220')}>
              <span>220V Monofásica</span>
              <span className="c">{PRODUCTS.filter(p => p.specs.some(([,v]) => v.includes('220'))).length}</span>
            </div>
            <div className={`filter-item ${volt === '380' ? 'active' : ''}`} onClick={() => setVolt(volt === '380' ? 'all' : '380')}>
              <span>380V Trifásica</span>
              <span className="c">{PRODUCTS.filter(p => p.specs.some(([,v]) => v.includes('380'))).length}</span>
            </div>
          </div>
        </aside>

        <div>
          <div className="catalog-top">
            <div className="results-count">
              <b>{filtered.length}</b> {filtered.length !== PRODUCTS.length ? 'modelos encontrados' : 'modelos disponibles'}
            </div>
            <div className="sort">
              <span style={{color: 'var(--ink-3)', fontSize: 13}}>Ordenar:</span>
              <select value={sort} onChange={(e) => setSort(e.target.value)}>
                <option value="featured">Destacados</option>
                <option value="name">Nombre A–Z</option>
              </select>
            </div>
          </div>
          {filtered.length === 0 ? (
            <div style={{padding: '64px 0', textAlign: 'center', color: 'var(--ink-3)'}}>
              <p style={{fontSize: 18, marginBottom: 12}}>Sin resultados para esa combinación.</p>
              <button className="btn btn-outline btn-sm" onClick={() => { setCat('all'); setVolt('all'); }}>
                Limpiar filtros
              </button>
            </div>
          ) : (
            <div className="product-grid">
              {filtered.map(p => (
                <ProductCard key={p.sku} p={p} go={go} addToCart={addToCart} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}


export { Catalog };
