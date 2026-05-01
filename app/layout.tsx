import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Raíz — Del campo colombiano, directo a ti',
  description: 'Conectamos productores rurales colombianos con consumidores urbanos. Sin intermediarios.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body style={{ margin: 0, padding: 0 }}>

        <nav style={{
          position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          padding: '20px 48px',
          background: 'rgba(10,5,0,0.35)',
          backdropFilter: 'blur(12px)',
          borderBottom: '1px solid rgba(200,132,42,0.2)',
          fontFamily: '"Times New Roman", serif',
        }}>
          <a href="/" style={{
            fontSize: '28px', fontWeight: '700', letterSpacing: '4px',
            color: '#f5edd8', textDecoration: 'none',
          }}>
            RAÍ<span style={{ color: '#C8842A' }}>Z</span>
          </a>
          <div style={{ display: 'flex', gap: '32px', alignItems: 'center' }}>
            <a href="/" style={{ color: 'rgba(245,237,216,0.8)', textDecoration: 'none', fontSize: '15px' }}>Inicio</a>
            <a href="/catalogo" style={{ color: 'rgba(245,237,216,0.8)', textDecoration: 'none', fontSize: '15px' }}>Productos</a>
            <a href="/suscripciones" style={{ color: 'rgba(245,237,216,0.8)', textDecoration: 'none', fontSize: '15px' }}>Suscripciones</a>
            <a href="/nosotros" style={{ color: 'rgba(245,237,216,0.8)', textDecoration: 'none', fontSize: '15px' }}>Nosotros</a>
            <a href="/contacto" style={{ color: 'rgba(245,237,216,0.8)', textDecoration: 'none', fontSize: '15px' }}>Contáctenos</a>
            <a href="/login" style={{
              background: '#C8842A', color: 'white',
              padding: '10px 24px', borderRadius: '4px',
              textDecoration: 'none', fontSize: '14px', letterSpacing: '1px',
            }}>Entrar</a>
          </div>
        </nav>

        <div style={{ paddingTop: '72px' }}>
          {children}
        </div>

      </body>
    </html>
  )
}