export default function Nosotros() {
    return (
      <main style={{
        minHeight: '100vh',
        background: '#FDFAF4',
        fontFamily: '"Times New Roman", Times, serif',
      }}>
  
        {/* Header */}
        <div style={{
          background: '#2C1A0E',
          padding: '20px 48px',
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        }}>
          <a href="/" style={{ fontSize: '28px', fontWeight: '700', color: 'white', textDecoration: 'none', letterSpacing: '3px' }}>
            RAÍ<span style={{ color: '#C8842A' }}>Z</span>
          </a>
          <div style={{ display: 'flex', gap: '24px' }}>
            <a href="/catalogo" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none', fontSize: '14px' }}>Productos</a>
            <a href="/contacto" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none', fontSize: '14px' }}>Contacto</a>
            <a href="/login" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none', fontSize: '14px' }}>Entrar</a>
          </div>
        </div>
  
        {/* Hero */}
        <div style={{
          background: '#2C1A0E',
          padding: '80px 48px',
          color: 'white',
        }}>
          <p style={{ fontSize: '11px', letterSpacing: '4px', textTransform: 'uppercase', color: '#C8842A', marginBottom: '16px' }}>
            Nuestra historia
          </p>
          <h1 style={{ fontSize: 'clamp(40px, 6vw, 72px)', fontWeight: '700', margin: '0 0 24px 0', lineHeight: '1.1' }}>
            Nacimos del campo<br />
            <em style={{ color: '#C8842A' }}>colombiano.</em>
          </h1>
          <p style={{ fontSize: '20px', color: 'rgba(255,255,255,0.7)', maxWidth: '600px', lineHeight: '1.7' }}>
            Raíz nació para cerrar la brecha entre el productor rural y el consumidor urbano. Sin intermediarios, con dignidad para el campo.
          </p>
        </div>
  
        {/* Contenido */}
        <div style={{ maxWidth: '800px', margin: '0 auto', padding: '80px 48px' }}>
  
          <div style={{ marginBottom: '60px' }}>
            <h2 style={{ fontSize: '32px', fontWeight: '700', color: '#2C1A0E', marginBottom: '20px' }}>
              El problema que resolvemos
            </h2>
            <p style={{ fontSize: '18px', color: '#5C3D1E', lineHeight: '1.8' }}>
              Un caficultor en Pitalito recibe $8.000 por cada 250 gramos de café especial que produce. Ese mismo café llega al consumidor en Bogotá a $35.000. La diferencia se la quedan 3 o 4 intermediarios que no cultivaron nada.
            </p>
            <p style={{ fontSize: '18px', color: '#5C3D1E', lineHeight: '1.8', marginTop: '16px' }}>
              Raíz elimina esa cadena. El productor vende directo, gana 3 veces más. El consumidor paga menos que en tienda gourmet y sabe exactamente de dónde viene su producto.
            </p>
          </div>
  
          <div style={{ marginBottom: '60px' }}>
            <h2 style={{ fontSize: '32px', fontWeight: '700', color: '#2C1A0E', marginBottom: '20px' }}>
              Nuestra misión
            </h2>
            <p style={{ fontSize: '18px', color: '#5C3D1E', lineHeight: '1.8' }}>
              Digitalizar la agroindustria colombiana para que cada familia productora tenga acceso directo al mercado urbano y global, con herramientas simples y sin barreras tecnológicas.
            </p>
          </div>
  
          {/* Stats */}
          <div style={{
            display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '24px', marginBottom: '60px',
          }}>
            {[
              { num: '500K+', label: 'Productores en Colombia con potencial' },
              { num: '0', label: 'Intermediarios en nuestra cadena' },
              { num: '3x', label: 'Más ingreso para el productor' },
            ].map((s, i) => (
              <div key={i} style={{
                background: '#f5edd8', borderRadius: '16px', padding: '32px 24px', textAlign: 'center',
              }}>
                <div style={{ fontSize: '42px', fontWeight: '700', color: '#C8842A' }}>{s.num}</div>
                <div style={{ fontSize: '14px', color: '#5C3D1E', marginTop: '8px', lineHeight: '1.5' }}>{s.label}</div>
              </div>
            ))}
          </div>
  
          <div>
            <h2 style={{ fontSize: '32px', fontWeight: '700', color: '#2C1A0E', marginBottom: '20px' }}>
              Fase 1 — Los productos del campo
            </h2>
            <p style={{ fontSize: '18px', color: '#5C3D1E', lineHeight: '1.8' }}>
              Empezamos con los 4 productos con mayor potencial de valor agregado en Colombia: café especial, panela orgánica, miel de abeja y cacao fino de aroma. Todos con trazabilidad completa y entrega nacional.
            </p>
          </div>
  
        </div>
  
        {/* Footer */}
        <div style={{
          background: '#0f0800', padding: '32px 48px',
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          flexWrap: 'wrap', gap: '16px',
        }}>
          <div style={{ fontSize: '22px', fontWeight: '700', letterSpacing: '3px', color: '#f5edd8' }}>
            RAÍ<span style={{ color: '#C8842A' }}>Z</span>
          </div>
          <p style={{ fontSize: '13px', color: 'rgba(245,237,216,0.4)' }}>© 2026 Raíz SAS · Colombia</p>
        </div>
  
      </main>
    )
  }