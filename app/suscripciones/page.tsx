'use client'
import { useState } from 'react'
import Link from 'next/link'

const planes = [
  {
    id: 'basica',
    nombre: 'Cajita Esencial',
    descripcion: 'Elige tus productos favoritos y llegan cada mes.',
    precio: 65000,
    productos: ['☕ Café 250g', '🟫 Panela 500g'],
    color: '#5C3D1E',
    tag: 'Más popular',
  },
  {
    id: 'descubre',
    nombre: 'Descubre Colombia',
    descripcion: 'Cada mes una sorpresa de una región diferente del país.',
    precio: 85000,
    productos: ['☕ Café sorpresa', '🍯 Miel o cacao', '🟫 Producto regional'],
    color: '#3A5C2C',
    tag: 'Favorita',
  },
  {
    id: 'premium',
    nombre: 'Cajita Premium',
    descripcion: 'Lo mejor del campo colombiano curado especialmente para ti.',
    precio: 115000,
    productos: ['☕ Café especial 500g', '🍯 Miel pura 500g', '🍫 Cacao fino 250g', '🟫 Panela orgánica'],
    color: '#2C1A0E',
    tag: 'Completa',
  },
]

export default function Suscripciones() {
  const [planSeleccionado, setPlanSeleccionado] = useState('descubre')
  const [suscrito, setSuscrito] = useState(false)
  const plan = planes.find(p => p.id === planSeleccionado) ?? planes[0]

  if (suscrito) {
    return (
      <main style={{
        minHeight: '100vh', background: '#FDFAF4',
        fontFamily: '"Times New Roman", serif',
        display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center',
        padding: '24px', textAlign: 'center',
      }}>
        <div style={{ fontSize: '80px', marginBottom: '24px' }}>🎉</div>
        <h2 style={{ fontSize: '32px', fontWeight: '900', color: '#2C1A0E', marginBottom: '12px' }}>
          ¡Bienvenido a Raíz!
        </h2>
        <p style={{ color: '#8A7A6A', fontSize: '17px', maxWidth: '400px', lineHeight: '1.7', marginBottom: '8px' }}>
          Tu suscripción <strong>{plan.nombre}</strong> está activa.
        </p>
        <p style={{ color: '#8A7A6A', fontSize: '15px', marginBottom: '32px' }}>
          Tu primera cajita llega en 5–7 días hábiles. 📦
        </p>
        <div style={{ background: '#F0F7EC', borderRadius: '20px', padding: '24px 32px', marginBottom: '32px' }}>
          <div style={{ fontSize: '13px', color: '#3A5C2C', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '8px' }}>Tu plan mensual</div>
          <div style={{ fontSize: '36px', fontWeight: '900', color: '#3A5C2C' }}>${plan.precio.toLocaleString()} COP</div>
        </div>
        <Link href="/catalogo" style={{
          background: '#2C1A0E', color: 'white',
          textDecoration: 'none', borderRadius: '100px',
          padding: '16px 36px', fontSize: '16px', fontWeight: '700',
        }}>
          Explorar productos sueltos →
        </Link>
      </main>
    )
  }

  return (
    <main style={{
      minHeight: '100vh', background: '#FDFAF4',
      fontFamily: '"Times New Roman", serif',
      paddingTop: '80px',
    }}>
      <div style={{ maxWidth: '680px', margin: '0 auto', padding: '32px 24px' }}>

        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <p style={{ fontSize: '11px', letterSpacing: '2px', textTransform: 'uppercase', color: '#C8842A', marginBottom: '8px' }}>
            Suscripciones
          </p>
          <h2 style={{ fontSize: '36px', fontWeight: '900', color: '#2C1A0E', marginBottom: '12px', lineHeight: '1.1' }}>
            El campo colombiano,<br />cada mes en tu puerta.
          </h2>
          <p style={{ color: '#8A7A6A', fontSize: '16px' }}>Cancela cuando quieras. Sin compromisos.</p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '32px' }}>
          {planes.map(p => (
            <div key={p.id} onClick={() => setPlanSeleccionado(p.id)} style={{
              background: planSeleccionado === p.id ? p.color : 'white',
              borderRadius: '20px', padding: '24px', cursor: 'pointer',
              border: `2px solid ${planSeleccionado === p.id ? p.color : 'rgba(44,26,14,0.1)'}`,
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '12px' }}>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                    <h3 style={{ fontSize: '18px', fontWeight: '700', color: planSeleccionado === p.id ? 'white' : '#2C1A0E', margin: 0 }}>
                      {p.nombre}
                    </h3>
                    <span style={{ background: '#C8842A', color: 'white', padding: '2px 10px', borderRadius: '100px', fontSize: '11px', fontWeight: '600' }}>
                      {p.tag}
                    </span>
                  </div>
                  <p style={{ fontSize: '13px', color: planSeleccionado === p.id ? 'rgba(255,255,255,0.7)' : '#8A7A6A', margin: 0 }}>
                    {p.descripcion}
                  </p>
                </div>
                <div style={{ textAlign: 'right', flexShrink: 0, marginLeft: '16px' }}>
                  <div style={{ fontSize: '24px', fontWeight: '900', color: planSeleccionado === p.id ? '#C8842A' : '#2C1A0E' }}>
                    ${p.precio.toLocaleString()}
                  </div>
                  <div style={{ fontSize: '11px', color: planSeleccionado === p.id ? 'rgba(255,255,255,0.6)' : '#8A7A6A' }}>/mes</div>
                </div>
              </div>
              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                {p.productos.map((prod, i) => (
                  <span key={i} style={{
                    background: planSeleccionado === p.id ? 'rgba(255,255,255,0.15)' : '#F5EDD8',
                    color: planSeleccionado === p.id ? 'white' : '#5C3D1E',
                    padding: '4px 12px', borderRadius: '100px', fontSize: '12px',
                  }}>
                    {prod}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div style={{ background: 'white', borderRadius: '20px', padding: '24px', marginBottom: '24px', boxShadow: '0 2px 12px rgba(44,26,14,0.06)' }}>
          <h3 style={{ fontSize: '16px', fontWeight: '700', color: '#2C1A0E', marginBottom: '16px' }}>¿Cómo funciona?</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {[
              { emoji: '📦', texto: 'Tu cajita se arma cada mes con productos frescos del campo' },
              { emoji: '🚚', texto: 'Servientrega la lleva a tu puerta en 5–7 días hábiles' },
              { emoji: '📱', texto: 'Escanea el QR y conoce al productor detrás de cada producto' },
              { emoji: '💳', texto: 'Se cobra automáticamente cada mes con Wompi' },
            ].map((item, i) => (
              <div key={i} style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                <span style={{ fontSize: '24px' }}>{item.emoji}</span>
                <span style={{ fontSize: '14px', color: '#5C3D1E' }}>{item.texto}</span>
              </div>
            ))}
          </div>
        </div>

        <button onClick={() => setSuscrito(true)} style={{
          width: '100%', background: '#2C1A0E', color: 'white',
          border: 'none', borderRadius: '100px', padding: '18px',
          fontSize: '17px', fontWeight: '700', cursor: 'pointer',
          fontFamily: '"Times New Roman", serif', marginBottom: '12px',
        }}>
          Suscribirme por ${plan.precio.toLocaleString()}/mes →
        </button>
        <p style={{ textAlign: 'center', fontSize: '12px', color: '#8A7A6A' }}>
          🔒 Cancela cuando quieras · Sin permanencia
        </p>
      </div>
    </main>
  )
}