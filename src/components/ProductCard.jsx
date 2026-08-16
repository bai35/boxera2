import { useCart } from '../context/CartContext.jsx'

export default function ProductCard({ product }) {
  const { addItem } = useCart()

  return (
    <div className="card">
      <div className="card-swatch" style={{ background: product.color }}>
        {product.tag && <span className="card-tag">{product.tag}</span>}
        {product.image ? (
          <img src={product.image} alt={product.name} className="card-photo" />
        ) : (
          <div className="glyph" />
        )}
      </div>

      <div className="card-body">
        <span className="card-eyebrow">{product.brand}</span>
        <h3 className="card-name">{product.name}</h3>
        <p className="card-spec">{product.spec}</p>
      </div>

      <div className="card-footer">
        <div>
          {product.oldPrice && <span className="price-old">S/ {product.oldPrice}</span>}
          <span className="price">S/ {product.price}</span>
        </div>
        <button
          className="icon-btn"
          aria-label={`Agregar ${product.name} al carrito`}
          onClick={() => addItem(product)}
        >
          +
        </button>
      </div>
    </div>
  )
}