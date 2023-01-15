import React from "react";
  
const Dropdown = () => {
    const options = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

    const onOptionChangeHandler = (event) => {
        console.log("User Selected Value - ", event.target.value)
    }

    return (
        <>
           <select onChange={onOptionChangeHandler}>
                
                {options.map((option, index) => {
                    return <option key={index} >
                        {option}
                    </option>
                })}
            </select>
        </>
    );
};
  
export default Dropdown;