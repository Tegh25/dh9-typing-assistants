import React from "react";
import { useState } from "react";
import FuzzySearchResults from "./FuzzySearchResults";

const TextBox = () => {
    const [boxOneText, setBoxOneText] = useState('');
    const [boxTwoText, setBoxTwoText] = useState('');
    const [boxThreeText, setBoxThreeText] = useState('');
    const [allText, setAllText] = useState(boxOneText);
    const [inputtedText, setInputtedText] = useState('');

    const optionsOne = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    const optionsTwo = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    const optionsThree = ['.', ',', '?', '!', ':', ';', "'", '"', '@', '&', '$', '%', '(', ')', '[', ']', '{', '}', '_', '/', '#', '*', '+', '-', '=', '<', '>', '^', '\\', '`', '|', '~'];

    const onOptionChangeHandlerOne = (event) => {
        setBoxOneText(event.target.value);
    }

    const onOptionChangeHandlerTwo = (event) => {
        setBoxTwoText(event.target.value);
    }

    const onOptionChangeHandlerThree = (event) => {
        setBoxThreeText(event.target.value);
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
        if (allText.length > 0) {
            setAllText(allText.slice(0, allText.length-1));
        }
    }

    const addInputtedText = () => {
        setInputtedText(inputtedText + allText);
        setAllText('');
    }

    return(
        <>
        <div>
            <h3>Letters</h3>
            <select onChange={onOptionChangeHandlerOne}>
                
                {optionsOne.map((option, index) => {
                    return <option key={index} >
                        {option}
                    </option>
                })}
            </select>
            <button onClick={addOne}>Add Text</button>
        </div>
        <div>
            <h3>Numbers</h3>
            <select onChange={onOptionChangeHandlerTwo}>
                
                {optionsTwo.map((option, index) => {
                    return <option key={index} >
                        {option}
                    </option>
                })}
            </select>
            <button onClick={addTwo}>Add Text</button>
        </div>
        <div>
            <h3>Special Characters</h3>
            <select onChange={onOptionChangeHandlerThree}>
                
                {optionsThree.map((option, index) => {
                    return <option key={index} >
                        {option}
                    </option>
                })}
            </select>
            <button onClick={addThree}>Add Text</button>
        </div>
        <div>
            <h3>{allText}</h3>
        </div>
        <div>
            <button onClick={deleteChar}>Delete</button>
        </div>
        <div>
            <button onClick={addInputtedText}>Add Text</button>
        </div>
        <div>
            <textarea>{inputtedText}</textarea>
        </div>
        </>

        /*
        <div>

        <textarea
            className='html-editor'  
            ref='myTextarea' 
            value = {this.state.textareaVal}
            onChange={(event)=>{
                    this.setState({
                        textareaVal:event.target.value
                    });
                }}
        >
        </textarea>

        </div>
        */
    )
}

export default TextBox;