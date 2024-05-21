import { useState } from 'react'
import { useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0);


 
  useEffect(() => {
    console.log(mystyle.display);
    
   
  }, [count])
  

  return (
    <>
     
   
     
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p style={mystyle}>hello</p>
        
    </>
  )
}
const mystyle={
  display:"block",
}

export default App
