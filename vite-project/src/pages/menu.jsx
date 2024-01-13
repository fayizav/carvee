import React from 'react';
import { menulist } from '../helpers/menulist';
import { Link } from 'react-router-dom';
import MenuItem from '../components/menuitem';
import '../styles/menu.css';

function Menu() {
  return (
    <div className='menu'>
      <h1 className='menuTitle'>OUR PROJECTS</h1>
      <div className='menuList'>
        {menulist.map((menuitem, key) => (
          <MenuItem key={key} image={menuitem.image} name={menuitem.name} linkTo={menuitem.linkTo} />
        ))}
      </div>
      <div className='showmore'>
        <Link to='/showmore' className='showmorelink'>Showmore...</Link>
      </div>
    </div>
  );
}

export default Menu;
