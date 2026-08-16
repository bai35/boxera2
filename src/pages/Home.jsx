import Hero from '../components/Hero.jsx'
import ProductCard from '../components/ProductCard.jsx'
import { products } from '../data/products.js'
import { Link } from 'react-router-dom'

const featured = products.filter((p) => p.tag === 'Nuevo').slice(0, 4)

export default function Home() {
  return (
    <>
      <Hero />

      <section className="section">
        <div className="wrap">
          <div className="section-head">
            <div>
              <span className="eyebrow">Recién llegados</span>
              <h2 style={{ fontSize: 28, marginTop: 8 }}>Lo más nuevo</h2>
            </div>
            <Link to="/catalogo" className="btn btn-ghost">
              Ver todo
            </Link>
          </div>

          <div className="grid">
            {featured.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="beneficios">
        <div className="wrap">
          <div className="section-head">
            <div>
              <span className="eyebrow">Cómo compramos</span>
              <h2 style={{ fontSize: 28, marginTop: 8 }}>Beneficios BOXERA</h2>
            </div>
          </div>

          <div className="benefits">
            <div className="benefit">
              <span className="eyebrow">01</span>
              <h4>Garantía oficial</h4>
              <p>12 meses de garantía en todos los equipos, con soporte directo del importador.</p>
            </div>
            <div className="benefit">
              <span className="eyebrow">02</span>
              <h4>Envío en 24h</h4>
              <p>Entrega el mismo día en Lima Metropolitana y hasta 48h a provincias.</p>
            </div>
            <div className="benefit">
              <span className="eyebrow">03</span>
              <h4>Pago flexible</h4>
              <p>Tarjeta, transferencia o cuotas sin intereses con los bancos asociados.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
