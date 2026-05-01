import Link from 'next/link'

export default function Home() {
  return (
    <main style={{
      minHeight: '100vh',
      fontFamily: '"Times New Roman", serif',
      background: '#1a0f00',
      color: '#f5edd8',
      position: 'relative',
      overflow: 'hidden',
    }}>

      {/* Imagen de fondo */}
      <div style={{
        position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
        backgroundImage: `url('/campo.jpg')`,
        backgroundSize: 'cover', backgroundPosition: 'center', zIndex: 0,
      }} />

      {/* Overlay */}
      <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.5)', zIndex: 1 }} />

      {/* Contenido */}
      <div style={{ position: 'relative', zIndex: 2 }}>

        {/* Hero */}
        <div style={{ padding: '120px 48px 80px' }}>
          <p style={{ fontSize: '11px', letterSpacing: '4px', textTransform: 'uppercase', color: '#C8842A', marginBottom: '24px' }}>
            🌿 Agroindustria colombiana directa
          </p>
          <h1 style={{ fontSize: 'clamp(52px, 8vw, 96px)', lineHeight: 1.05, maxWidth: '700px', margin: '0 0 24px 0', fontWeight: '700' }}>
            Del campo <br />
            <em style={{ color: '#C8842A' }}>colombiano,</em><br />
            directo a ti.
          </h1>
          <p style={{ maxWidth: '500px', opacity: 0.75, fontSize: '18px', lineHeight: '1.7', marginBottom: '40px' }}>
            Conectamos familias productoras del Huila, Boyacá y Nariño con consumidores urbanos. Sin intermediarios. Con trazabilidad completa.
          </p>
          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            <Link href="/catalogo" style={{
              background: '#C8842A', color: 'white',
              padding: '18px 40px', borderRadius: '4px',
              textDecoration: 'none', fontSize: '16px', letterSpacing: '1px',
            }}>
              Ver productos →
            </Link>
            <Link href="/login?tipo=productor" style={{
              border: '1px solid rgba(245,237,216,0.4)', color: '#f5edd8',
              padding: '18px 40px', borderRadius: '4px',
              textDecoration: 'none', fontSize: '16px', letterSpacing: '1px',
            }}>
              Soy productor
            </Link>
          </div>
        </div>

        {/* Franja productos */}
        <div style={{
          background: 'rgba(10,5,0,0.85)',
          borderTop: '1px solid rgba(200,132,42,0.3)',
          padding: '40px 48px',
          display: 'flex', gap: '48px', flexWrap: 'wrap',
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
                <div style={{ fontSize: '16px', fontWeight: '700', color: '#f5edd8' }}>{p.nombre}</div>
                <div style={{ fontSize: '12px', color: '#C8842A', letterSpacing: '1px', marginTop: '2px' }}>📍 {p.origen}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Valores */}
        <div style={{
          background: '#f5edd8', padding: '80px 48px',
          display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '48px',
        }}>
          {[
            { titulo: 'Sin intermediarios', desc: 'El precio justo llega completo al productor. Tú pagas menos, ellos ganan más.', icono: '🤝' },
            { titulo: 'Trazabilidad total', desc: 'Escanea el QR de tu empaque y conoce la finca, la familia y el proceso.', icono: '📱' },
            { titulo: 'Envío a Colombia', desc: 'Servientrega recoge directo en la finca y lo lleva a tu puerta en días.', icono: '🚚' },
          ].map((v, i) => (
            <div key={i}>
              <div style={{ fontSize: '40px', marginBottom: '16px' }}>{v.icono}</div>
              <h3 style={{ fontSize: '24px', fontWeight: '700', color: '#2C1A0E', marginBottom: '12px' }}>{v.titulo}</h3>
              <p style={{ fontSize: '16px', color: '#5C3D1E', lineHeight: '1.7' }}>{v.desc}</p>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div style={{
          background: '#0f0800', padding: '32px 48px',
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          borderTop: '1px solid rgba(200,132,42,0.2)', flexWrap: 'wrap', gap: '16px',
        }}>
          <div style={{ fontSize: '22px', fontWeight: '700', letterSpacing: '3px', color: '#f5edd8' }}>
            RAÍ<span style={{ color: '#C8842A' }}>Z</span>
          </div>
          <div style={{ display: 'flex', gap: '24px' }}>
            <Link href="/nosotros" style={{ color: 'rgba(245,237,216,0.5)', textDecoration: 'none', fontSize: '13px' }}>Nosotros</Link>
            <Link href="/contacto" style={{ color: 'rgba(245,237,216,0.5)', textDecoration: 'none', fontSize: '13px' }}>Contacto</Link>
            <Link href="/login" style={{ color: 'rgba(245,237,216,0.5)', textDecoration: 'none', fontSize: '13px' }}>Productores</Link>
          </div>
          <p style={{ fontSize: '13px', color: 'rgba(245,237,216,0.4)' }}>© 2026 Raíz SAS · Colombia</p>
        </div>

      </div>
    </main>
  )
}