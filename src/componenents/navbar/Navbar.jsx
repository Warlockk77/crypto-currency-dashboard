import React from 'react';
import Logo from '../../assets/O4NR.gif';
import './navbar.css';


const Navbar = () => {
  return (
    <nav className='nav-div'>
     
      
     <img src={Logo} alt="logo" />
     <h3>CRYPTOCURRENCY DASHBOARD</h3>
     

    </nav>
  )
}

export default Navbar; 