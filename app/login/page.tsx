'use client'
import { useState } from 'react'
import { supabase } from '../../lib/supabase'

export default function Login() {
  const [tipo, setTipo] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [modo, setModo] = useState('login')
  const [mensaje, setMensaje] = useState('')
  const [cargando, setCargando] = useState(false)

  const handleAuth = async () => {
    setCargando(true)
    setMensaje('')

    if (modo === 'registro') {
      const { error } = await supabase.auth.signUp({
        email,
        password,
        options: { data: { tipo } }
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

  return (
    <main style={{
      minHeight: '100vh',
      background: '#FDFAF4',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'Georgia, serif',
      padding: '24px',
    }}>
      <h1 style={{ fontSize: '42px', fontWeight: '900', color: '#2C1A0E', letterSpacing: '-1px', margin: '0 0 8px 0' }}>
        RAÍ<span style={{ color: '#C8842A' }}>Z</span>
      </h1>
      <p style={{ color: '#8A7A6A', marginBottom: '48px', fontSize: '15px' }}>
        Del campo colombiano, directo a ti.
      </p>

      {!tipo && (
        <div style={{ textAlign: 'center' }}>
          <p style={{ color: '#2C1A0E', fontSize: '20px', fontWeight: '600', marginBottom: '24px' }}>
            ¿Cómo quieres entrar?
          </p>
          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', justifyContent: 'center' }}>
            <button onClick={() => setTipo('consumidor')} style={{
              background: '#2C1A0E', color: '#FDFAF4', border: 'none',
              borderRadius: '100px', padding: '18px 40px', fontSize: '16px',
              fontWeight: '600', cursor: 'pointer',
            }}>
              🛒 Quiero comprar
            </button>
            <button onClick={() => setTipo('productor')} style={{
              background: 'transparent', color: '#2C1A0E', border: '2px solid #2C1A0E',
              borderRadius: '100px', padding: '18px 40px', fontSize: '16px',
              fontWeight: '600', cursor: 'pointer',
            }}>
              🌱 Soy productor
            </button>
          </div>
        </div>
      )}

      {tipo && (
        <div style={{
          background: 'white', borderRadius: '24px', padding: '40px',
          width: '100%', maxWidth: '400px',
          boxShadow: '0 4px 24px rgba(44,26,14,0.1)',
        }}>
          <p style={{ fontSize: '11px', letterSpacing: '2px', textTransform: 'uppercase', color: '#C8842A', marginBottom: '8px' }}>
            {tipo === 'consumidor' ? '🛒 Consumidor' : '🌱 Productor'}
          </p>
          <h2 style={{ fontSize: '26px', fontWeight: '900', color: '#2C1A0E', marginBottom: '28px' }}>
            {modo === 'login' ? 'Bienvenido a Raíz' : 'Crear cuenta'}
          </h2>

          <input
            type="email"
            placeholder="Correo electrónico"
            value={email}
            onChange={e => setEmail(e.target.value)}
            style={{
              width: '100%', padding: '14px 18px', borderRadius: '12px',
              border: '1.5px solid rgba(44,26,14,0.15)', fontSize: '15px',
              marginBottom: '12px', outline: 'none', boxSizing: 'border-box',
            }}
          />

          <input
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={e => setPassword(e.target.value)}
            style={{
              width: '100%', padding: '14px 18px', borderRadius: '12px',
              border: '1.5px solid rgba(44,26,14,0.15)', fontSize: '15px',
              marginBottom: '24px', outline: 'none', boxSizing: 'border-box',
            }}
          />

          {mensaje && (
            <div style={{
              background: mensaje.includes('Error') ? '#FFF0F0' : '#F0F7EC',
              color: mensaje.includes('Error') ? '#CC0000' : '#3A5C2C',
              padding: '12px 16px', borderRadius: '12px', fontSize: '14px',
              marginBottom: '16px',
            }}>
              {mensaje}
            </div>
          )}

          <button
            onClick={handleAuth}
            disabled={cargando}
            style={{
              width: '100%', background: '#2C1A0E', color: 'white',
              border: 'none', borderRadius: '100px', padding: '16px',
              fontSize: '16px', fontWeight: '600', cursor: 'pointer',
              marginBottom: '16px', opacity: cargando ? 0.7 : 1,
              fontFamily: 'Georgia, serif',
            }}>
            {cargando ? 'Cargando...' : modo === 'login' ? 'Entrar' : 'Crear cuenta'}
          </button>

          <button
            onClick={() => setModo(modo === 'login' ? 'registro' : 'login')}
            style={{
              width: '100%', background: 'transparent', color: '#8A7A6A',
              border: 'none', fontSize: '14px', cursor: 'pointer',
              marginBottom: '8px',
            }}>
            {modo === 'login' ? '¿No tienes cuenta? Regístrate' : '¿Ya tienes cuenta? Entra'}
          </button>

          <button onClick={() => setTipo('')} style={{
            width: '100%', background: 'transparent', color: '#8A7A6A',
            border: 'none', fontSize: '14px', cursor: 'pointer',
          }}>
            ← Volver
          </button>
        </div>
      )}
    </main>
  )
}