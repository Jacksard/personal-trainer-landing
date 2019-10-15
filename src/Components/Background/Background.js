import React from 'react';
import Video from '../../assets/video/default1.mp4';
import './Background.css';

const Background = () => {
  return (
    <div className='video'>
      <video id='background-video' playsInline muted autoPlay>
        <source src={Video} type='video/mp4' />
      </video>
    </div>
  );
};

export default Background;

{
  /* <video id='background-video' playsInline muted autoPlay>
        <source src={Video} type='video/mp4' />
      </video>; */
}
