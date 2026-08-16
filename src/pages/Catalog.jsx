import { useState, useMemo } from 'react'
import ProductCard from '../components/ProductCard.jsx'
import { products, brands } from '../data/products.js'

export default function Catalog() {
  const [activeBrand, setActiveBrand] = useState('Todos')

  const filtered = useMemo(() => {
    if (activeBrand === 'Todos') return products
    return products.filter((p) => p.brand === activeBrand)
  }, [activeBrand])

  return (
    <div className="wrap">
      <section style={{ paddingTop: 48 }}>
        <span className="eyebrow">Catálogo completo</span>
        <h1 style={{ fontSize: 34, margin: '10px 0 0' }}>Encuentra tu próximo equipo</h1>
      </section>

      <div className="brand-strip">
        {brands.map((b) => (
          <button
            key={b}
            className={`chip ${activeBrand === b ? 'active' : ''}`}
            onClick={() => setActiveBrand(b)}
          >
            {b}
          </button>
        ))}
      </div>

      <section className="section">
        {filtered.length === 0 ? (
          <p style={{ color: 'var(--text-muted)' }}>No hay productos en esta categoría.</p>
        ) : (
          <div className="grid">
            {filtered.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        )}
      </section>
    </div>
  )
}
