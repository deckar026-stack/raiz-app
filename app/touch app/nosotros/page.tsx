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
      overflow: 'hidden'
    }}>

      {/* IMAGEN DE FONDO */}
      <div style={{
        position: 'fixed',
        inset: 0,
        backgroundImage: `url('/campo.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        zIndex: 0,
      }} />

      {/* OVERLAY */}
      <div style={{
        position: 'fixed',
        inset: 0,
        background: 'rgba(0,0,0,0.6)',
        zIndex: 1,
      }} />

      {/* CONTENIDO */}
      <div style={{ position: 'relative', zIndex: 2 }}>

        {/* NAVBAR */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '28px 48px'
        }}>
          <Link href="/" style={{
            fontSize: '32px',
            fontWeight: '700',
            letterSpacing: '4px',
            textDecoration: 'none',
            color: '#f5edd8'
          }}>
            RAÍ<span style={{ color: '#C8842A' }}>Z</span>
          </Link>

          <Link href="/catalogo" style={{
            color: 'rgba(245,237,216,0.8)',
            textDecoration: 'none'
          }}>
            ← Volver
          </Link>
        </div>

        {/* CONTENIDO CENTRAL */}
        <div style={{
          padding: '80px 48px',
          maxWidth: '800px'
        }}>

          <h1 style={{
            fontSize: '72px',
            lineHeight: 1.1,
            marginBottom: '32px'
          }}>
            Nuestra <span style={{ color: '#C8842A' }}>historia</span>
          </h1>

          <p style={{
            fontSize: '18px',
            lineHeight: '1.8',
            opacity: 0.9,
            marginBottom: '24px'
          }}>
            RAÍZ nace con una idea simple pero poderosa: volver a conectar el campo colombiano con las ciudades.
          </p>

          <p style={{
            fontSize: '18px',
            lineHeight: '1.8',
            opacity: 0.9,
            marginBottom: '24px'
          }}>
            Soy <strong>Diego Cárdenas</strong>, fundador de esta plataforma, y este proyecto surge al ver cómo muchos productores trabajan con esfuerzo, pero reciben muy poco debido a la cantidad de intermediarios.
          </p>

          <p style={{
            fontSize: '18px',
            lineHeight: '1.8',
            opacity: 0.9,
            marginBottom: '48px'
          }}>
            RAÍZ busca cambiar eso: crear un puente directo entre quienes cultivan los productos y quienes los consumen, generando comercio justo, productos más frescos y una conexión más humana con lo que comemos.
          </p>

          {/* MISIÓN */}
          <h2 style={{
            fontSize: '36px',
            marginBottom: '16px',
            color: '#C8842A'
          }}>
            Misión
          </h2>

          <p style={{
            fontSize: '18px',
            lineHeight: '1.8',
            marginBottom: '40px',
            opacity: 0.9
          }}>
            Conectar productores locales con consumidores urbanos mediante una plataforma directa, eliminando intermediarios, garantizando precios justos y promoviendo el consumo consciente de productos del campo colombiano.
          </p>

          {/* VISIÓN */}
          <h2 style={{
            fontSize: '36px',
            marginBottom: '16px',
            color: '#C8842A'
          }}>
            Visión
          </h2>

          <p style={{
            fontSize: '18px',
            lineHeight: '1.8',
            opacity: 0.9
          }}>
            Ser la plataforma líder en Colombia que transforma la forma en que las personas compran alimentos, fortaleciendo el campo, impulsando economías locales y creando una red sostenible entre productores y consumidores.
          </p>

        </div>
      </div>
    </main>
  )
}