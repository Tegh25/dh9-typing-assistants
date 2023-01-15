import React from 'react';
import TextBox from '../components/TextBox'; 
import '../App.css'; 


const HomePage = () => {

    return(
        <> 
        <div><h1 class="logo">Typing Assistant</h1> </div>
        <div className='system'>
            <TextBox />
        </div>  
        </>
    );
}

export default HomePage;