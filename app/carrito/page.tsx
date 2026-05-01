'use client'

import { useState } from 'react'
import Link from 'next/link'

const productosIniciales = [
  {
    id: 1,
    nombre: 'Café Especial Huila',
    productor: 'Familia Rodríguez',
    precio: 28000,
    unidad: '250g',
    emoji: '☕',
    cantidad: 1,
  },
  {
    id: 2,
    nombre: 'Miel Pura de Abeja',
    productor: 'Apiario Los Andes',
    precio: 35000,
    unidad: '500g',
    emoji: '🍯',
    cantidad: 1,
  },
]

export default function Carrito() {
  const [items, setItems] = useState(productosIniciales)

  const cambiarCantidad = (id: number, delta: number) => {
    setItems(items.map(item =>
      item.id === id
        ? { ...item, cantidad: Math.max(1, item.cantidad + delta) }
        : item
    ))
  }

  const eliminar = (id: number) => {
    setItems(items.filter(item => item.id !== id))
  }

  const subtotal = items.reduce((acc, item) => acc + item.precio * item.cantidad, 0)
  const envio = 8900
  const total = subtotal + envio

  return (
    <main style={{
      minHeight: '100vh',
      background: '#FDFAF4',
      fontFamily: 'Georgia, serif',
    }}>

      {/* HEADER */}
      <div style={{
        background: 'white',
        padding: '20px 24px',
        borderBottom: '1px solid rgba(44,26,14,0.08)',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
        
        {/* LOGO → vuelve al home */}
        <Link href="/" style={{
          fontSize: '24px',
          fontWeight: '900',
          color: '#2C1A0E',
          textDecoration: 'none'
        }}>
          RAÍ<span style={{ color: '#C8842A' }}>Z</span>
        </Link>

        {/* VOLVER A CATÁLOGO */}
        <Link href="/catalogo" style={{
          color: '#8A7A6A',
          textDecoration: 'none',
          fontSize: '14px'
        }}>
          ← Seguir comprando
        </Link>
      </div>

      <div style={{
        maxWidth: '600px',
        margin: '0 auto',
        padding: '32px 24px',
      }}>

        <h2 style={{
          fontSize: '28px',
          fontWeight: '900',
          color: '#2C1A0E',
          marginBottom: '24px',
        }}>
          Tu carrito 🛒
        </h2>

        {/* ITEMS */}
        <div style={{ marginBottom: '24px' }}>
          {items.map(item => (
            <div key={item.id} style={{
              background: 'white',
              borderRadius: '20px',
              padding: '20px',
              marginBottom: '12px',
              boxShadow: '0 2px 12px rgba(44,26,14,0.06)',
              display: 'flex',
              gap: '16px',
              alignItems: 'center',
            }}>
              <div style={{ fontSize: '40px' }}>{item.emoji}</div>

              <div style={{ flex: 1 }}>
                <div style={{ fontWeight: '700', color: '#2C1A0E', fontSize: '15px' }}>
                  {item.nombre}
                </div>
                <div style={{ fontSize: '12px', color: '#8A7A6A' }}>
                  {item.productor} · {item.unidad}
                </div>
                <div style={{ fontWeight: '700', color: '#C8842A', marginTop: '6px' }}>
                  ${(item.precio * item.cantidad).toLocaleString()}
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
                
                {/* CONTROLES */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <button onClick={() => cambiarCantidad(item.id, -1)} style={btnMinus}>
                    −
                  </button>

                  <span style={{ fontWeight: '700', color: '#2C1A0E' }}>
                    {item.cantidad}
                  </span>

                  <button onClick={() => cambiarCantidad(item.id, 1)} style={btnPlus}>
                    +
                  </button>
                </div>

                <button onClick={() => eliminar(item.id)} style={btnEliminar}>
                  Eliminar
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* RESUMEN */}
        <div style={cardResumen}>
          <h3 style={tituloResumen}>Resumen del pedido</h3>

          <Fila label="Subtotal" value={subtotal} />
          <Fila label="Envío Servientrega" value={envio} />

          <div style={totalRow}>
            <span>Total</span>
            <span style={{ color: '#C8842A' }}>
              ${total.toLocaleString()}
            </span>
          </div>
        </div>

        {/* BOTÓN PAGAR */}
        <button style={btnPagar}>
          Pagar con Wompi →
        </button>

        <p style={footerText}>
          🔒 Pago seguro · Envío a todo Colombia
        </p>

      </div>
    </main>
  )
}

/* 🎨 ESTILOS LIMPIOS */
const btnMinus = {
  width: '28px',
  height: '28px',
  borderRadius: '50%',
  border: '1.5px solid rgba(44,26,14,0.2)',
  background: 'transparent',
  cursor: 'pointer'
}

const btnPlus = {
  width: '28px',
  height: '28px',
  borderRadius: '50%',
  background: '#2C1A0E',
  border: 'none',
  color: 'white',
  cursor: 'pointer'
}

const btnEliminar = {
  background: 'none',
  border: 'none',
  color: '#8A7A6A',
  fontSize: '12px',
  cursor: 'pointer'
}

const cardResumen = {
  background: 'white',
  borderRadius: '20px',
  padding: '24px',
  marginBottom: '16px',
  boxShadow: '0 2px 12px rgba(44,26,14,0.06)'
}

const tituloResumen = {
  fontSize: '16px',
  fontWeight: '700',
  marginBottom: '16px'
}

const totalRow = {
  borderTop: '1px solid rgba(44,26,14,0.08)',
  paddingTop: '16px',
  display: 'flex',
  justifyContent: 'space-between',
  fontWeight: '900',
  fontSize: '20px'
}

const btnPagar = {
  width: '100%',
  background: '#2C1A0E',
  color: 'white',
  border: 'none',
  borderRadius: '100px',
  padding: '18px',
  fontSize: '17px',
  fontWeight: '700',
  cursor: 'pointer'
}

const footerText: React.CSSProperties = {
  textAlign: 'center',
  fontSize: '12px',
  color: '#8A7A6A',
  marginTop: '12px'
}

function Fila({ label, value }: { label: string; value: number }) {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
      <span style={{ color: '#8A7A6A' }}>{label}</span>
      <span style={{ fontWeight: '600' }}>${value.toLocaleString()}</span>
    </div>
  )
}