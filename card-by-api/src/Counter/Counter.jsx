import React from 'react'
import { useState } from 'react'
import './CounterCSS.css'


function Counter() {
    const [count, setCount] = useState(0);
    const [show, setShow] = useState(true);
    const [msg, setMsg] = useState("hide");
    function handleClick() {
      if (show) {
      setShow(false);
      setMsg("show");
      }else{
        setShow(true)
        setMsg("hide");
      }
    }
   
  return (
    <div>
       <div className="button">
       <button style={{border: "2px solid black" ,backgroundColor: "rgb(252, 150, 150)",color:"white"}} onClick={handleClick}>{msg} </button>
        <button style={{border: "2px solid black" ,backgroundColor: "rgb(252, 150, 150)",color:"white"}} onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        {show && <h3>Hello!</h3>}
        </div>
    </div>
  )
}

export default Counter
