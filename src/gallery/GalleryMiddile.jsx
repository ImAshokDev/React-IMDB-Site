import React from "react";
import "./GalleryMiddile.scss";
import img1 from "./images/01.jpg";
import img2 from "./images/02.jpg";
import img3 from "./images/03.jpg";
import img4 from "./images/04.jpg";
import img5 from "./images/05.jpg";
import img6 from "./images/06.jpg";
import img7 from "./images/07.jpg";
import img8 from "./images/08.jpg";
import img9 from "./images/09.jpg";
import img10 from "./images/10.jpg";

const GalleryMiddile = () => (
  <div className="gallery-middile">
    <GalleryHeader />
    <GalleryBlock />
    <div>
      <h2>see more</h2>
    </div>
  </div>
);

const GalleryHeader = () => (
  <div className="gallery-header">
    <ul>
      <li>
        <h6>now playing</h6>
      </li>
      <li>
        <i className="fas fa-circle" />
      </li>
      <li>
        <p>box office</p>
      </li>
    </ul>
  </div>
);
const GalleryBlock = () => (
  <div className="gallery-block">
    <Img image={img1} name="fantastic four" price="$25.7M" />
    <Img image={img2} name="the man from u.n.c.l.e." price="$28.5M" />
    <Img image={img3} name="shaun the sheep movie" price="$11.2M" />
    <Img image={img4} name="the gift" price="$13.2M" />
    <Img image={img5} name="mission: impossible 5" price="$17.7M" />
    <Img image={img6} name="hotel transylvania 2" price="$33.2M" />
    <Img image={img7} name="sicario" price="$12.1M" />
    <Img image={img8} name="shaun the sheep movie" price="$11.2M" />
    <Img image={img9} name="the score trials" price="$7.8M" />
    <Img image={img10} name="everest" price="$33.31M" />
  </div>
);
const Img = ({ image, name, price }) => (
  <div className="img">
    <img src={image} alt="" />
    <h3>{name}</h3>
    <p>{price}</p>
  </div>
);
export default GalleryMiddile;
