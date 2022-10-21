import { useState } from 'react'

function App() {
  const [counter, setCounter] = useState(0)

  return (
    <>
      <Title>{counter}</Title>
      <Button setCounter={setCounter} />
    </>
  )
}

function Title({ children }) {
  return <h1>{children}</h1>
}

function Button({ setCounter }) {
  function increment() {
    setCounter((prevState) => prevState + 1)
  }

  function decrement() {
    setCounter((prevState) => prevState - 1)
  }

  return (
    <>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </>
  )
}

export default App