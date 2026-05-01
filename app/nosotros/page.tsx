'use client'
import Link from 'next/link'

export default function Nosotros() {
  return (
    <main style={{
      minHeight: '100vh',
      fontFamily: '"Times New Roman", serif',
      background: '#1a0f00',
      color: '#f5edd8',
      position: 'relative',
      overflow: 'hidden',
    }}>
      <div style={{ position: 'fixed', inset: 0, backgroundImage: `url('/campo.jpg')`, backgroundSize: 'cover', backgroundPosition: 'center', zIndex: 0 }} />
      <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.65)', zIndex: 1 }} />

      <div style={{ position: 'relative', zIndex: 2, paddingTop: '20px' }}>
        <div style={{ padding: '60px 48px', maxWidth: '800px' }}>
          <p style={{ fontSize: '11px', letterSpacing: '4px', textTransform: 'uppercase', color: '#C8842A', marginBottom: '20px' }}>
            Nuestra historia
          </p>
          <h1 style={{ fontSize: 'clamp(48px, 7vw, 80px)', fontWeight: '700', lineHeight: 1.1, marginBottom: '40px' }}>
            Nacimos del <em style={{ color: '#C8842A' }}>campo colombiano.</em>
          </h1>
          <p style={{ fontSize: '18px', lineHeight: '1.8', opacity: 0.9, marginBottom: '24px' }}>
            RAÍZ nace con una idea simple pero poderosa: volver a conectar el campo colombiano con las ciudades.
          </p>
          <p style={{ fontSize: '18px', lineHeight: '1.8', opacity: 0.9, marginBottom: '24px' }}>
            Soy <strong>Diego Cárdenas</strong>, fundador de esta plataforma. Este proyecto surge al ver cómo muchos productores trabajan con esfuerzo durante años pero reciben muy poco, porque entre ellos y el consumidor final hay tres, cuatro o cinco intermediarios que se quedan con la mayor parte del valor.
          </p>
          <p style={{ fontSize: '18px', lineHeight: '1.8', opacity: 0.9, marginBottom: '60px' }}>
            RAÍZ busca cambiar eso: crear un puente directo entre quienes cultivan los productos y quienes los consumen, generando comercio justo, productos más frescos y una conexión más humana con lo que comemos cada día.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px', marginBottom: '60px' }}>
            {[
              { num: '500K+', label: 'Productores en Colombia con potencial' },
              { num: '0', label: 'Intermediarios en nuestra cadena' },
              { num: '3x', label: 'Más ingreso para el productor' },
            ].map((s, i) => (
              <div key={i} style={{ background: 'rgba(245,237,216,0.08)', border: '1px solid rgba(200,132,42,0.3)', borderRadius: '16px', padding: '28px 20px', textAlign: 'center' }}>
                <div style={{ fontSize: '40px', fontWeight: '700', color: '#C8842A' }}>{s.num}</div>
                <div style={{ fontSize: '13px', opacity: 0.7, marginTop: '8px', lineHeight: '1.5' }}>{s.label}</div>
              </div>
            ))}
          </div>

          <div style={{ marginBottom: '48px' }}>
            <h2 style={{ fontSize: '36px', fontWeight: '700', color: '#C8842A', marginBottom: '16px' }}>Misión</h2>
            <p style={{ fontSize: '18px', lineHeight: '1.8', opacity: 0.9 }}>
              Conectar productores locales con consumidores urbanos mediante una plataforma directa, eliminando intermediarios, garantizando precios justos y promoviendo el consumo consciente de productos del campo colombiano.
            </p>
          </div>

          <div style={{ marginBottom: '80px' }}>
            <h2 style={{ fontSize: '36px', fontWeight: '700', color: '#C8842A', marginBottom: '16px' }}>Visión</h2>
            <p style={{ fontSize: '18px', lineHeight: '1.8', opacity: 0.9 }}>
              Ser la plataforma líder en Colombia que transforma la forma en que las personas compran alimentos, fortaleciendo el campo, impulsando economías locales y creando una red sostenible entre productores y consumidores.
            </p>
          </div>
        </div>

        <div style={{ background: 'rgba(0,0,0,0.5)', padding: '32px 48px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid rgba(200,132,42,0.2)', flexWrap: 'wrap', gap: '16px' }}>
          <div style={{ fontSize: '22px', fontWeight: '700', letterSpacing: '3px' }}>RAÍ<span style={{ color: '#C8842A' }}>Z</span></div>
          <p style={{ fontSize: '13px', opacity: 0.4 }}>© 2026 Raíz SAS · Colombia</p>
        </div>
      </div>
    </main>
  )
}