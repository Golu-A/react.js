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

    // setCounter(counter +1)

    setCounter(prevCounter => prevCounter +1)
    setCounter(prevCounter => prevCounter +1)
    setCounter(prevCounter => prevCounter +1)
    setCounter(prevCounter => prevCounter +1)
  }
  
  const removeValue = () => {
    // console.log('remove');
    setCounter(counter - 1)
  }

//   let content;

//   if(counter > 50){
//     console.log("number is gtreater than 50");
//   }
//   else if(counter < 0){
//     console.log('number is less than 0');
//   }
//   return (
//     <>
//       <h1>Chai aur react</h1>
//       <h2>Counter Value: {counter} </h2>

//       <button onClick={addValue}>Add Value {counter} </button>
//       <br />
//       <button onClick={removeValue}>
//       Remove Value {counter} </button>
//       <p>footer: {counter} </p>
//     </>
//   )
// }


let content;

if (counter >= 0 && counter <= 50) {
  content = (
    <>
      <h2>Counter Value: {counter}</h2>
      <button onClick={addValue}>Add Value {counter}</button>
      <br />
      <button onClick={removeValue}>Remove Value {counter}</button>
    </>
  );
} 
else if (counter > 50) {
  content = <p>Counter is greater than 50</p>;
} else {
  content = <p>Counter is less than 0</p>;
}

return (
  <>
    <h1>Chai aur react</h1>
    {content}
    <p>footer: {counter}</p>
  </>
);
}

export default App
