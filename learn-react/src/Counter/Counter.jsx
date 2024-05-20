import React from 'react'
import { useState } from 'react'
import './CounterCSS.css'

function Counter() {
    const [count, setCount] = useState(0);
  return (
    <div>
       <div className="button">
        <button style={{border: "2px solid black" ,backgroundColor: "rgb(207, 46, 194)",color:"white"}} onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        </div>
    </div>
  )
}

export default Counter
