import React from 'react'

function founderitem({ image, name, position }) {
    console.log(name, "kakkkaaaaa");
    return (
        <div className='founderItem'>
            <div style={{ backgroundImage: `url(${image})` }}></div>
            <h1>{name}</h1>
            <p>{position}</p>

        </div>
    )
}

export default founderitem

