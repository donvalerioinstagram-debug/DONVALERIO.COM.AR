import React, { useState, useEffect, useCallback } from 'react';
import { Topbar, Footer } from './ui.jsx';
import { Landing } from './screens/Landing.jsx';
import { Catalog } from './screens/Catalog.jsx';
import { Product } from './screens/Product.jsx';
import { CartDrawer, CartPage } from './screens/Cart.jsx';
import { parsePath, pathFor, applyMeta } from './router.js';

export default function App() {
  // ---- Routing por URL real ----
  const [route, setRoute] = useState(() => parsePath(window.location.pathname));

  const go = useCallback((screen, props = {}) => {
    const path = pathFor(screen, props);
    if (path !== window.location.pathname) {
      window.history.pushState({ screen, props }, '', path);
    }
    setRoute({ screen, props });
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  // Botón atrás/adelante del navegador
  useEffect(() => {
    const onPop = () => setRoute(parsePath(window.location.pathname));
    window.addEventListener('popstate', onPop);
    return () => window.removeEventListener('popstate', onPop);
  }, []);

  // Título, descripción y canonical según la página
  useEffect(() => {
    applyMeta(route.screen, route.props);
  }, [route]);

  // ---- Presupuesto ----
  const [cart, setCart] = useState(() => {
    try { return JSON.parse(localStorage.getItem('dv_cart')) || []; } catch { return []; }
  });
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [cartBump, setCartBump] = useState(false);

  useEffect(() => { localStorage.setItem('dv_cart', JSON.stringify(cart)); }, [cart]);

  const addToCart = (sku, qty = 1) => {
    setCart(prev => {
      const ex = prev.find(i => i.sku === sku);
      if (ex) return prev.map(i => i.sku === sku ? { ...i, qty: i.qty + qty } : i);
      return [...prev, { sku, qty }];
    });
    setCartBump(true);
    setTimeout(() => setCartBump(false), 500);
    setDrawerOpen(true);
  };
  const updateQty = (sku, qty) => {
    if (qty < 1) return setCart(prev => prev.filter(i => i.sku !== sku));
    setCart(prev => prev.map(i => i.sku === sku ? { ...i, qty } : i));
  };
  const removeItem = (sku) => setCart(prev => prev.filter(i => i.sku !== sku));
  const clearCart = () => setCart([]);

  const { screen, props } = route;
  const cartCount = cart.reduce((s, i) => s + i.qty, 0);
  const showFooter = ['landing', 'catalog', 'notfound'].includes(screen);

  return (
    <div className="app">
      <Topbar
        currentScreen={screen}
        go={go}
        cartCount={cartCount}
        cartBump={cartBump}
        openCart={() => setDrawerOpen(true)}
      />

      <main style={{ flex: 1 }}>
        {screen === 'landing' && <Landing go={go} addToCart={addToCart} />}
        {screen === 'catalog' && <Catalog go={go} addToCart={addToCart} category={props.category} />}
        {screen === 'product' && <Product go={go} addToCart={addToCart} sku={props.sku} />}
        {screen === 'cart' && (
          <CartPage go={go} cart={cart} updateQty={updateQty} removeItem={removeItem} clearCart={clearCart} />
        )}
        {screen === 'notfound' && (
          <section className="section">
            <div className="container" style={{ textAlign: 'center', padding: '80px 0' }}>
              <div className="hero-eyebrow" style={{ justifyContent: 'center' }}>ERROR 404</div>
              <h1 style={{ fontSize: 'clamp(32px,5vw,52px)', marginBottom: 16 }}>
                No encontramos esa página.
              </h1>
              <p className="hero-lede" style={{ margin: '0 auto 32px' }}>
                Puede que el enlace esté desactualizado. Explorá el catálogo completo
                o escribinos y te ayudamos a encontrar el equipo que buscás.
              </p>
              <div className="hero-actions" style={{ justifyContent: 'center' }}>
                <button className="btn btn-primary" onClick={() => go('catalog')}>Ver catálogo</button>
                <button className="btn btn-ghost" onClick={() => go('landing')}>Ir al inicio</button>
              </div>
            </div>
          </section>
        )}
      </main>

      {showFooter && <Footer go={go} />}

      <CartDrawer
        open={drawerOpen}
        close={() => setDrawerOpen(false)}
        cart={cart}
        updateQty={updateQty}
        removeItem={removeItem}
        go={go}
      />
    </div>
  );
}
