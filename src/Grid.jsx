import React from 'react';
import './Grid.scss';

const Grid = ({ pixels }) => (
  <div className="grid-section" style={{ height: pixels }}>
    <First />
    <Middile />
    <Last />
  </div>
);

const First = () => <div className="first-block" />;
const Middile = () => (
  <div className="middile-block">
    <div className="middile-left">
      <Rate1 />
      <Rate2 />
      <Rate3 />
      <Rate4 />
    </div>
    <div className="middile-right">
      <p>sdf</p>
    </div>
  </div>
);

const Rate1 = () => (
  <div className="rate1">
    <h2>
      MAD MAX: FURY ROAD
      <span>(2015)</span>
    </h2>
    <ul>
      <li>
        <h6>R</h6>
      </li>
      <li>
        <i className="fas fa-circle" />
      </li>
      <li>
        <h6>120 min</h6>
      </li>
      <li>
        <i className="fas fa-circle" />
      </li>
      <li>Action,</li>
      <li>Adventure,</li>
      <li>Sci-Fi</li>
      <li>
        <span>15 May 2015 (USA)</span>
      </li>
    </ul>
  </div>
);
const Rate2 = () => (
  <div className="rate2">
    <p>1</p>
  </div>
);
const Rate3 = () => (
  <div className="rate3">
    <div className="left">
      <i className="fas fa-circle-notch" />
      <div>
        <h1>8.7</h1>
      </div>
    </div>
    <div className="right">
      <div className="first">
        <p>
          <big> Your rating:</big>
          <span>
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
          </span>
          <small>
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <b>6</b>
            <big>/10</big>
          </small>
        </p>
      </div>
      <div className="second">
        <p>
          <small> Ratings:</small>
          <span>8.7/</span>
          <b>10</b>
          <small> from</small>
          <span>137,182users</span>
          <small> Metascore:</small>
          <span>89/100</span>
        </p>
      </div>
      <div className="third">
        <ul>
          <li>
            <p>Reviews:</p>
          </li>
          <li>
            <b>697user</b>
          </li>
          <li>
            <div>
              <i className="fas fa-circle" />
            </div>
          </li>
          <li>
            <b>502critic</b>
          </li>
          <li>
            <div>
              <i className="fas fa-circle" />
            </div>
          </li>
          <li>
            <b>46</b>
          </li>
          <li>
            <p>from</p>
          </li>
          <li>
            <b>Metacritic.com</b>
          </li>
        </ul>
      </div>
    </div>
  </div>
);
const Rate4 = () => (
  <div className="rate4">
    <h3>Summary</h3>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex tempora cumque
      veritatis architecto quasi magnam officiis, voluptates recusandae commodi
      vero tempore repellat? Atque dolorum unde inventore recusandae? At, neque
      quisquam!
    </p>
    <div className="profile">
      <p>Director:</p>
      <span>George Miller</span>
      <div>
        <i className="fas fa-circle" />
      </div>
      <p>Writers</p>
      <span>George Miller, Brendan McCarthy, Nick Lathouris</span>
      <div>
        <i className="fas fa-circle" />
      </div>
      <p>Stars:</p>
      <Image />
    </div>
  </div>
);

const Image = () => (
  <div className="image">
    <div className="img1" />
    <div className="img2" />
    <div className="img3" />
    <div className="img4" />
    <div className="img5" />
  </div>
);
const Last = () => <div className="last-block" />;

export default Grid;
