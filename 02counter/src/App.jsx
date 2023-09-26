import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
let [counter, setCounter] = useState(15)

  // let counter = 5
  const addValue = ()=>{
    // console.log('Clicked', Math.random());
    // console.log('Clicked', counter);
    // counter = counter +1
    // setCounter(counter)

    setCounter(counter +1)
  }

  const removeValue = () => {
    // console.log('remove');
    setCounter(counter - 1)
  }
  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter Value: {counter} </h2>

      <button onClick={addValue}>Add Value {counter} </button>
      <br />
      <button onClick={removeValue}>
      Remove Value {counter} </button>
      <p>footer: {counter} </p>
    </>
  )
}

export default App
