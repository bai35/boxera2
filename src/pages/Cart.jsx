import { Link, useNavigate } from 'react-router-dom'
import { useCart } from '../context/CartContext.jsx'

export default function Cart() {
  const { items, removeItem, updateQty, totalPrice } = useCart()
  const navigate = useNavigate()

  if (items.length === 0) {
    return (
      <div className="wrap">
        <div className="empty-state">
          <h2 style={{ fontSize: 24, marginBottom: 10 }}>Tu carrito está vacío</h2>
          <p style={{ marginBottom: 24 }}>Explora el catálogo y encuentra tu próximo equipo.</p>
          <Link to="/catalogo" className="btn btn-primary">
            Ir al catálogo
          </Link>
        </div>
      </div>
    )
  }

  const shipping = totalPrice > 3000 ? 0 : 25
  const grandTotal = totalPrice + shipping

  return (
    <div className="wrap section">
      <h1 style={{ fontSize: 30, marginBottom: 28 }}>Tu carrito</h1>

      <div className="cart-layout">
        <div>
          {items.map((item) => (
            <div className="cart-row" key={item.id}>
              <div className="cart-row-swatch" style={{ background: item.color }} />
              <div>
                <div style={{ fontWeight: 600 }}>{item.name}</div>
                <div style={{ fontSize: 13, color: 'var(--text-muted)' }}>{item.spec}</div>
              </div>
              <div className="qty-control">
                <button onClick={() => updateQty(item.id, item.qty - 1)} aria-label="Reducir cantidad">
                  −
                </button>
                <span>{item.qty}</span>
                <button onClick={() => updateQty(item.id, item.qty + 1)} aria-label="Aumentar cantidad">
                  +
                </button>
              </div>
              <div style={{ textAlign: 'right' }}>
                <div className="price">S/ {item.price * item.qty}</div>
                <button
                  onClick={() => removeItem(item.id)}
                  style={{
                    background: 'none',
                    border: 'none',
                    color: 'var(--danger)',
                    fontSize: 12,
                    marginTop: 6,
                  }}
                >
                  Eliminar
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="summary-card">
          <h3 style={{ fontSize: 18, marginBottom: 18 }}>Resumen del pedido</h3>
          <div className="summary-row">
            <span>Subtotal</span>
            <span>S/ {totalPrice}</span>
          </div>
          <div className="summary-row">
            <span>Envío</span>
            <span>{shipping === 0 ? 'Gratis' : `S/ ${shipping}`}</span>
          </div>
		  <div className="summary-recuadro"> 
		    
			<input type="checkbox" id="terminos" name="terminos" required/>
            <span>Acepto los términos y condiciones para continuar.</span>
			
		  </div>
          <div className="summary-row total">
            <span>Total</span>
            <span>S/ {grandTotal}</span>
          </div>
          <button className="btn btn-primary" style={{ width: '100%', marginTop: 18 }} onClick={() => navigate('/checkout')}>
            Continuar al pago
          </button>
        </div>
      </div>
    </div>
  )
}
