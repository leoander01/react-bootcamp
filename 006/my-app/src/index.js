import ReactDOM from 'react-dom'

function Title ({ text }) {
  console.log('props:', text)
  return (
    <>
      <h1 className='class-css'>{text}</h1>
      <label htmlFor=''></label>
      <label tabIndex='1'></label>
    </>
  )
}

ReactDOM.render(
  <Title text='Neves' />,
  document.querySelector('#root')
)