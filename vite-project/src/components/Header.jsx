import React from 'react'
import { Link } from "react-router-dom"
import Logo from "../assets/CarveNew.jpg"
import '../styles/header.css'

function header() {
    return (
        <div className='header'>
            <div className='leftside'>
                <img src={Logo} />

            </div>


            <div className='rightside'>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/contact">Contact</Link>


            </div>


        </div>
    )
}

export default header
