import React from 'react'
import { Link } from 'react-router-dom';
import { fire } from '../conf/firebase';

const Navbar = () => {
  const handleLogout = () => {
    fire.auth().signOut();
  };

  return (
    <nav className='navbar'>
      <ul className='nav-items'>
        <li><Link to='/'>Pokedex</Link></li>
        <li><Link to='/search' className='searchIcon'> search..<i className="material-icons md-48">search</i></Link></li>
      </ul>
      <button className='btn-logout' onClick={handleLogout}>
        Logout
      </button>
    </nav>
  );
};

export default Navbar;