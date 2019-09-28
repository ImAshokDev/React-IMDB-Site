import React from 'react';
import './PicksImg.scss';
import img1 from './images/01.jpg';
import img2 from './images/02.jpg';
import img3 from './images/03.jpg';
import img4 from './images/04.jpg';
import img5 from './images/05.jpg';
import img6 from './images/06.jpg';

const PicksImg = () => (
  <div className="picks-block">
    <Img image={img1} />
    <Img image={img2} />
    <Img image={img3} />
    <Img image={img4} />
    <Img image={img5} />
    <Img image={img6} />
  </div>
);
const Img = ({ image }) => (
  <div className="img">
    <img src={image} alt="" />
  </div>
);
export default PicksImg;
