import { useState } from "react"

function App() {
  const [color, setColor] = useState("Smokewhite")
  
  return (
    <>
     <div className="w-full h-screen duration-200"
     style={{backgroundColor: color}}>
      <div className="fixed flex flex-wrap justify-center bottom-16 inset-x-0 px-2">
        <div className="flex flex-wrap align-center gap-2 shadow-lg bg-white border px-2 py-3 rounded-lg">
          <button onClick={() => setColor("red") } className="outline-none px-4 rounded-full py-1 shadow-xl text-white" style={{backgroundColor: "Red"}}>Red</button>
          <button onClick={() => setColor("blue") } className="outline-none px-4 rounded-full py-1 shadow-xl text-white" style={{backgroundColor: "Blue"}}>Blue</button>
          <button onClick={() => setColor("green") } className="outline-none px-4 rounded-full py-1 shadow-xl text-white" style={{backgroundColor: "Green"}}>Green</button>
          <button onClick={() => setColor("black") } className="outline-none px-4 rounded-full py-1 shadow-xl text-white" style={{backgroundColor: "Black"}}>Black</button>
          <button onClick={() => setColor("orange") } className="outline-none px-4 rounded-full py-1 shadow-xl text-white" style={{backgroundColor: "orange"}}>Orange</button>
          <button onClick={() => setColor("Purple") } className="outline-none px-4 rounded-full py-1 shadow-xl text-white" style={{backgroundColor: "Purple"}}>Puple</button>
          <button onClick={() => setColor("olive") } className="outline-none px-4 rounded-full py-1 shadow-xl text-white" style={{backgroundColor: "olive"}}>Olive</button>
          <button onClick={() => setColor("skyblue") } className="outline-none px-4 rounded-full py-1 shadow-xl text-white" style={{backgroundColor: "Skyblue"}}>Skyblue</button>
          
          </div>
      </div>
     </div>
    </>
  )
}

export default App
