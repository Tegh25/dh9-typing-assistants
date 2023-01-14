import React from "react";
import { useState } from "react";

const TextBox = () => {
    const [boxText, setBoxText] = useState('');

    const handleChange = (e) => {
  
        // Here we are checking if the length is equal to 10
        if(e.target.value.length===2){ 
            
        } else {
            setBoxText(e.target.value);
        }
    }

    return(
        <div>
            <h3>Type Something</h3>
            <textarea 
                value={boxText}
                onChange={handleChange}
                rows="4"
                cols="50" />
            <button onClick={boxText}>Add Text</button>
        </div>
    )
}

export default TextBox;