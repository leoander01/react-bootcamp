import { useState } from 'react'

function App() {
  const [inputValue, setInputValue] = useState('')
  console.log('inputValue (estado):', inputValue)

  function handleChange(e) {
    console.log('inputValue', e.target.value)
    setInputValue(e.target.value)
  }

  return (
    <form>
      <input value={inputValue} onChange={handleChange} />
      <button type="submit">Enviar</button>
    </form>
  )
}

export default App