import { useEffect } from 'react'

const url = 'https://cdn.apicep.com/file/apicep/[CEP].json'

function App() {
  console.log('1) Montando componente...')

  useEffect(() => {
    console.log('3) Depois de montar!')
    async function getCep() {
      console.log('Buscando CEP...')
      const response = await fetch(url.replace('[CEP]', '06233-030'))
      const json = await response.json()
      console.log('CEP:', json)
    }

    getCep()
  })

  console.log('2) Componente pronto para montar')
  return (
    <>
      <button>Buscar CEP</button>
    </>
  )
}

export default App