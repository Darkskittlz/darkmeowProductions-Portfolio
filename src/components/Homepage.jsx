import React, { useEffect} from 'react'
import homeElement from '../constants/homeElement.js'
import '../App.css'



const Homepage = (props) => {

    useEffect(() => {
        homeElement();
    }, []);

    // console.log("the visits are at: ", visitCount)

    return (
        <>
            <div id='homeBody'>
                <div id='homeCard'>
                    <div id="canvas"></div>
                    <h1 className='homeTitle'>Welcome to the Dev Shop</h1>
                </div>
            </div>
        </>
    )
};

export default Homepage