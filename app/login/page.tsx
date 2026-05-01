'use client'
import { useState } from 'react'
import { supabase } from '../../lib/supabase'

export default function Login() {
  const [tipo, setTipo] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [nombre, setNombre] = useState('')
  const [telefono, setTelefono] = useState('')
  const [finca, setFinca] = useState('')
  const [region, setRegion] = useState('')
  const [modo, setModo] = useState('login')
  const [mensaje, setMensaje] = useState('')
  const [cargando, setCargando] = useState(false)

  const handleAuth = async () => {
    setCargando(true)
    setMensaje('')
    if (modo === 'registro') {
      const { error } = await supabase.auth.signUp({
        email, password,
        options: { data: { tipo, nombre, telefono, finca, region } }
      })
      if (error) setMensaje('Error: ' + error.message)
      else setMensaje('¡Revisa tu correo para confirmar tu cuenta!')
    } else {
      const { error } = await supabase.auth.signInWithPassword({ email, password })
      if (error) setMensaje('Correo o contraseña incorrectos')
      else window.location.href = tipo === 'productor' ? '/panel' : '/catalogo'
    }
    setCargando(false)
  }

  const inputStyle = {
    width: '100%', padding: '14px 18px', borderRadius: '12px',
    border: '1px solid rgba(245,237,216,0.2)',
    background: 'rgba(245,237,216,0.05)',
    color: '#f5edd8', fontSize: '15px', outline: 'none',
    marginBottom: '12px', boxSizing: 'border-box' as const,
    fontFamily: '"Times New Roman", serif',
  }

  return (
    <main style={{
      minHeight: '100vh',
      display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'center',
      fontFamily: '"Times New Roman", serif',
      padding: '24px', position: 'relative',
    }}>

      <div style={{
        position: 'fixed', inset: 0,
        backgroundImage: `url('/campo.jpg')`,
        backgroundSize: 'cover', backgroundPosition: 'center', zIndex: 0,
      }} />
      <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.75)', zIndex: 1 }} />

      <div style={{ position: 'relative', zIndex: 2, width: '100%', maxWidth: '440px' }}>

        <a href="/" style={{
          display: 'block', textAlign: 'center',
          fontSize: '42px', fontWeight: '700', letterSpacing: '4px',
          color: '#f5edd8', textDecoration: 'none', marginBottom: '8px',
        }}>
          RAÍ<span style={{ color: '#C8842A' }}>Z</span>
        </a>
        <p style={{ color: 'rgba(245,237,216,0.6)', marginBottom: '48px', fontSize: '15px', textAlign: 'center' }}>
          Del campo colombiano, directo a ti.
        </p>

        {!tipo && (
          <div style={{ textAlign: 'center' }}>
            <p style={{ color: '#f5edd8', fontSize: '20px', fontWeight: '600', marginBottom: '28px' }}>
              ¿Cómo quieres entrar?
            </p>
            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', justifyContent: 'center' }}>
              <button onClick={() => setTipo('consumidor')} style={{
                background: '#C8842A', color: 'white', border: 'none',
                borderRadius: '100px', padding: '18px 40px', fontSize: '16px',
                fontWeight: '600', cursor: 'pointer', fontFamily: '"Times New Roman", serif',
              }}>
                🛒 Quiero comprar
              </button>
              <button onClick={() => setTipo('productor')} style={{
                background: 'transparent', color: '#f5edd8',
                border: '2px solid rgba(245,237,216,0.5)',
                borderRadius: '100px', padding: '18px 40px', fontSize: '16px',
                fontWeight: '600', cursor: 'pointer', fontFamily: '"Times New Roman", serif',
              }}>
                🌱 Soy productor
              </button>
            </div>
          </div>
        )}

        {tipo && (
          <div style={{
            background: 'rgba(245,237,216,0.06)',
            border: '1px solid rgba(245,237,216,0.15)',
            borderRadius: '24px', padding: '40px',
          }}>
            <p style={{ fontSize: '11px', letterSpacing: '2px', textTransform: 'uppercase', color: '#C8842A', marginBottom: '8px' }}>
              {tipo === 'consumidor' ? '🛒 Consumidor' : '🌱 Productor'}
            </p>
            <h2 style={{ fontSize: '26px', fontWeight: '700', color: '#f5edd8', marginBottom: '28px' }}>
              {modo === 'login' ? 'Bienvenido a Raíz' : 'Crear cuenta'}
            </h2>

            {modo === 'registro' && (
              <>
                <input type="text" placeholder="Nombre completo" value={nombre} onChange={e => setNombre(e.target.value)} style={inputStyle} />
                <input type="tel" placeholder="Teléfono / WhatsApp" value={telefono} onChange={e => setTelefono(e.target.value)} style={inputStyle} />
                {tipo === 'productor' && (
                  <>
                    <input type="text" placeholder="Nombre de tu finca o empresa" value={finca} onChange={e => setFinca(e.target.value)} style={inputStyle} />
                    <input type="text" placeholder="Región / Municipio" value={region} onChange={e => setRegion(e.target.value)} style={inputStyle} />
                  </>
                )}
              </>
            )}

            <input type="email" placeholder="Correo electrónico" value={email} onChange={e => setEmail(e.target.value)} style={inputStyle} />
            <input type="password" placeholder="Contraseña (mínimo 6 caracteres)" value={password} onChange={e => setPassword(e.target.value)} style={{ ...inputStyle, marginBottom: '24px' }} />

            {mensaje && (
              <div style={{
                background: mensaje.includes('Error') ? 'rgba(200,0,0,0.2)' : 'rgba(37,211,102,0.1)',
                color: mensaje.includes('Error') ? '#ff6b6b' : '#25D366',
                padding: '12px 16px', borderRadius: '12px', fontSize: '14px',
                marginBottom: '16px',
              }}>
                {mensaje}
              </div>
            )}

            <button onClick={handleAuth} disabled={cargando} style={{
              width: '100%', background: '#C8842A', color: 'white',
              border: 'none', borderRadius: '100px', padding: '16px',
              fontSize: '16px', fontWeight: '600', cursor: 'pointer',
              marginBottom: '16px', opacity: cargando ? 0.7 : 1,
              fontFamily: '"Times New Roman", serif',
            }}>
              {cargando ? 'Cargando...' : modo === 'login' ? 'Entrar' : 'Crear cuenta'}
            </button>

            <button onClick={() => setModo(modo === 'login' ? 'registro' : 'login')} style={{
              width: '100%', background: 'transparent', color: 'rgba(245,237,216,0.6)',
              border: 'none', fontSize: '14px', cursor: 'pointer',
              marginBottom: '8px', fontFamily: '"Times New Roman", serif',
            }}>
              {modo === 'login' ? '¿No tienes cuenta? Regístrate' : '¿Ya tienes cuenta? Entra'}
            </button>

            <button onClick={() => setTipo('')} style={{
              width: '100%', background: 'transparent', color: 'rgba(245,237,216,0.5)',
              border: 'none', fontSize: '14px', cursor: 'pointer',
              fontFamily: '"Times New Roman", serif',
            }}>
              ← Volver
            </button>
          </div>
        )}
      </div>
    </main>
  )
}