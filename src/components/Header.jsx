import { Link, NavLink } from 'react-router-dom'
import { useCart } from '../context/CartContext.jsx'

export default function Header() {
  const { totalItems } = useCart()

  return (
    <header className="header">
      <div className="wrap header-inner">
        <Link to="/" className="logo">
          BOXER<span>A</span>
        </Link>

        <nav className="nav">
          <NavLink to="/" end className={({ isActive }) => (isActive ? 'active' : '')}>
            Inicio
          </NavLink>
          <NavLink to="/catalogo" className={({ isActive }) => (isActive ? 'active' : '')}>
            Catálogo
          </NavLink>
          <a href="#beneficios">Beneficios</a>
          <a href="#contacto">Contacto</a>
        </nav>

        <Link to="/carrito" className="cart-btn">
          Carrito
          {totalItems > 0 && <span className="cart-badge">{totalItems}</span>}
        </Link>
      </div>
    </header>
  )
}
