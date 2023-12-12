import { useState } from "react"


function App() {
  const [color, setColor]= useState('olive')

  return (
    <div className="w-full h-screen duration-200"
    style={{backgroundColor: color}}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-2 shadow-lg bg-white rounded-3xl py-2 px-2">
          <button className="outline-none px-4 rounded-full py-2 text-white shadow-xl"
          style={{backgroundColor: 'red'}} onClick={()=> setColor('red')}>Red</button>
          <button className="outline-none px-4 rounded-full py-2 text-white shadow-xl"
          style={{backgroundColor: 'Green'}} onClick={()=> setColor('Green')}>Green</button>

          <button className="outline-none px-4 rounded-full py-2 text-white shadow-xl"
          style={{backgroundColor: 'Blue'}} onClick={()=> setColor('Blue')}>Blue</button>

          <button className="outline-none px-4 rounded-full py-2 text-white shadow-xl"
          style={{backgroundColor: 'Black'}} onClick={()=> setColor('Black')}>Black</button>
          <button className="outline-none px-4 rounded-full py-2 text-black shadow-xl"
          style={{backgroundColor: 'yellow'}} onClick={()=> setColor('yellow')}>Yellow</button>
          <button className="outline-none px-4 rounded-full py-2 text-black shadow-xl"
          style={{backgroundColor: 'Pink'}} onClick={()=> setColor('Pink')}>Pink</button>
          <button className="outline-none px-4 rounded-full py-2 text-white shadow-xl"
          style={{backgroundColor: '#800020'}} onClick={()=> setColor('#800020')}>Burgundy</button>
          <button className="outline-none px-4 rounded-full py-2 text-black shadow-xl"
          style={{backgroundColor: 'grey'}} onClick={()=> setColor('grey')}>Grey</button>
          <button className="outline-none px-4 rounded-full py-2 text-black shadow-xl"
          style={{backgroundColor: 'white'}} onClick={()=> setColor('white')}>White</button>
          <button className="outline-none px-4 rounded-full py-2 text-black shadow-xl"
          style={{backgroundColor: '#E6E6FA'}} onClick={()=> setColor('#E6E6FA')}>Lavender</button>
        </div>
      </div>
          {/* <button className="outline-none px-12 rounded-full py-12 text-white shadow-xl flex justify-center"
          style={{backgroundColor: 'olive'}} onClick={()=> setColor('olive')}>Main</button> */}
    </div>
  )
}

export default App
