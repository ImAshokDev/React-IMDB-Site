import React from 'react';
import './SliderMiddile.scss';
import img1 from './images/01.jpg';
import img2 from './images/02.jpg';
import img3 from './images/03.jpg';
import img4 from './images/04.jpg';
import img5 from './images/05.jpg';
import img6 from './images/06.jpg';
import img7 from './images/07.jpg';

const SliderMiddile = () => (
  <div className="slider-middile">
    <div className="picks">
      <i id="i1" className="fas fa-chevron-left" />
      <Img image={img1} name="natalia tena" age="(30)" />
      <Img image={img2} name="toni collette" age="(42)" />
      <Img image={img3} name="aishwarya rai" age="(50)" />
      <Img image={img4} name="penn badgley" age="(30)" />
      <Img image={img5} name="jenny" age="(40)" />
      <Img image={img6} name="chad lindberg" age="(53)" />
      <Img image={img7} name="logan" age="(54)" />
      <i id="i2" className="fas fa-chevron-right" />
    </div>
  </div>
);

const Img = ({ image, name, age }) => (
  <div className="img">
    <img src={image} alt="" />
    <h4>{name}</h4>
    <p>{age}</p>
  </div>
);
export default SliderMiddile;
