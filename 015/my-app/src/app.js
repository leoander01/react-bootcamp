const url = 'https://cdn.apicep.com/file/apicep/[CEP].json'

function App() {
  async function handleClick() {
    console.log('Buscando CEP...')
    const response = await fetch(url.replace('[CEP]', '06233-030'))
    const json = await response.json()
    console.log('CEP:', json)
  }

  return (
    <>
      <button onClick={handleClick}>Buscar CEP</button>
    </>
  )
}

export default App