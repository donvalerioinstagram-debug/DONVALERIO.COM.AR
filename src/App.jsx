import React, { useState, useEffect } from 'react';
import { Topbar, Footer } from './ui.jsx';
import { Landing } from './screens/Landing.jsx';
import { Catalog } from './screens/Catalog.jsx';
import { Product } from './screens/Product.jsx';
import { CartDrawer, CartPage } from './screens/Cart.jsx';

export default function App() {
  // ---- Navigation ----
  const [screen, setScreen] = useState(() => localStorage.getItem('dv_screen') || 'landing');
  const [screenProps, setScreenProps] = useState(() => {
    try { return JSON.parse(localStorage.getItem('dv_screenProps') || '{}'); } catch { return {}; }
  });
  const go = (s, p = {}) => {
    setScreen(s); setScreenProps(p);
    localStorage.setItem('dv_screen', s);
    localStorage.setItem('dv_screenProps', JSON.stringify(p));
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  // ---- Cart (armador de presupuesto) ----
  const [cart, setCart] = useState(() => {
    try { return JSON.parse(localStorage.getItem('dv_cart')) || []; } catch { return []; }
  });
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [cartBump, setCartBump] = useState(false);

  useEffect(() => { localStorage.setItem('dv_cart', JSON.stringify(cart)); }, [cart]);

  const addToCart = (sku, qty = 1) => {
    setCart(prev => {
      const existing = prev.find(i => i.sku === sku);
      if (existing) return prev.map(i => i.sku === sku ? { ...i, qty: i.qty + qty } : i);
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

  // ---- Render ----
  const cartCount = cart.reduce((s,i) => s + i.qty, 0);
  const showFooter = ['landing', 'catalog'].includes(screen);

  return (
    <div className="app">
      <Topbar
        currentScreen={screen}
        go={go}
        cartCount={cartCount}
        cartBump={cartBump}
        openCart={() => setDrawerOpen(true)}
      />

      <main style={{flex: 1}}>
        {screen === 'landing' && <Landing go={go} addToCart={addToCart} />}
        {screen === 'catalog' && <Catalog go={go} addToCart={addToCart} category={screenProps.category} />}
        {screen === 'product' && <Product go={go} addToCart={addToCart} sku={screenProps.sku} />}
        {screen === 'cart' && (
          <CartPage go={go} cart={cart} updateQty={updateQty} removeItem={removeItem} clearCart={clearCart} />
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
