import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <div className='header'>
      <div className='grid-container'>
        <div className='grid-item'>
          <p className='intro-heading-lets'>LETS</p>
        </div>
        <div className='grid-item'>
          <p className='intro-heading'></p>
        </div>
        <div className='grid-item'>
          <p className='intro-heading'></p>
        </div>
        <div className='grid-item'>
          <p className='intro-heading'></p>
        </div>
        <div className='grid-item'>
          <p className='intro-heading-do'>DO</p>
        </div>
        <div className='grid-item'>
          <p className='intro-heading'></p>
        </div>
        <div className='grid-item'>
          <p className='intro-heading'></p>
        </div>
        <div className='grid-item'>
          <p className='intro-heading'></p>
        </div>
        <div className='grid-item'>
          <p className='intro-heading-this'>THIS</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
