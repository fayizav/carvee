import React from 'react'
import { Link } from 'react-router-dom'

function MenuItem({ image,name ,linkTo }) {
    return (
        <div className='menuItem'>
            <div style={{ backgroundImage: `url(${image})` }}></div>
            <Link to={linkTo} className='link'>
            <h5>{name}</h5>
            </Link>
            

        </div>
    )
}

export default MenuItem