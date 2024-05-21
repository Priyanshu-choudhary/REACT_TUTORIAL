import React, { useState } from 'react'

function Game() {
  return (
    <div className='maindiv'>
      <div className='board-row'>
      <Square/>
      <Square/>
      <Square/>
      </div>
      
      <div className='board-row'>
      <Square/>
      <Square/>
      <Square/>
      </div>

      <div className='board-row'>
      <Square/>
      <Square/>
      <Square/>
      </div>
    </div>
  )
}

function Square(props) {
  const  [value,setVAlue]=useState(null);

  function handleClick() {
    setVAlue('X');
  }


  return(<>
   <button className="square" onClick={handleClick}>{value}</button>
  
  </>)
}



export default Game
