'use client'
import { useState } from 'react'
import { supabase } from '../../lib/supabase'

export default function Recuperar() {
  const [paso, setPaso] = useState(1)
  const [email, setEmail] = useState('')
  const [codigo, setCodigo] = useState('')
  const [password, setPassword] = useState('')
  const [confirmar, setConfirmar] = useState('')
  const [mensaje, setMensaje] = useState('')
  const [cargando, setCargando] = useState(false)

  const inputStyle = {
    width: '100%', padding: '14px 18px', borderRadius: '12px',
    border: '1px solid rgba(245,237,216,0.2)',
    background: 'rgba(245,237,216,0.05)',
    color: '#f5edd8', fontSize: '15px', outline: 'none',
    marginBottom: '12px', boxSizing: 'border-box' as const,
    fontFamily: '"Times New Roman", serif',
  }

  const handleEnviarCodigo = async () => {
    if (!email) { setMensaje('Escribe tu correo'); return }
    setCargando(true)
    setMensaje('')
    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: 'https://raiz-app-l9pb.vercel.app/recuperar',
    })
    if (error) setMensaje('Error: ' + error.message)
    else { setMensaje('¡Código enviado! Revisa tu correo.'); setPaso(2) }
    setCargando(false)
  }

  const handleVerificarCodigo = async () => {
    if (!codigo) { setMensaje('Escribe el código'); return }
    setCargando(true)
    setMensaje('')
    const { error } = await supabase.auth.verifyOtp({
      email,
      token: codigo,
      type: 'recovery',
    })
    if (error) setMensaje('Código incorrecto o expirado')
    else { setMensaje(''); setPaso(3) }
    setCargando(false)
  }

  const handleCambiarPassword = async () => {
    if (!password || !confirmar) { setMensaje('Completa ambos campos'); return }
    if (password !== confirmar) { setMensaje('Las contraseñas no coinciden'); return }
    if (password.length < 6) { setMensaje('Mínimo 6 caracteres'); return }
    setCargando(true)
    setMensaje('')
    const { error } = await supabase.auth.updateUser({ password })
    if (error) setMensaje('Error: ' + error.message)
    else setPaso(4)
    setCargando(false)
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
        <p style={{ color: 'rgba(245,237,216,0.6)', marginBottom: '40px', fontSize: '15px', textAlign: 'center' }}>
          Recuperar contraseña
        </p>

        <div style={{
          background: 'rgba(245,237,216,0.06)',
          border: '1px solid rgba(245,237,216,0.15)',
          borderRadius: '24px', padding: '40px',
        }}>

          {/* Indicador de pasos */}
          <div style={{ display: 'flex', gap: '8px', marginBottom: '32px', justifyContent: 'center' }}>
            {[1, 2, 3].map(n => (
              <div key={n} style={{
                width: '32px', height: '4px', borderRadius: '2px',
                background: paso >= n ? '#C8842A' : 'rgba(245,237,216,0.2)',
              }} />
            ))}
          </div>

          {/* Paso 1 — Correo */}
          {paso === 1 && (
            <>
              <p style={{ fontSize: '11px', letterSpacing: '2px', textTransform: 'uppercase', color: '#C8842A', marginBottom: '8px' }}>
                Paso 1 de 3
              </p>
              <h2 style={{ fontSize: '24px', fontWeight: '700', color: '#f5edd8', marginBottom: '8px' }}>
                ¿Cuál es tu correo?
              </h2>
              <p style={{ fontSize: '14px', color: 'rgba(245,237,216,0.6)', marginBottom: '24px' }}>
                Te enviaremos un código de 6 dígitos para recuperar tu cuenta.
              </p>
              <input
                type="email"
                placeholder="tu@correo.com"
                value={email}
                onChange={e => setEmail(e.target.value)}
                onKeyDown={e => e.key === 'Enter' && handleEnviarCodigo()}
                style={inputStyle}
              />
              {mensaje && (
                <div style={{
                  background: mensaje.includes('Error') ? 'rgba(200,0,0,0.2)' : 'rgba(37,211,102,0.1)',
                  color: mensaje.includes('Error') ? '#ff6b6b' : '#25D366',
                  padding: '12px 16px', borderRadius: '12px', fontSize: '14px', marginBottom: '16px',
                }}>{mensaje}</div>
              )}
              <button onClick={handleEnviarCodigo} disabled={cargando} style={{
                width: '100%', background: '#C8842A', color: 'white',
                border: 'none', borderRadius: '100px', padding: '16px',
                fontSize: '16px', fontWeight: '600', cursor: 'pointer',
                marginBottom: '16px', opacity: cargando ? 0.7 : 1,
                fontFamily: '"Times New Roman", serif',
              }}>
                {cargando ? 'Enviando...' : 'Enviar código →'}
              </button>
            </>
          )}

          {/* Paso 2 — Código */}
          {paso === 2 && (
            <>
              <p style={{ fontSize: '11px', letterSpacing: '2px', textTransform: 'uppercase', color: '#C8842A', marginBottom: '8px' }}>
                Paso 2 de 3
              </p>
              <h2 style={{ fontSize: '24px', fontWeight: '700', color: '#f5edd8', marginBottom: '8px' }}>
                Ingresa el código
              </h2>
              <p style={{ fontSize: '14px', color: 'rgba(245,237,216,0.6)', marginBottom: '24px' }}>
                Enviamos un código de 6 dígitos a <strong style={{ color: '#C8842A' }}>{email}</strong>
              </p>
              <input
                type="text"
                placeholder="000000"
                value={codigo}
                onChange={e => setCodigo(e.target.value)}
                onKeyDown={e => e.key === 'Enter' && handleVerificarCodigo()}
                maxLength={6}
                style={{ ...inputStyle, textAlign: 'center', fontSize: '24px', letterSpacing: '8px' }}
              />
              {mensaje && (
                <div style={{
                  background: 'rgba(200,0,0,0.2)', color: '#ff6b6b',
                  padding: '12px 16px', borderRadius: '12px', fontSize: '14px', marginBottom: '16px',
                }}>{mensaje}</div>
              )}
              <button onClick={handleVerificarCodigo} disabled={cargando} style={{
                width: '100%', background: '#C8842A', color: 'white',
                border: 'none', borderRadius: '100px', padding: '16px',
                fontSize: '16px', fontWeight: '600', cursor: 'pointer',
                marginBottom: '16px', opacity: cargando ? 0.7 : 1,
                fontFamily: '"Times New Roman", serif',
              }}>
                {cargando ? 'Verificando...' : 'Verificar código →'}
              </button>
              <button onClick={() => { setPaso(1); setMensaje('') }} style={{
                width: '100%', background: 'transparent', color: 'rgba(245,237,216,0.5)',
                border: 'none', fontSize: '14px', cursor: 'pointer',
                fontFamily: '"Times New Roman", serif',
              }}>
                ← Volver
              </button>
            </>
          )}

          {/* Paso 3 — Nueva contraseña */}
          {paso === 3 && (
            <>
              <p style={{ fontSize: '11px', letterSpacing: '2px', textTransform: 'uppercase', color: '#C8842A', marginBottom: '8px' }}>
                Paso 3 de 3
              </p>
              <h2 style={{ fontSize: '24px', fontWeight: '700', color: '#f5edd8', marginBottom: '8px' }}>
                Nueva contraseña
              </h2>
              <p style={{ fontSize: '14px', color: 'rgba(245,237,216,0.6)', marginBottom: '24px' }}>
                Elige una contraseña segura de mínimo 6 caracteres.
              </p>
              <input
                type="password"
                placeholder="Nueva contraseña"
                value={password}
                onChange={e => setPassword(e.target.value)}
                style={inputStyle}
              />
              <input
                type="password"
                placeholder="Confirmar contraseña"
                value={confirmar}
                onChange={e => setConfirmar(e.target.value)}
                onKeyDown={e => e.key === 'Enter' && handleCambiarPassword()}
                style={{ ...inputStyle, marginBottom: '24px' }}
              />
              {mensaje && (
                <div style={{
                  background: 'rgba(200,0,0,0.2)', color: '#ff6b6b',
                  padding: '12px 16px', borderRadius: '12px', fontSize: '14px', marginBottom: '16px',
                }}>{mensaje}</div>
              )}
              <button onClick={handleCambiarPassword} disabled={cargando} style={{
                width: '100%', background: '#C8842A', color: 'white',
                border: 'none', borderRadius: '100px', padding: '16px',
                fontSize: '16px', fontWeight: '600', cursor: 'pointer',
                marginBottom: '16px', opacity: cargando ? 0.7 : 1,
                fontFamily: '"Times New Roman", serif',
              }}>
                {cargando ? 'Guardando...' : 'Cambiar contraseña →'}
              </button>
            </>
          )}

          {/* Paso 4 — Éxito */}
          {paso === 4 && (
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '64px', marginBottom: '24px' }}>✅</div>
              <h2 style={{ fontSize: '26px', fontWeight: '700', color: '#f5edd8', marginBottom: '12px' }}>
                ¡Contraseña actualizada!
              </h2>
              <p style={{ fontSize: '15px', color: 'rgba(245,237,216,0.6)', marginBottom: '32px' }}>
                Ya puedes entrar con tu nueva contraseña.
              </p>
              <a href="/login" style={{
                background: '#C8842A', color: 'white',
                padding: '16px 40px', borderRadius: '100px',
                textDecoration: 'none', fontSize: '16px', fontWeight: '700',
              }}>
                Iniciar sesión →
              </a>
            </div>
          )}

        </div>
      </div>
    </main>
  )
}