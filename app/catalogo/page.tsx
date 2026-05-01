'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { supabase } from '../../lib/supabase'

type Producto = {
  id: number
  nombre: string
  descripcion: string
  precio: number
  imagen: string
  categoria: string
}

export default function Catalogo() {
  const [productos, setProductos] = useState<Producto[]>([])
  const [carrito, setCarrito] = useState<(Producto & { cantidad: number })[]>([])

  useEffect(() => {
    const fetchProductos = async () => {
      const { data, error } = await supabase.from('productos').select('*')
      if (error) console.error(error)
      if (data) setProductos(data)
    }
    fetchProductos()
  }, [])

  const agregarAlCarrito = (producto: Producto) => {
    setCarrito((prev) => {
      const existe = prev.find((p) => p.id === producto.id)
      if (existe) return prev.map((p) => p.id === producto.id ? { ...p, cantidad: p.cantidad + 1 } : p)
      return [...prev, { ...producto, cantidad: 1 }]
    })
  }

  const disminuirCantidad = (id: number) => {
    setCarrito((prev) =>
      prev.map((p) => p.id === id ? { ...p, cantidad: p.cantidad - 1 } : p).filter((p) => p.cantidad > 0)
    )
  }

  const eliminarProducto = (id: number) => {
    setCarrito((prev) => prev.filter((p) => p.id !== id))
  }

  const total = carrito.reduce((acc, item) => acc + item.precio * item.cantidad, 0)

  return (
    <main style={{
      minHeight: '100vh',
      background: '#1a0f00',
      color: '#f5edd8',
      fontFamily: '"Times New Roman", serif',
      paddingTop: '20px',
    }}>
      <div style={{ padding: '40px 48px' }}>
        <h1 style={{ fontSize: '48px', marginBottom: '8px', fontWeight: '700' }}>
          Productos del campo
        </h1>
        <p style={{ color: 'rgba(245,237,216,0.6)', marginBottom: '40px', fontSize: '16px' }}>
          Directo del productor a tu puerta
        </p>

        {productos.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '80px', opacity: 0.5 }}>
            <p style={{ fontSize: '20px' }}>Cargando productos...</p>
          </div>
        ) : (
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: '24px',
          }}>
            {productos.map((producto) => (
              <div key={producto.id} style={{
                background: '#2a1a00',
                borderRadius: '16px',
                overflow: 'hidden',
                boxShadow: '0 10px 25px rgba(0,0,0,0.3)',
              }}>
                {producto.imagen && (
                  <img src={producto.imagen} alt={producto.nombre} style={{
                    width: '100%', height: '200px', objectFit: 'cover',
                  }} />
                )}
                <div style={{ padding: '20px' }}>
                  <h2 style={{ fontSize: '20px', marginBottom: '8px', fontWeight: '700' }}>
                    {producto.nombre}
                  </h2>
                  <p style={{ opacity: 0.7, fontSize: '14px', lineHeight: '1.6', marginBottom: '12px' }}>
                    {producto.descripcion}
                  </p>
                  <p style={{ fontWeight: 'bold', fontSize: '20px', color: '#C8842A', marginBottom: '16px' }}>
                    ${producto.precio?.toLocaleString()}
                  </p>
                  <button
                    onClick={() => agregarAlCarrito(producto)}
                    style={{
                      width: '100%', padding: '12px',
                      background: '#C8842A', color: 'white',
                      border: 'none', borderRadius: '8px',
                      cursor: 'pointer', fontWeight: 'bold', fontSize: '15px',
                      fontFamily: '"Times New Roman", serif',
                    }}>
                    + Agregar al carrito
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {carrito.length > 0 && (
          <div style={{
            marginTop: '60px', background: '#120a00',
            padding: '32px', borderRadius: '16px',
          }}>
            <h2 style={{ marginBottom: '20px' }}>🛒 Tu carrito</h2>
            {carrito.map((item) => (
              <div key={item.id} style={{
                display: 'flex', justifyContent: 'space-between',
                alignItems: 'center', marginBottom: '16px',
                padding: '12px', background: '#2a1a00', borderRadius: '8px',
              }}>
                <span>{item.nombre} × {item.cantidad}</span>
                <span style={{ color: '#C8842A', fontWeight: 'bold' }}>
                  ${(item.precio * item.cantidad).toLocaleString()}
                </span>
                <div style={{ display: 'flex', gap: '8px' }}>
                  <button onClick={() => agregarAlCarrito(item)} style={{
                    background: '#C8842A', color: 'white', border: 'none',
                    borderRadius: '4px', padding: '4px 10px', cursor: 'pointer',
                  }}>+</button>
                  <button onClick={() => disminuirCantidad(item.id)} style={{
                    background: '#5C3D1E', color: 'white', border: 'none',
                    borderRadius: '4px', padding: '4px 10px', cursor: 'pointer',
                  }}>−</button>
                  <button onClick={() => eliminarProducto(item.id)} style={{
                    background: 'transparent', color: 'rgba(245,237,216,0.5)',
                    border: '1px solid rgba(245,237,216,0.2)',
                    borderRadius: '4px', padding: '4px 10px', cursor: 'pointer',
                  }}>×</button>
                </div>
              </div>
            ))}
            <div style={{
              borderTop: '1px solid rgba(245,237,216,0.1)',
              paddingTop: '20px', marginTop: '8px',
              display: 'flex', justifyContent: 'space-between', alignItems: 'center',
            }}>
              <h3 style={{ fontSize: '22px' }}>
                Total: <span style={{ color: '#C8842A' }}>${total.toLocaleString()}</span>
              </h3>
              <Link href="/carrito" style={{
                background: '#C8842A', color: 'white',
                padding: '12px 28px', borderRadius: '8px',
                textDecoration: 'none', fontWeight: 'bold',
              }}>
                Ir al carrito →
              </Link>
            </div>
          </div>
        )}
      </div>
    </main>
  )
}