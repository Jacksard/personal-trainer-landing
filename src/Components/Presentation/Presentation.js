import React from 'react';
import './Presentation.css';

// Images
import Img1 from '../../assets/img/3.jpeg';

const Presentation = () => {
  return (
    <div className='grid-section-one'>
      <div className='item'>
        <h2>One-on-One Personal Training</h2>
      </div>
      <div className='item'>
        <img src={Img1} className='img1' alt='' />
      </div>
      <div className='item'>3</div>
      <div className='item'>4</div>
    </div>
  );
};

export default Presentation;
