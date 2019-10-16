import React from 'react';
import './Presentation.css';

// Images
import Img1 from '../../assets/img/3.jpeg';
import Img2 from '../../assets/img/1.jpeg';

const Presentation = () => {
  return (
    <div className='grid-section-one'>
      <div className='p1'>
        <div className='p1-text'>
          <h2>One-on-One Personal Training</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
            numquam doloribus eius obcaecati molestias? Debitis assumenda porro,
            dignissimos officiis autem dolore, culpa nisi eos animi tempora
            sapiente est et quibusdam, aspernatur dolorem ut asperiores delectus
            aliquid quam libero error! Enim?{' '}
          </p>
        </div>

        <div className='p1-img'>
          <img src={Img1} alt='' className='img1' />
        </div>
      </div>
    </div>
  );
};

export default Presentation;
