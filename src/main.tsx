```tsx
import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

const products = [
  {
    name: 'Custom Denim Adidas Superstar',
    price: '€146,99',
    image: '/images/custom denim adidas superstar foto 1.jpg',
  },
  {
    name: 'Custom Camo Adidas Superstar',
    price: '€171,99',
    image: '/images/Custom Camo Adidas Superstar.jpg',
  },
  {
    name: 'Custom Yellow Adidas Superstar',
    price: '€146,99',
    image: '/images/custom yellow adidas superstar limited edition foto 1.jpg',
  },
  {
    name: 'Custom Denim Yellow Adidas Superstar',
    price: '€171,99',
    image: '/images/custom denim yellow adidas superstar foto 1.jpg',
  },
  {
    name: 'Custom Denim Black Red Adidas Superstar',
    price: '€171,99',
    image: '/images/custom denim black red adidas superstar limited edition foto 1.jpg',
  },
];

const laces = [
  {
    name: 'Fluffy White',
    image: '/images/fluffy veters wit.jpg',
  },
  {
    name: 'Fluffy Pink',
    image: '/images/fluffy veters roze.jpg',
  },
  {
    name: 'Fluffy Black',
    image: '/images/fluffy veters zwart.jpg',
  },
  {
    name: 'White',
    image: '/images/veters wit.jpg',
  },
  {
    name: 'Black',
    image: '/images/veters zwart.jpg',
  },
  {
    name: 'Yellow',
    image: '/images/veters yellow.jpg',
  },
  {
    name: 'Light Pink',
    image: '/images/veters licht roze.jpg',
  },
  {
    name: 'Army Green',
    image: '/images/veters leger groen.jpg',
  },
];

function App() {
  const [page, setPage] = useState<'home' | 'shop' | 'laces'>('home');

  return (
    <div className="site">
      <header className="header">
        <div className="header-inner">
          <button className="logo" onClick={() => setPage('home')}>
            <span>010.6643</span>
            <strong>TRIPLE TREADZ</strong>
          </button>

          <nav>
            <button onClick={() => setPage('home')}>Home</button>
            <button onClick={() => setPage('shop')}>Shoes</button>
            <button onClick={() => setPage('laces')}>Laces</button>
          </nav>
        </div>
      </header>

      {page === 'home' && (
        <>
          <section className="hero">
            <div className="hero-image">
              <img
                src="/images/Custom Camo Adidas Superstar.jpg"
                alt="Custom Camo Adidas Superstar"
              />
            </div>

            <div className="hero-content">
              <span className="eyebrow">TRIPLE TREADZ — ATELIER</span>
              <h1>Custom sneakers.<br />Made different.</h1>
              <p>
                Hand-customized Adidas Superstars and unique laces,
                made with attention to every detail.
              </p>

              <div className="buttons">
                <button className="button white" onClick={() => setPage('shop')}>
                  SHOP SHOES
                </button>
                <button className="button outline" onClick={() => setPage('laces')}>
                  SHOP LACES
                </button>
              </div>
            </div>
          </section>

          <section className="section">
            <div className="section-title">
              <span className="eyebrow">FEATURED</span>
              <h2>Our sneakers</h2>
            </div>

            <div className="product-grid">
              {products.map((product) => (
                <div className="product-card" key={product.name}>
                  <div className="product-image">
                    <img src={product.image} alt={product.name} />
                  </div>
                  <h3>{product.name}</h3>
                  <p>{product.price}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="section dark-section">
            <div className="section-title">
              <span className="eyebrow">LACES</span>
              <h2>Complete your pair</h2>
            </div>

            <div className="lace-grid">
              {laces.map((lace) => (
                <div className="lace-card" key={lace.name}>
                  <img src={lace.image} alt={lace.name} />
                  <h3>{lace.name}</h3>
                  <p>€10,00</p>
                </div>
              ))}
            </div>
          </section>
        </>
      )}

      {page === 'shop' && (
        <section className="section page">
          <span className="eyebrow">SHOP</span>
          <h1>Custom Sneakers</h1>

          <div className="product-grid">
            {products.map((product) => (
              <div className="product-card" key={product.name}>
                <div className="product-image">
                  <img src={product.image} alt={product.name} />
                </div>
                <h3>{product.name}</h3>
                <p>{product.price}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {page === 'laces' && (
        <section className="section page">
          <span className="eyebrow">SHOP</span>
          <h1>Laces</h1>

          <div className="lace-grid">
            {laces.map((lace) => (
              <div className="lace-card" key={lace.name}>
                <img src={lace.image} alt={lace.name} />
                <h3>{lace.name}</h3>
                <p>€10,00</p>
              </div>
            ))}
          </div>
        </section>
      )}

      <footer>
        <strong>010.6643 — TRIPLE TREADZ</strong>
        <p>Handmade in NL · © 2026 TripleThreadz</p>
      </footer>
    </div>
  );
}

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```
