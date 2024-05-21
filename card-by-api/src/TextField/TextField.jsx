import React, { useState } from 'react';
import "./TextField.css";
const TextField = () => {
  // State to hold the value of the text field
  const [textFieldValue, setTextFieldValue] = useState('');
  const [textFieldValue2, setTextFieldValue2] = useState('Add some description');
  const [count, setCount] = useState(0);

  // Event handler for text field changes
  const handleTextFieldChange = (event) => {
    // Update the state with the new value of the text field
    setTextFieldValue(event.target.value);
  };
  const handleTextFieldChange2 = (event) => {
    // Update the state with the new value of the text field
    setTextFieldValue2(event.target.value);
  };

  return (
    <>
    <div className='form'>
      {/* Text field component */}
      <p style={{color:"#fc9696"}}>Enter title</p>
      <input
        type="text"
        value={textFieldValue}
        onChange={handleTextFieldChange}
      />
      {/* Display the value of the text field */}
      
       <textarea
        type="text"
        value={textFieldValue2}
        onChange={handleTextFieldChange2}
      />
      {/* Display the value of the text field */}
      
   
    </div>
    <div>
    <button style={{border: "2px solid black" ,backgroundColor: "#fc9696",color:"white",marginTop:"10px",   fontSize: "25px", borderRadius: 5px;}} >
   Post
        </button>
    </div>
  </>
  );
};

export default TextField;
