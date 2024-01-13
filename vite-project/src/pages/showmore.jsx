import React from 'react';
import { showmorelist } from '../helpers/showmorelist';

import ShowmoreItem from '../components/showmoreitem';
import '../styles/showmore.css';

function Showmore() {
  return (
    <div className='showmore'>
      <h1 className='showmoreTitle'>OUR PROJECTS</h1>
      <div className='showmoreList'>
        {showmorelist.map((showmoreitem, key) => (
          <ShowmoreItem key={key} image={showmoreitem.image}   />

        ))}
      </div>
      
    </div>
  );
}

export default Showmore;

