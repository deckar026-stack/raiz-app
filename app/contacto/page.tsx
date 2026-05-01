'use client'
import { useState } from 'react'
import Link from 'next/link'

export default function Contacto() {
  const [enviado, setEnviado] = useState(false)
  const [form, setForm] = useState({ nombre: '', email: '', tipo: 'consumidor', mensaje: '' })

  const handleEnviar = () => setEnviado(true)
  const whatsappUrl = `https://wa.me/573196575896?text=Hola%20Diego%2C%20te%20escribo%20desde%20Ra%C3%ADz.`

  const inputStyle = {
    width: '100%', padding: '14px 18px', borderRadius: '12px',
    border: '1px solid rgba(245,237,216,0.2)',
    background: 'rgba(245,237,216,0.05)',
    color: '#f5edd8', fontSize: '15px', outline: 'none',
    marginBottom: '16px', boxSizing: 'border-box' as const,
    fontFamily: '"Times New Roman", serif',
  }

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
      <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.7)', zIndex: 1 }} />

      <div style={{ position: 'relative', zIndex: 2 }}>
        <div style={{ maxWidth: '700px', margin: '0 auto', padding: '120px 48px 60px' }}>

          <p style={{ fontSize: '11px', letterSpacing: '4px', textTransform: 'uppercase', color: '#C8842A', marginBottom: '16px' }}>
            Contáctenos
          </p>
          <h1 style={{ fontSize: 'clamp(40px, 6vw, 64px)', fontWeight: '700', lineHeight: 1.1, marginBottom: '16px' }}>
            Estamos para <em style={{ color: '#C8842A' }}>ayudarte.</em>
          </h1>
          <p style={{ fontSize: '18px', opacity: 0.7, marginBottom: '48px', lineHeight: '1.7' }}>
            ¿Eres productor y quieres unirte? ¿Tienes una pregunta sobre tu pedido? Escríbenos directamente.
          </p>

          {/* Tarjetas */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px', marginBottom: '32px' }}>
            <a href="mailto:deckar026@gmail.com" style={{
              background: 'rgba(245,237,216,0.08)', border: '1px solid rgba(200,132,42,0.3)',
              borderRadius: '16px', padding: '24px 16px', textAlign: 'center',
              textDecoration: 'none', color: '#f5edd8',
            }}>
              <div style={{ fontSize: '32px', marginBottom: '12px' }}>📧</div>
              <div style={{ fontSize: '11px', opacity: 0.6, letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '8px' }}>Email</div>
              <div style={{ fontSize: '13px', color: '#C8842A', fontWeight: '600' }}>deckar026@gmail.com</div>
            </a>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" style={{
              background: 'rgba(37,211,102,0.1)', border: '1px solid rgba(37,211,102,0.3)',
              borderRadius: '16px', padding: '24px 16px', textAlign: 'center',
              textDecoration: 'none', color: '#f5edd8',
            }}>
              <div style={{ fontSize: '32px', marginBottom: '12px' }}>💬</div>
              <div style={{ fontSize: '11px', opacity: 0.6, letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '8px' }}>WhatsApp</div>
              <div style={{ fontSize: '13px', color: '#25D366', fontWeight: '600' }}>+57 319 657 5896</div>
            </a>
            <div style={{
              background: 'rgba(245,237,216,0.08)', border: '1px solid rgba(200,132,42,0.3)',
              borderRadius: '16px', padding: '24px 16px', textAlign: 'center',
            }}>
              <div style={{ fontSize: '32px', marginBottom: '12px' }}>📍</div>
              <div style={{ fontSize: '11px', opacity: 0.6, letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '8px' }}>Colombia</div>
              <div style={{ fontSize: '13px', color: '#C8842A', fontWeight: '600' }}>Bogotá · Medellín · Cali</div>
            </div>
          </div>

          {/* Botón WhatsApp */}
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" style={{
            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px',
            background: '#25D366', color: 'white',
            padding: '18px 40px', borderRadius: '100px',
            textDecoration: 'none', fontSize: '18px', fontWeight: '700',
            marginBottom: '48px',
          }}>
            💬 Escríbenos por WhatsApp
          </a>

          {/* Formulario */}
          {!enviado ? (
            <div style={{
              background: 'rgba(245,237,216,0.06)',
              border: '1px solid rgba(245,237,216,0.1)',
              borderRadius: '24px', padding: '40px',
            }}>
              <h2 style={{ fontSize: '24px', fontWeight: '700', marginBottom: '28px' }}>
                O envíanos un mensaje
              </h2>
              <input type="text" placeholder="Nombre completo" value={form.nombre} onChange={e => setForm({ ...form, nombre: e.target.value })} style={inputStyle} />
              <input type="email" placeholder="tu@correo.com" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} style={inputStyle} />
              <select value={form.tipo} onChange={e => setForm({ ...form, tipo: e.target.value })} style={{ ...inputStyle, background: '#2a1a00' }}>
                <option value="consumidor">Consumidor — quiero comprar</option>
                <option value="productor">Productor — quiero vender</option>
                <option value="otro">Otro</option>
              </select>
              <textarea value={form.mensaje} onChange={e => setForm({ ...form, mensaje: e.target.value })} placeholder="Cuéntanos cómo podemos ayudarte..." rows={4} style={{ ...inputStyle, resize: 'vertical' as const }} />
              <button onClick={handleEnviar} style={{
                width: '100%', background: '#C8842A', color: 'white',
                border: 'none', borderRadius: '100px', padding: '18px',
                fontSize: '16px', fontWeight: '700', cursor: 'pointer',
                fontFamily: '"Times New Roman", serif',
              }}>
                Enviar mensaje →
              </button>
            </div>
          ) : (
            <div style={{
              background: 'rgba(245,237,216,0.06)', border: '1px solid rgba(200,132,42,0.3)',
              borderRadius: '24px', padding: '48px', textAlign: 'center',
            }}>
              <div style={{ fontSize: '64px', marginBottom: '24px' }}>🌱</div>
              <h2 style={{ fontSize: '28px', fontWeight: '700', marginBottom: '12px' }}>¡Mensaje recibido!</h2>
              <p style={{ fontSize: '16px', opacity: 0.7, marginBottom: '32px' }}>
                Te respondemos en menos de 24 horas a <strong>deckar026@gmail.com</strong>
              </p>
              <Link href="/" style={{
                background: '#C8842A', color: 'white',
                padding: '14px 32px', borderRadius: '100px',
                textDecoration: 'none', fontSize: '15px',
              }}>
                Volver al inicio
              </Link>
            </div>
          )}
        </div>

        <div style={{
          background: 'rgba(0,0,0,0.5)', padding: '32px 48px',
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          borderTop: '1px solid rgba(200,132,42,0.2)', flexWrap: 'wrap', gap: '16px',
        }}>
          <div style={{ fontSize: '22px', fontWeight: '700', letterSpacing: '3px' }}>RAÍ<span style={{ color: '#C8842A' }}>Z</span></div>
          <p style={{ fontSize: '13px', opacity: 0.4 }}>© 2026 Raíz SAS · Colombia</p>
        </div>
      </div>
    </main>
  )
}