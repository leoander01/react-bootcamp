function App () {
  return (
    <>
      <Title>Título</Title>
      <Sidebar />
      
      <Content />
    </>
  )
}

function Title ({ children }) {
  return (
    <h1>{children}</h1>
  )
}

function Sidebar() {
  return (
    <aside>
      <h2>Sidebar</h2>
    </aside>
  )
}

function Content () {
  return (
    <section>
      <h2>Conteúdo</h2>
      <p>Parágrafo</p>
    </section>
  )
}

export default App