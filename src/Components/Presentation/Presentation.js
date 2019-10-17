import React from 'react';
import './Presentation.css';

// Images
import Img1 from '../../assets/img/3.jpeg';
import Img2 from '../../assets/img/5.jpeg';

const Presentation = () => {
  return (
    <div className='grid-section-one'>
      {/* p1 */}
      <div className='p1'>
        <div className='p1-desc'>
          <p className='p1-title'>One-on-One Personal Training</p>
          <p className='p1-text'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
            numquam doloribus eius obcaecati molestias? Debitis assumenda porro,
            dignissimos officiis autem dolore, culpa nisi eos animi tempora
            sapiente est et quibusdam{' '}
          </p>
        </div>
        <div className='p1-img'>
          <img src={Img1} alt='' className='img1' />
        </div>
      </div>
      {/* p2 */}
      <div className='p2'>
        <div className='p2-img'>
          <img src={Img2} alt='' className='img2' />
        </div>
        <div className='p2-desc'>
          <p className='p2-title'>One-on-One Personal Training</p>
          <p className='p2-text'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
            numquam doloribus eius obcaecati molestias? Debitis assumenda porro,
            dignissimos officiis autem dolore, culpa nisi eos animi tempora
            sapiente est et quibusdam{' '}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Presentation;
