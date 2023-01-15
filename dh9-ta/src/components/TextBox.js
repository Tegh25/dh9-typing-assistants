import React from "react";
import { useState } from "react";
import OutputBox from "./OutputBox";

const TextBox = () => {
    
    const [boxOneText, setBoxOneText] = useState('');
    const [boxTwoText, setBoxTwoText] = useState('');
    const [boxThreeText, setBoxThreeText] = useState('');
    const [allText, setAllText] = useState(boxOneText);

    const handleChangeOne = (e) => {
  
        // Here we are checking if the length is equal to 1
        if(e.target.value.length===2){ 
            
        } else {
            setBoxOneText(e.target.value);
        }
    }

    const handleChangeTwo = (e) => {
  
        // Here we are checking if the length is equal to 1
        if(e.target.value.length===2){ 
            
        } else {
            setBoxTwoText(e.target.value);
        }
    }

    const handleChangeThree = (e) => {
  
        // Here we are checking if the length is equal to 1
        if(e.target.value.length===2){ 
            
        } else {
            setBoxThreeText(e.target.value);
        }
    }
    
    const addOne = () => {
        setAllText(allText + boxOneText);
        setBoxOneText('');
    }

    const addTwo = () => {
        setAllText(allText + boxTwoText);
        setBoxTwoText('');
    }

    const addThree = () => {
        setAllText(allText + boxThreeText);
        setBoxThreeText('');
    }

    const deleteChar = () => {
        setAllText(allText.slice(0, allText.length-1));
    }

    return(
        <>
        <div>
            <h3>Letters</h3>
            <input 
                value={boxOneText}
                onChange={handleChangeOne}
                rows="4"
                cols="50" />
            <button onClick={addOne}>Add Text</button>
        </div>
        <div>
            <h3>Numbers</h3>
            <input 
                value={boxTwoText}
                onChange={handleChangeTwo}
                rows="4"
                cols="50" />
            <button onClick={addTwo}>Add Text</button>
        </div>
        <div>
            <h3>Special Characters</h3>
            <input 
                value={boxThreeText}
                onChange={handleChangeThree}
                rows="4"
                cols="50" />
            <button onClick={addThree}>Add Text</button>
        </div>
        <div>
            <h3>{allText}</h3>
        </div>
        <div>
            <button onClick={deleteChar}>Delete</button>
        </div>
        </>
    )
}

export default TextBox;