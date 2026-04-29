'use client'
import { useState } from 'react'

export default function Contacto() {
  const [enviado, setEnviado] = useState(false)
  const [form, setForm] = useState({ nombre: '', email: '', tipo: 'consumidor', mensaje: '' })

  const handleEnviar = () => {
    setEnviado(true)
  }

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
          <a href="/nosotros" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none', fontSize: '14px' }}>Nosotros</a>
          <a href="/login" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none', fontSize: '14px' }}>Entrar</a>
        </div>
      </div>

      {/* Hero */}
      <div style={{ background: '#2C1A0E', padding: '60px 48px', color: 'white' }}>
        <p style={{ fontSize: '11px', letterSpacing: '4px', textTransform: 'uppercase', color: '#C8842A', marginBottom: '16px' }}>
          Contáctenos
        </p>
        <h1 style={{ fontSize: 'clamp(36px, 5vw, 60px)', fontWeight: '700', margin: '0 0 16px 0' }}>
          Estamos para <em style={{ color: '#C8842A' }}>ayudarte.</em>
        </h1>
        <p style={{ fontSize: '18px', color: 'rgba(255,255,255,0.7)', maxWidth: '500px', lineHeight: '1.7' }}>
          ¿Eres productor y quieres unirte? ¿Tienes una pregunta sobre tu pedido? Escríbenos.
        </p>
      </div>

      <div style={{ maxWidth: '700px', margin: '0 auto', padding: '60px 48px' }}>

        {!enviado ? (
          <div style={{
            background: 'white', borderRadius: '24px', padding: '48px',
            boxShadow: '0 4px 24px rgba(44,26,14,0.08)',
          }}>
            <h2 style={{ fontSize: '26px', fontWeight: '700', color: '#2C1A0E', marginBottom: '32px' }}>
              Envíanos un mensaje
            </h2>

            <div style={{ marginBottom: '16px' }}>
              <label style={{ fontSize: '13px', color: '#8A7A6A', letterSpacing: '1px', textTransform: 'uppercase', display: 'block', marginBottom: '8px' }}>
                Nombre completo
              </label>
              <input
                type="text"
                value={form.nombre}
                onChange={e => setForm({ ...form, nombre: e.target.value })}
                placeholder="Tu nombre"
                style={{
                  width: '100%', padding: '14px 18px', borderRadius: '12px',
                  border: '1.5px solid rgba(44,26,14,0.15)', fontSize: '15px',
                  outline: 'none', boxSizing: 'border-box',
                  fontFamily: '"Times New Roman", serif',
                }}
              />
            </div>

            <div style={{ marginBottom: '16px' }}>
              <label style={{ fontSize: '13px', color: '#8A7A6A', letterSpacing: '1px', textTransform: 'uppercase', display: 'block', marginBottom: '8px' }}>
                Correo electrónico
              </label>
              <input
                type="email"
                value={form.email}
                onChange={e => setForm({ ...form, email: e.target.value })}
                placeholder="tu@correo.com"
                style={{
                  width: '100%', padding: '14px 18px', borderRadius: '12px',
                  border: '1.5px solid rgba(44,26,14,0.15)', fontSize: '15px',
                  outline: 'none', boxSizing: 'border-box',
                  fontFamily: '"Times New Roman", serif',
                }}
              />
            </div>

            <div style={{ marginBottom: '16px' }}>
              <label style={{ fontSize: '13px', color: '#8A7A6A', letterSpacing: '1px', textTransform: 'uppercase', display: 'block', marginBottom: '8px' }}>
                Soy
              </label>
              <select
                value={form.tipo}
                onChange={e => setForm({ ...form, tipo: e.target.value })}
                style={{
                  width: '100%', padding: '14px 18px', borderRadius: '12px',
                  border: '1.5px solid rgba(44,26,14,0.15)', fontSize: '15px',
                  outline: 'none', boxSizing: 'border-box',
                  fontFamily: '"Times New Roman", serif',
                  background: 'white',
                }}>
                <option value="consumidor">Consumidor — quiero comprar</option>
                <option value="productor">Productor — quiero vender</option>
                <option value="otro">Otro</option>
              </select>
            </div>

            <div style={{ marginBottom: '28px' }}>
              <label style={{ fontSize: '13px', color: '#8A7A6A', letterSpacing: '1px', textTransform: 'uppercase', display: 'block', marginBottom: '8px' }}>
                Mensaje
              </label>
              <textarea
                value={form.mensaje}
                onChange={e => setForm({ ...form, mensaje: e.target.value })}
                placeholder="Cuéntanos cómo podemos ayudarte..."
                rows={5}
                style={{
                  width: '100%', padding: '14px 18px', borderRadius: '12px',
                  border: '1.5px solid rgba(44,26,14,0.15)', fontSize: '15px',
                  outline: 'none', boxSizing: 'border-box', resize: 'vertical',
                  fontFamily: '"Times New Roman", serif',
                }}
              />
            </div>

            <button
              onClick={handleEnviar}
              style={{
                width: '100%', background: '#2C1A0E', color: 'white',
                border: 'none', borderRadius: '100px', padding: '18px',
                fontSize: '16px', fontWeight: '600', cursor: 'pointer',
                fontFamily: '"Times New Roman", serif', letterSpacing: '1px',
              }}>
              Enviar mensaje →
            </button>
          </div>
        ) : (
          <div style={{
            background: 'white', borderRadius: '24px', padding: '48px',
            textAlign: 'center',
            boxShadow: '0 4px 24px rgba(44,26,14,0.08)',
          }}>
            <div style={{ fontSize: '64px', marginBottom: '24px' }}>🌱</div>
            <h2 style={{ fontSize: '28px', fontWeight: '700', color: '#2C1A0E', marginBottom: '12px' }}>
              ¡Mensaje recibido!
            </h2>
            <p style={{ fontSize: '16px', color: '#8A7A6A', lineHeight: '1.7', marginBottom: '32px' }}>
              Te respondemos en menos de 24 horas.
            </p>
            <a href="/" style={{
              background: '#2C1A0E', color: 'white',
              padding: '14px 32px', borderRadius: '100px',
              textDecoration: 'none', fontSize: '15px',
            }}>
              Volver al inicio
            </a>
          </div>
        )}

        {/* Info de contacto */}
        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '16px', marginTop: '32px',
        }}>
          {[
            { icono: '📧', titulo: 'Email', valor: 'hola@raiz.com.co' },
            { icono: '📱', titulo: 'WhatsApp', valor: '+57 300 000 0000' },
            { icono: '📍', titulo: 'Colombia', valor: 'Bogotá · Medellín · Cali' },
          ].map((c, i) => (
            <div key={i} style={{
              background: 'white', borderRadius: '16px', padding: '20px',
              textAlign: 'center', boxShadow: '0 2px 12px rgba(44,26,14,0.06)',
            }}>
              <div style={{ fontSize: '28px', marginBottom: '8px' }}>{c.icono}</div>
              <div style={{ fontSize: '11px', color: '#8A7A6A', letterSpacing: '1px', textTransform: 'uppercase' }}>{c.titulo}</div>
              <div style={{ fontSize: '13px', color: '#2C1A0E', fontWeight: '600', marginTop: '4px' }}>{c.valor}</div>
            </div>
          ))}
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