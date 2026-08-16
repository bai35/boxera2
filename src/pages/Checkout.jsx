import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useCart } from '../context/CartContext.jsx'

export default function Checkout() {
  const { items, totalPrice, clearCart } = useCart()
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({
    nombre: '',
    email: '',
    telefono: '',
    direccion: '',
    ciudad: '',
    pago: 'tarjeta',
  })
  const navigate = useNavigate()

  const shipping = totalPrice > 3000 ? 0 : 25
  const grandTotal = totalPrice + shipping

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  function handleSubmit(e) {
    e.preventDefault()
    setSubmitted(true)
    clearCart()
  }

  if (items.length === 0 && !submitted) {
    return (
      <div className="wrap">
        <div className="empty-state">
          <h2 style={{ fontSize: 24, marginBottom: 10 }}>No hay nada que pagar todavía</h2>
          <Link to="/catalogo" className="btn btn-primary">
            Ir al catálogo
          </Link>
        </div>
      </div>
    )
  }

  if (submitted) {
    return (
      <div className="wrap">
        <div className="confirmation">
          <div className="glyph-big">✓</div>
          <h2 style={{ fontSize: 26, marginBottom: 10 }}>¡Pedido confirmado!</h2>
          <p style={{ color: 'var(--text-muted)', marginBottom: 28 }}>
            Hemos enviado los detalles a <strong>{form.email || 'tu correo'}</strong>. Te
            contactaremos por WhatsApp para coordinar la entrega.
          </p>
          <Link to="/" className="btn btn-primary">
            Volver al inicio
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="wrap section">
      <h1 style={{ fontSize: 30, marginBottom: 28 }}>Finalizar compra</h1>

      <form className="checkout-layout" onSubmit={handleSubmit}>
        <div>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="nombre">Nombre completo</label>
              <input id="nombre" name="nombre" required value={form.nombre} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label htmlFor="telefono">Teléfono</label>
              <input id="telefono" name="telefono" required value={form.telefono} onChange={handleChange} />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="email">Correo electrónico</label>
            <input id="email" name="email" type="email" required value={form.email} onChange={handleChange} />
          </div>

          <div className="form-group">
            <label htmlFor="direccion">Dirección de entrega</label>
            <input id="direccion" name="direccion" required value={form.direccion} onChange={handleChange} />
          </div>

          <div className="form-group">
            <label htmlFor="ciudad">Ciudad</label>
            <input id="ciudad" name="ciudad" required value={form.ciudad} onChange={handleChange} />
          </div>

          <div className="form-group">
            <label htmlFor="pago">Método de pago</label>
            <select id="pago" name="pago" value={form.pago} onChange={handleChange}>
              <option value="tarjeta">Tarjeta de crédito/débito</option>
              <option value="transferencia">Transferencia bancaria</option>
              <option value="yape">Yape / Plin</option>
            </select>
          </div>
		  
		  <div className="summary-recuadro"> 
		    
			<input type="checkbox" id="terminos" name="terminos" required/>
            <span>Acepto los términos y condiciones para continuar.</span>
			
		  </div>

          <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: 8 }}>
            Confirmar pedido — S/ {grandTotal}
          </button>
        </div>

        <div className="summary-card">
          <h3 style={{ fontSize: 18, marginBottom: 18 }}>Tu pedido</h3>
          {items.map((item) => (
            <div className="summary-row" key={item.id}>
              <span>{item.name} × {item.qty}</span>
              <span>S/ {item.price * item.qty}</span>
            </div>
          ))}
          <div className="summary-row">
            <span>Envío</span>
            <span>{shipping === 0 ? 'Gratis' : `S/ ${shipping}`}</span>
          </div>
          <div className="summary-row total">
            <span>Total</span>
            <span>S/ {grandTotal}</span>
          </div>
        </div>
      </form>
    </div>
  )
}
