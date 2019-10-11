import React from 'react';
import './Navbar.css';
import Logo from '../../assets/img/muscle.svg';

const Navbar = () => {
  return (
    <div className='navbar-container'>
      <div className='navbar-logo'>
        <img src={Logo} />
      </div>
      <div className='navbar-options-container'>
        <div className='Home'>HOME</div>
        <div className='about'>ABOUT</div>
        <div className='contact'>CONTACT</div>
      </div>
    </div>
  );
};

export default Navbar;
