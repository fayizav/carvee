import React from 'react';

function ShowmoreItem({ image, name, description }) {
  return (
    <div className='showmoreitem'>
      <div className='imageshowmore'>
        <img src={image} alt={name} />
      </div>
      <h3>{name}</h3>
      <p>{description}</p>
    </div>
  );
}

export default ShowmoreItem;
