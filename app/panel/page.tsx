'use client'
import { useState } from 'react'

const pedidos = [
  { id: '#001', producto: 'Café Especial Huila', cantidad: '250g', cliente: 'María García', ciudad: 'Bogotá', estado: 'enviado', valor: 28000, fecha: 'Hoy' },
  { id: '#002', producto: 'Café Especial Huila', cantidad: '500g', cliente: 'Carlos Pérez', ciudad: 'Medellín', estado: 'pendiente', valor: 56000, fecha: 'Hoy' },
  { id: '#003', producto: 'Café Especial Huila', cantidad: '250g', cliente: 'Ana Ruiz', ciudad: 'Cali', estado: 'entregado', valor: 28000, fecha: 'Ayer' },
  { id: '#004', producto: 'Café Especial Huila', cantidad: '250g', cliente: 'Luis Torres', ciudad: 'Barranquilla', estado: 'entregado', valor: 28000, fecha: 'Ayer' },
]

const coloresEstado: Record<string, { bg: string; color: string; label: string }> = {
  pendiente: { bg: '#FFF3CD', color: '#856404', label: '⏳ Pendiente' },
  enviado: { bg: '#CCE5FF', color: '#004085', label: '🚚 Enviado' },
  entregado: { bg: '#D4EDDA', color: '#155724', label: '✅ Entregado' },
}

export default function Panel() {
  const [tab, setTab] = useState('pedidos')

  const totalMes = pedidos.reduce((acc, p) => acc + p.valor, 0)
  const pendientes = pedidos.filter(p => p.estado === 'pendiente').length
  const entregados = pedidos.filter(p => p.estado === 'entregado').length

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
        <div>
          <h1 style={{ fontSize: '24px', fontWeight: '900', color: 'white', margin: 0 }}>
            RAÍ<span style={{ color: '#C8842A' }}>Z</span>
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '12px', margin: '4px 0 0 0' }}>
            Panel del productor
          </p>
        </div>
        <div style={{
          background: 'rgba(255,255,255,0.1)',
          borderRadius: '100px',
          padding: '8px 16px',
          color: 'white',
          fontSize: '13px',
        }}>
          🌱 Familia Rodríguez
        </div>
      </div>

      <div style={{ padding: '24px', maxWidth: '700px', margin: '0 auto' }}>

        {/* Stats */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '12px',
          marginBottom: '24px',
        }}>
          <div style={{
            background: 'white',
            borderRadius: '20px',
            padding: '20px',
            boxShadow: '0 2px 12px rgba(44,26,14,0.06)',
          }}>
            <div style={{ fontSize: '11px', color: '#8A7A6A', letterSpacing: '1px', textTransform: 'uppercase' }}>
              Este mes
            </div>
            <div style={{ fontSize: '24px', fontWeight: '900', color: '#C8842A', marginTop: '8px' }}>
              ${totalMes.toLocaleString()}
            </div>
          </div>
          <div style={{
            background: 'white',
            borderRadius: '20px',
            padding: '20px',
            boxShadow: '0 2px 12px rgba(44,26,14,0.06)',
          }}>
            <div style={{ fontSize: '11px', color: '#8A7A6A', letterSpacing: '1px', textTransform: 'uppercase' }}>
              Pendientes
            </div>
            <div style={{ fontSize: '24px', fontWeight: '900', color: '#2C1A0E', marginTop: '8px' }}>
              {pendientes}
            </div>
          </div>
          <div style={{
            background: 'white',
            borderRadius: '20px',
            padding: '20px',
            boxShadow: '0 2px 12px rgba(44,26,14,0.06)',
          }}>
            <div style={{ fontSize: '11px', color: '#8A7A6A', letterSpacing: '1px', textTransform: 'uppercase' }}>
              Entregados
            </div>
            <div style={{ fontSize: '24px', fontWeight: '900', color: '#3A5C2C', marginTop: '8px' }}>
              {entregados}
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div style={{
          display: 'flex',
          gap: '8px',
          marginBottom: '20px',
        }}>
          {['pedidos', 'productos', 'pagos'].map(t => (
            <button
              key={t}
              onClick={() => setTab(t)}
              style={{
                background: tab === t ? '#2C1A0E' : 'white',
                color: tab === t ? 'white' : '#2C1A0E',
                border: '1.5px solid rgba(44,26,14,0.15)',
                borderRadius: '100px',
                padding: '8px 20px',
                fontSize: '14px',
                cursor: 'pointer',
                fontFamily: 'Georgia, serif',
                textTransform: 'capitalize',
              }}>
              {t}
            </button>
          ))}
        </div>

        {/* Pedidos */}
        {tab === 'pedidos' && (
          <div>
            <h3 style={{ fontSize: '18px', fontWeight: '700', color: '#2C1A0E', marginBottom: '16px' }}>
              Pedidos recientes
            </h3>
            {pedidos.map(pedido => (
              <div key={pedido.id} style={{
                background: 'white',
                borderRadius: '16px',
                padding: '18px 20px',
                marginBottom: '10px',
                boxShadow: '0 2px 12px rgba(44,26,14,0.06)',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                    <span style={{ fontWeight: '700', color: '#2C1A0E' }}>{pedido.id}</span>
                    <span style={{
                      background: coloresEstado[pedido.estado].bg,
                      color: coloresEstado[pedido.estado].color,
                      padding: '2px 10px',
                      borderRadius: '100px',
                      fontSize: '11px',
                      fontWeight: '600',
                    }}>
                      {coloresEstado[pedido.estado].label}
                    </span>
                  </div>
                  <div style={{ fontSize: '13px', color: '#8A7A6A' }}>
                    {pedido.cliente} · {pedido.ciudad}
                  </div>
                  <div style={{ fontSize: '12px', color: '#8A7A6A', marginTop: '2px' }}>
                    {pedido.producto} · {pedido.cantidad}
                  </div>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <div style={{ fontWeight: '900', color: '#C8842A', fontSize: '16px' }}>
                    ${pedido.valor.toLocaleString()}
                  </div>
                  <div style={{ fontSize: '11px', color: '#8A7A6A', marginTop: '2px' }}>
                    {pedido.fecha}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Productos */}
        {tab === 'productos' && (
          <div style={{
            background: 'white',
            borderRadius: '20px',
            padding: '32px',
            textAlign: 'center',
            boxShadow: '0 2px 12px rgba(44,26,14,0.06)',
          }}>
            <div style={{ fontSize: '48px', marginBottom: '16px' }}>☕</div>
            <h3 style={{ fontSize: '20px', fontWeight: '700', color: '#2C1A0E', marginBottom: '8px' }}>
              Café Especial Huila
            </h3>
            <p style={{ color: '#8A7A6A', marginBottom: '20px' }}>Activo · 50kg disponibles</p>
            <button style={{
              background: '#2C1A0E',
              color: 'white',
              border: 'none',
              borderRadius: '100px',
              padding: '12px 28px',
              fontSize: '14px',
              cursor: 'pointer',
              fontFamily: 'Georgia, serif',
            }}>
              + Agregar producto
            </button>
          </div>
        )}

        {/* Pagos */}
        {tab === 'pagos' && (
          <div style={{
            background: 'white',
            borderRadius: '20px',
            padding: '32px',
            boxShadow: '0 2px 12px rgba(44,26,14,0.06)',
          }}>
            <h3 style={{ fontSize: '18px', fontWeight: '700', color: '#2C1A0E', marginBottom: '20px' }}>
              Próximo pago
            </h3>
            <div style={{
              background: '#F0F7EC',
              borderRadius: '16px',
              padding: '24px',
              textAlign: 'center',
              marginBottom: '16px',
            }}>
              <div style={{ fontSize: '11px', color: '#3A5C2C', letterSpacing: '1px', textTransform: 'uppercase' }}>
                A consignar el viernes
              </div>
              <div style={{ fontSize: '42px', fontWeight: '900', color: '#3A5C2C', marginTop: '8px' }}>
                ${totalMes.toLocaleString()}
              </div>
            </div>
            <p style={{ fontSize: '13px', color: '#8A7A6A', textAlign: 'center' }}>
              Cuenta Bancolombia · ***4521
            </p>
          </div>
        )}

      </div>
    </main>
  )
}