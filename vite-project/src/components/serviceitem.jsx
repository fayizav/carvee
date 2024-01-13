import React from 'react'

function serviceitem({image,name,description}) {
  return (
    <div className='serviceitem'>
      <div className='imageservice'>
      <img src={image} alt={name} />
      </div>
        <h3>{name}</h3>
        <p>{description}</p>
    </div>
  )
}

export default serviceitem
