'use client'
import { useState } from 'react'

const productos = [
  {
    id: 1,
    nombre: 'Café Especial Huila',
    productor: 'Familia Rodríguez',
    region: 'Pitalito, Huila',
    altitud: '1.800 msnm',
    precio: 28000,
    unidad: '250g',
    emoji: '☕',
    categoria: 'cafe',
    descripcion: 'Notas de chocolate y frutas rojas. Tostado medio artesanal.',
  },
  {
    id: 2,
    nombre: 'Café Nariño Premium',
    productor: 'Finca La Esperanza',
    region: 'La Unión, Nariño',
    altitud: '2.100 msnm',
    precio: 32000,
    unidad: '250g',
    emoji: '☕',
    categoria: 'cafe',
    descripcion: 'Acidez brillante, cuerpo suave. Uno de los mejores del país.',
  },
  {
    id: 3,
    nombre: 'Panela Orgánica',
    productor: 'Trapiche El Moral',
    region: 'Vélez, Santander',
    altitud: '1.200 msnm',
    precio: 12000,
    unidad: '500g',
    emoji: '🟫',
    categoria: 'panela',
    descripcion: 'Sin químicos, proceso tradicional. Dulzor natural puro.',
  },
  {
    id: 4,
    nombre: 'Panela Granulada',
    productor: 'Familia Suárez',
    region: 'Chiquinquirá, Boyacá',
    altitud: '1.000 msnm',
    precio: 14000,
    unidad: '500g',
    emoji: '🟫',
    categoria: 'panela',
    descripcion: 'Ideal para bebidas y recetas. Granulado fino y uniforme.',
  },
  {
    id: 5,
    nombre: 'Miel Pura de Abeja',
    productor: 'Apiario Los Andes',
    region: 'Sutamarchán, Boyacá',
    altitud: '2.000 msnm',
    precio: 35000,
    unidad: '500g',
    emoji: '🍯',
    categoria: 'miel',
    descripcion: 'Miel cruda sin procesar. Certificada ICA. Cosecha pequeña.',
  },
  {
    id: 6,
    nombre: 'Cacao Fino de Aroma',
    productor: 'Asociación Cacaotera',
    region: 'Tumaco, Nariño',
    altitud: '50 msnm',
    precio: 22000,
    unidad: '250g',
    emoji: '🍫',
    categoria: 'cacao',
    descripcion: 'Reconocido mundialmente. Fermentado y secado al sol.',
  },
]

const categorias = [
  { id: 'todos', label: 'Todo', emoji: '🌿' },
  { id: 'cafe', label: 'Café', emoji: '☕' },
  { id: 'panela', label: 'Panela', emoji: '🟫' },
  { id: 'miel', label: 'Miel', emoji: '🍯' },
  { id: 'cacao', label: 'Cacao', emoji: '🍫' },
]

export default function Catalogo() {
  const [categoriaActiva, setCategoriaActiva] = useState('todos')
  const [carrito, setCarrito] = useState([])

  const productosFiltrados = categoriaActiva === 'todos'
    ? productos
    : productos.filter(p => p.categoria === categoriaActiva)

    const agregarAlCarrito = (producto: typeof productos[0]) => {
    setCarrito([...carrito, producto])
  }

  return (
    <main style={{
      minHeight: '100vh',
      background: '#FDFAF4',
      fontFamily: 'Georgia, serif',
    }}>

      {/* Header */}
      <div style={{
        background: 'white',
        padding: '20px 24px',
        borderBottom: '1px solid rgba(44,26,14,0.08)',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        position: 'sticky',
        top: 0,
        zIndex: 10,
      }}>
        <h1 style={{
          fontSize: '28px',
          fontWeight: '900',
          color: '#2C1A0E',
          margin: 0,
        }}>
          RAÍ<span style={{ color: '#C8842A' }}>Z</span>
        </h1>
        <div style={{
          background: '#2C1A0E',
          color: 'white',
          borderRadius: '100px',
          padding: '8px 18px',
          fontSize: '14px',
          cursor: 'pointer',
        }}>
          🛒 {carrito.length}
        </div>
      </div>

      <div style={{ padding: '24px' }}>

        {/* Título */}
        <h2 style={{
          fontSize: '32px',
          fontWeight: '900',
          color: '#2C1A0E',
          marginBottom: '4px',
        }}>
          Productos del campo
        </h2>
        <p style={{ color: '#8A7A6A', marginBottom: '24px', fontSize: '15px' }}>
          Directo del productor a tu puerta
        </p>

        {/* Categorías */}
        <div style={{
          display: 'flex',
          gap: '8px',
          marginBottom: '28px',
          flexWrap: 'wrap',
        }}>
          {categorias.map(cat => (
            <button
              key={cat.id}
              onClick={() => setCategoriaActiva(cat.id)}
              style={{
                background: categoriaActiva === cat.id ? '#2C1A0E' : 'white',
                color: categoriaActiva === cat.id ? 'white' : '#2C1A0E',
                border: '1.5px solid rgba(44,26,14,0.15)',
                borderRadius: '100px',
                padding: '8px 18px',
                fontSize: '14px',
                cursor: 'pointer',
                fontFamily: 'Georgia, serif',
              }}>
              {cat.emoji} {cat.label}
            </button>
          ))}
        </div>

        {/* Grid de productos */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
          gap: '16px',
        }}>
          {productosFiltrados.map(producto => (
            <div
              key={producto.id}
              style={{
                background: 'white',
                borderRadius: '20px',
                padding: '24px',
                boxShadow: '0 2px 12px rgba(44,26,14,0.06)',
                border: '1px solid rgba(44,26,14,0.06)',
              }}>

              <div style={{ fontSize: '48px', marginBottom: '16px' }}>
                {producto.emoji}
              </div>

              <h3 style={{
                fontSize: '18px',
                fontWeight: '700',
                color: '#2C1A0E',
                margin: '0 0 4px 0',
              }}>
                {producto.nombre}
              </h3>

              <p style={{ fontSize: '13px', color: '#8A7A6A', margin: '0 0 4px 0' }}>
                👨‍🌾 {producto.productor}
              </p>
              <p style={{ fontSize: '13px', color: '#8A7A6A', margin: '0 0 4px 0' }}>
                📍 {producto.region}
              </p>
              <p style={{ fontSize: '13px', color: '#8A7A6A', margin: '0 0 12px 0' }}>
                🏔️ {producto.altitud}
              </p>

              <p style={{
                fontSize: '13px',
                color: '#5C3D1E',
                lineHeight: '1.5',
                marginBottom: '20px',
              }}>
                {producto.descripcion}
              </p>

              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
                <div>
                  <span style={{
                    fontSize: '22px',
                    fontWeight: '900',
                    color: '#C8842A',
                  }}>
                    ${producto.precio.toLocaleString()}
                  </span>
                  <span style={{ fontSize: '13px', color: '#8A7A6A' }}>
                    {' '}/ {producto.unidad}
                  </span>
                </div>

                <button
                  onClick={() => agregarAlCarrito(producto)}
                  style={{
                    background: '#2C1A0E',
                    color: 'white',
                    border: 'none',
                    borderRadius: '100px',
                    padding: '10px 20px',
                    fontSize: '14px',
                    cursor: 'pointer',
                    fontFamily: 'Georgia, serif',
                  }}>
                  + Agregar
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}