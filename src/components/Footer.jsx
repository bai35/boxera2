export default function Footer() {
  return (
    <footer className="footer" id="contacto">
      <div className="wrap footer-inner">
        <div>
          <h1 className="logo" style={{ marginBottom: 14 }}>
            BOXER<span>A</span>
          </h1>
          <p style={{ color: 'var(--text-muted)', fontSize: 14, maxWidth: 260 }}>
            Tienda especializada en tecnología premium. Compra segura,
            garantía oficial y soporte post-venta en todo el Perú.
          </p>
        </div>

        <div>
          <h5>Catálogo</h5>
          <ul>
            <li>iPhone</li>
            <li>Samsung</li>
            <li>iPad</li>
            <li>MacBook</li>
          </ul>
        </div>

        <div>
          <h5>Ayuda</h5>
          <ul>
            <li>Garantía</li>
            <li>Envíos</li>
            <li>Medios de pago</li>
            <li>Preguntas frecuentes</li>
          </ul>
        </div>

        <div>
          <h5>Contacto</h5>
          <ul>
            <li>WhatsApp: +51 900 000 000</li>
            <li>hola@nexo.pe</li>
            <li>Lima, Perú</li>
          </ul>
        </div>
      </div>

      <div className="wrap footer-bottom">
        <span>© {new Date().getFullYear()} BOXERA. Proyecto de demostración.</span>
        <span>Hecho con React</span>
      </div>
    </footer>
  )
}
