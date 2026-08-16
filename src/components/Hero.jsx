import { useRef } from 'react'
import { Link } from 'react-router-dom'

export default function Hero() {
  const cardRef = useRef(null)

  function handleMove(e) {
    const card = cardRef.current
    if (!card) return
    const rect = card.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width
    const y = (e.clientY - rect.top) / rect.height
    const rotateX = (0.5 - y) * 14
    const rotateY = (x - 0.5) * 14
    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
    card.style.setProperty('--mx', `${x * 100}%`)
    card.style.setProperty('--my', `${y * 100}%`)
  }

  function handleLeave() {
    const card = cardRef.current
    if (!card) return
    card.style.transform = 'rotateX(0deg) rotateY(0deg)'
  }

  return (
    <section className="hero">
      <div className="wrap hero-inner">
        <div>
          <span className="eyebrow">Envíos a todo el Perú · Garantía oficial</span>
          <h1 className="hero-title">
            El equipo que <em>sí</em> vas a usar todos los días.
          </h1>
          <p className="hero-desc">
            iPhone, Samsung, iPad, Watch y MacBook seleccionados por calidad y
            respaldo. Compra con garantía, paga como prefieras y recíbelo en
            24 horas en Lima.
          </p>
          <div className="hero-cta">
            <Link to="/catalogo" className="btn btn-primary">
              Ver catálogo
            </Link>
            <a href="#beneficios" className="btn btn-ghost">
              Cómo compramos
            </a>
          </div>
          <div className="hero-specrow">
            <span><b>+1200</b> equipos entregados</span>
            <span><b>12 meses</b> de garantía</span>
            <span><b>24h</b> envío en Lima</span>
          </div>
        </div>

        <div
          
          className="device-card"
          /*onMouseMove={handleMove}
          onMouseLeave={handleLeave}*/
		  
        >
          <img src="https://images.samsung.com/is/image/samsung/p6pim/pe/2501/gallery/pe-galaxy-s25-s938-sm-s938bzklltp-thumb-544714481" alt="celular1"
		  />
        </div>
      </div>
    </section>
  )
}
