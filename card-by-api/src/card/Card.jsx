import React from 'react'
import "./card.css"
function Card(props) {
    return (
        <div className='card'>
            <img src={props.photo} alt="Avatar"></img>
            <div className="container">
            <p className='id'>Id: {props.compelete}</p>
                <h3><p>Title: {props.title}</p></h3>
                <p>Content: {props.content}</p>
                
            </div>
        </div>
  
  )
}

export default Card
