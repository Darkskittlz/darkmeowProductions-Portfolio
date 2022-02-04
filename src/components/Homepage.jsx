import React from 'react'
import HomeElement from '../constants/homeElement'
import '../App.css'



const Homepage = () => {
    return (
        <div id='homeBody'>
                <div id='homeCard'>
                <HomeElement />
                    <h1 id='homeTitle'>Welcome to the Dev Shop</h1>
                </div>
        </div>
    )
}

export default Homepage
