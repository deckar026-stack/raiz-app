export default function Home() {
  return (
    <main style={{
      minHeight: '100vh',
      fontFamily: '"Times New Roman", Times, serif',
      background: '#1a0f00',
      color: '#f5edd8',
      position: 'relative',
      overflow: 'hidden',
    }}>

      {/* Fondo con imagen del campo */}
      <div style={{
        position: 'fixed',
        top: 0, left: 0, right: 0, bottom: 0,
        backgroundImage: `url('https://images.unsplash.com/photo-1501854140801-50d01698950b?w=1800&q=80')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        zIndex: 0,
      }} />

      {/* Overlay oscuro */}
      <div style={{
        position: 'fixed',
        top: 0, left: 0, right: 0, bottom: 0,
        background: 'linear-gradient(to bottom, rgba(20,10,0,0.55) 0%, rgba(20,10,0,0.85) 100%)',
        zIndex: 1,
      }} />

      {/* Nav */}
      <nav style={{
        position: 'relative', zIndex: 10,
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        padding: '28px 48px',
        borderBottom: '1px solid rgba(245,237,216,0.15)',
      }}>
        <div style={{
          fontSize: '32px', fontWeight: '700', letterSpacing: '4px',
          textTransform: 'uppercase', color: '#f5edd8',
        }}>
          RAÍ<span style={{ color: '#C8842A' }}>Z</span>
        </div>
        <div style={{ display: 'flex', gap: '32px', alignItems: 'center' }}>
          <a href="/catalogo" style={{ color: 'rgba(245,237,216,0.8)', textDecoration: 'none', fontSize: '15px', letterSpacing: '1px' }}>Productos</a>
          <a href="/suscripciones" style={{ color: 'rgba(245,237,216,0.8)', textDecoration: 'none', fontSize: '15px', letterSpacing: '1px' }}>Suscripciones</a>
          <a href="/login" style={{
            background: '#C8842A', color: 'white',
            padding: '10px 24px', borderRadius: '4px',
            textDecoration: 'none', fontSize: '14px', letterSpacing: '1px',
          }}>Entrar</a>
        </div>
      </nav>

      {/* Hero */}
      <div style={{
        position: 'relative', zIndex: 10,
        minHeight: '85vh',
        display: 'flex', flexDirection: 'column',
        justifyContent: 'center', alignItems: 'flex-start',
        padding: '0 48px',
        maxWidth: '900px',
      }}>
        <div style={{
          fontSize: '11px', letterSpacing: '4px', textTransform: 'uppercase',
          color: '#C8842A', marginBottom: '24px', fontFamily: 'Georgia, serif',
        }}>
          🌿 Agroindustria colombiana directa
        </div>

        <h1 style={{
          fontSize: 'clamp(52px, 8vw, 96px)',
          fontWeight: '700',
          lineHeight: '1.05',
          letterSpacing: '-1px',
          margin: '0 0 28px 0',
          color: '#f5edd8',
        }}>
          Del campo<br />
          <em style={{ color: '#C8842A', fontStyle: 'italic' }}>colombiano,</em><br />
          directo a ti.
        </h1>

        <p style={{
          fontSize: '20px', lineHeight: '1.7',
          color: 'rgba(245,237,216,0.75)',
          maxWidth: '520px', marginBottom: '40px',
          fontWeight: '400',
        }}>
          Conectamos familias productoras del Huila, Boyacá y Nariño con consumidores urbanos. Sin intermediarios. Con trazabilidad completa.
        </p>

        <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
          <a href="/catalogo" style={{
            background: '#C8842A', color: 'white',
            padding: '18px 40px', borderRadius: '4px',
            textDecoration: 'none', fontSize: '16px',
            fontFamily: '"Times New Roman", serif',
            letterSpacing: '1px',
            transition: 'all 0.2s',
          }}>
            Ver productos →
          </a>
          <a href="/login" style={{
            background: 'transparent', color: '#f5edd8',
            padding: '18px 40px', borderRadius: '4px',
            textDecoration: 'none', fontSize: '16px',
            border: '1px solid rgba(245,237,216,0.4)',
            fontFamily: '"Times New Roman", serif',
            letterSpacing: '1px',
          }}>
            Soy productor
          </a>
        </div>
      </div>

      {/* Franja de productos */}
      <div style={{
        position: 'relative', zIndex: 10,
        background: 'rgba(20,10,0,0.9)',
        borderTop: '1px solid rgba(200,132,42,0.3)',
        padding: '40px 48px',
        display: 'flex', gap: '48px',
        flexWrap: 'wrap',
      }}>
        {[
          { emoji: '☕', nombre: 'Café Especial', origen: 'Huila · Nariño · Antioquia' },
          { emoji: '🟫', nombre: 'Panela Orgánica', origen: 'Boyacá · Santander' },
          { emoji: '🍯', nombre: 'Miel de Abeja', origen: 'Boyacá · Cundinamarca' },
          { emoji: '🍫', nombre: 'Cacao Fino', origen: 'Tumaco · Arauca' },
        ].map((p, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <span style={{ fontSize: '32px' }}>{p.emoji}</span>
            <div>
              <div style={{ fontSize: '16px', fontWeight: '700', color: '#f5edd8', letterSpacing: '0.5px' }}>
                {p.nombre}
              </div>
              <div style={{ fontSize: '12px', color: '#C8842A', letterSpacing: '1px', marginTop: '2px' }}>
                📍 {p.origen}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Sección valores */}
      <div style={{
        position: 'relative', zIndex: 10,
        background: '#f5edd8',
        padding: '80px 48px',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
        gap: '48px',
      }}>
        {[
          { titulo: 'Sin intermediarios', desc: 'El precio justo llega completo al productor. Tú pagas menos, ellos ganan más.', icono: '🤝' },
          { titulo: 'Trazabilidad total', desc: 'Escanea el QR de tu empaque y conoce la finca, la familia y el proceso.', icono: '📱' },
          { titulo: 'Envío a Colombia', desc: 'Servientrega recoge directo en la finca y lo lleva a tu puerta en días.', icono: '🚚' },
        ].map((v, i) => (
          <div key={i}>
            <div style={{ fontSize: '40px', marginBottom: '16px' }}>{v.icono}</div>
            <h3 style={{
              fontSize: '24px', fontWeight: '700', color: '#2C1A0E',
              marginBottom: '12px', letterSpacing: '-0.5px',
            }}>
              {v.titulo}
            </h3>
            <p style={{ fontSize: '16px', color: '#5C3D1E', lineHeight: '1.7' }}>
              {v.desc}
            </p>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div style={{
        position: 'relative', zIndex: 10,
        background: '#0f0800',
        padding: '32px 48px',
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        borderTop: '1px solid rgba(200,132,42,0.2)',
        flexWrap: 'wrap', gap: '16px',
      }}>
        <div style={{ fontSize: '22px', fontWeight: '700', letterSpacing: '3px', color: '#f5edd8' }}>
          RAÍ<span style={{ color: '#C8842A' }}>Z</span>
        </div>
        <p style={{ fontSize: '13px', color: 'rgba(245,237,216,0.4)', letterSpacing: '1px' }}>
          Del campo colombiano, directo a ti · © 2026
        </p>
      </div>

    </main>
  )
}