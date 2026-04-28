export default function Home() {
  return (
    <main style={{
      minHeight: '100vh',
      background: '#FDFAF4',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'Georgia, serif',
    }}>
      <h1 style={{
        fontSize: '72px',
        fontWeight: '900',
        color: '#2C1A0E',
        letterSpacing: '-2px',
        margin: 0,
      }}>
        RAÍ<span style={{ color: '#C8842A' }}>Z</span>
      </h1>
      <p style={{
        fontSize: '18px',
        color: '#8A7A6A',
        marginTop: '16px',
      }}>
        Del campo colombiano, directo a ti.
      </p>
    </main>
  )
}