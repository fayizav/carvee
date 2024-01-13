import React from 'react'
import BannerImage from "../assets/BannerImage.jpg"

import '../styles/home.css'

function home() {
    return (
        <>
        <div className='home' style={{ backgroundImage: `url(${BannerImage})` }}>
            <div className='homeContainer'>
                <h2>CARVE ARCHITECTS</h2>
                <p>BUILD YOUR DREAMS WITH ART AND CRAFT .</p>
            </div>
            
        </div >
        <div className='h-48 w-48 bg-blue-500'>
        <h2>hyyyyyyyyyy</h2>
    </div>
    </>
    )
}

export default home
