import React from "react";
import { useState } from "react";

const TextBox = () => {
    //const [boxText] = useState('');
    
    
    const [boxText, setBoxText] = useState('');
    const [allText, setAllText] = useState(boxText);

    const handleChange = (e) => {
  
        // Here we are checking if the length is equal to 10
        if(e.target.value.length===2){ 
            
        } else {
            setBoxText(e.target.value);
        }
    }
    
    const addText = () => {
        setAllText(allText + boxText);
        setBoxText('');
    }

    const deleteChar = () => {
        setAllText(allText.slice(0, allText.length-1));
    }

    return(
        <>
        <div>
            <h3>Type Something</h3>
            <input 
                value={boxText}
                onChange={handleChange}
                rows="4"
                cols="50" />
            <button onClick={addText}>Add Text</button>
        </div>
        <div>
            <h3>{allText}</h3>
        </div>
        <div>
            <button onClick={deleteChar}>Delete</button>
        </div>
        </>
    )
    
    
    /*
    const extractText = () => {
        return 
    }

    return(
        <div className="App">
            <form>
            <label >Char: </label>
            <input name="name" type="text" maxLength={1} />
            <button onClick={extractText}>Add</button>
            </form>
        </div>
    )
    */
}

export default TextBox;