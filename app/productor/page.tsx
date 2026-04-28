'use client'
import { QRCodeSVG } from 'qrcode.react'

const productor = {
  id: 1,
  nombre: 'Familia Rodríguez',
  finca: 'Finca La Esperanza',
  region: 'Pitalito, Huila',
  altitud: '1.800 msnm',
  generacion: '3ra generación cafetera',
  descripcion: 'Llevamos más de 60 años cultivando café especial en las montañas del Huila. Cada grano es seleccionado a mano con amor y dedicación para llevar lo mejor del campo colombiano a tu taza.',
  productos: ['Café Especial', 'Cacao'],
  certificaciones: ['Registro ICA', 'Sin químicos', 'Comercio justo'],
  emoji: '☕',
  cosecha: 'Marzo 2026',
  proceso: 'Lavado y secado al sol',
}

export default function PerfilProductor() {
  const url = `https://raiz.com.co/productor/${productor.id}`

  return (
    <main style={{
      minHeight: '100vh',
      background: '#FDFAF4',
      fontFamily: 'Georgia, serif',
    }}>

      {/* Header */}
      <div style={{
        background: '#2C1A0E',
        padding: '20px 24px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
        <h1 style={{
          fontSize: '24px',
          fontWeight: '900',
          color: 'white',
          margin: 0,
        }}>
          RAÍ<span style={{ color: '#C8842A' }}>Z</span>
        </h1>
        <a href="/catalogo" style={{
          color: 'rgba(255,255,255,0.7)',
          textDecoration: 'none',
          fontSize: '14px',
        }}>
          ← Volver al catálogo
        </a>
      </div>

      <div style={{ maxWidth: '600px', margin: '0 auto', padding: '32px 24px' }}>

        {/* Perfil header */}
        <div style={{
          background: 'white',
          borderRadius: '24px',
          padding: '32px',
          marginBottom: '16px',
          boxShadow: '0 2px 12px rgba(44,26,14,0.06)',
        }}>
          <div style={{ fontSize: '64px', marginBottom: '16px' }}>
            {productor.emoji}
          </div>
          <h2 style={{
            fontSize: '28px',
            fontWeight: '900',
            color: '#2C1A0E',
            margin: '0 0 4px 0',
          }}>
            {productor.finca}
          </h2>
          <p style={{ color: '#C8842A', fontWeight: '600', margin: '0 0 16px 0' }}>
            {productor.nombre} · {productor.generacion}
          </p>
          <p style={{ color: '#8A7A6A', lineHeight: '1.7', margin: '0 0 20px 0' }}>
            {productor.descripcion}
          </p>

          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            <div>
              <div style={{ fontSize: '11px', color: '#8A7A6A', letterSpacing: '1px', textTransform: 'uppercase' }}>Región</div>
              <div style={{ fontWeight: '600', color: '#2C1A0E' }}>📍 {productor.region}</div>
            </div>
            <div>
              <div style={{ fontSize: '11px', color: '#8A7A6A', letterSpacing: '1px', textTransform: 'uppercase' }}>Altitud</div>
              <div style={{ fontWeight: '600', color: '#2C1A0E' }}>🏔️ {productor.altitud}</div>
            </div>
            <div>
              <div style={{ fontSize: '11px', color: '#8A7A6A', letterSpacing: '1px', textTransform: 'uppercase' }}>Cosecha</div>
              <div style={{ fontWeight: '600', color: '#2C1A0E' }}>📅 {productor.cosecha}</div>
            </div>
          </div>
        </div>

        {/* Certificaciones */}
        <div style={{
          background: 'white',
          borderRadius: '24px',
          padding: '24px 32px',
          marginBottom: '16px',
          boxShadow: '0 2px 12px rgba(44,26,14,0.06)',
        }}>
          <h3 style={{ fontSize: '16px', fontWeight: '700', color: '#2C1A0E', marginBottom: '16px' }}>
            Certificaciones
          </h3>
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
            {productor.certificaciones.map((cert, i) => (
              <span key={i} style={{
                background: '#F0F7EC',
                color: '#3A5C2C',
                padding: '6px 14px',
                borderRadius: '100px',
                fontSize: '13px',
                fontWeight: '500',
              }}>
                ✅ {cert}
              </span>
            ))}
          </div>
        </div>

        {/* QR Trazabilidad */}
        <div style={{
          background: '#2C1A0E',
          borderRadius: '24px',
          padding: '32px',
          textAlign: 'center',
          boxShadow: '0 2px 12px rgba(44,26,14,0.15)',
        }}>
          <p style={{
            fontSize: '11px',
            letterSpacing: '2px',
            textTransform: 'uppercase',
            color: '#C8842A',
            marginBottom: '8px',
          }}>
            Trazabilidad verificada
          </p>
          <h3 style={{
            fontSize: '20px',
            fontWeight: '700',
            color: 'white',
            marginBottom: '24px',
          }}>
            Este código va en tu empaque
          </h3>

          <div style={{
            background: 'white',
            borderRadius: '16px',
            padding: '24px',
            display: 'inline-block',
            marginBottom: '16px',
          }}>
            <QRCodeSVG
              value={url}
              size={160}
              fgColor="#2C1A0E"
            />
          </div>

          <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '13px', margin: 0 }}>
            El consumidor escanea esto y ve tu perfil completo
          </p>
        </div>

      </div>
    </main>
  )
}