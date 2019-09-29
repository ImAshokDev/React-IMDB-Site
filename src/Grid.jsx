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
          Your rating:
          <span>
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
          </span>
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star">
            <small>
              <h3>6</h3>
              /10
            </small>
          </i>
        </p>
      </div>
      <div>
        <p>
          Ratings:
          <span>8.7/</span>
          <small>10</small>
          from
          <span>137,182 users</span>
          Metascore:
          <span>89/100</span>
        </p>
      </div>
      <div>
        <p>
          Reviews:
          <span>
            697 user
            <i className="fas fa-circle" />
            502 critic
            <i className="fas fa-circle" />
            46
          </span>
          from
          <span>Metacritic.com</span>
        </p>
      </div>
    </div>
  </div>
);
const Rate4 = () => (
  <div className="rate4">
    <p>1</p>
  </div>
);
const Last = () => <div className="last-block" />;

export default Grid;
