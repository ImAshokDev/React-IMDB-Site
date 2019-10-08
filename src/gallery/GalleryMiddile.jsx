import React from "react";
import "./GalleryMiddile.scss";
import {
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9,
  img10
} from "./images";

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
