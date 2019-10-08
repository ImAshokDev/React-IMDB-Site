import React from 'react';
import './Grid.scss';
import img from './rating/images/04.jpg';

// Pass eveythin as props
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
      <Rate1
        head1="    MAD MAX: FURY ROAD"
        headsp="(2015)"
        h6="120 min"
        i1={<i className="fas fa-circle" />}
        list={['Action,', 'Adventure,', 'Sci-Fi']}
        sp="15 May 2015 (USA)"
      />
      <Rate2 date="20" />
      <Rate3 icon={<i className="fas fa-star" />} />
      <Rate4
        dname="George Miller"
        icon={<i className="fas fa-circle" />}
        wname="George Miller, Brendan McCarthy, Nick Lathouris"
      />
    </div>
    <div className="middile-right">
      <Img pick={img} />
    </div>
  </div>
);

const Rate1 = ({ head1, headsp, i1, h6, list, sp }) => (
  <div className="rate1">
    <h2>
      {head1}
      <span>{headsp}</span>
    </h2>
    <ul>
      <li>
        <h6>R</h6>
      </li>
      <li>{i1}</li>
      <li>
        <h6>{h6}</h6>
      </li>
      <li>{i1}</li>
      {list.map(d => (
        <li>{d}</li>
      ))}
      <li>
        <span>{sp}</span>
      </li>
    </ul>
  </div>
);
const Rate2 = ({ date }) => (
  <div className="rate2">
    <div>
      <i className="fas fa-calendar-alt" />
      <p>{date}</p>
    </div>
  </div>
);
const Rate3 = ({ icon }) => (
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
            {icon}
            {icon}
            {icon}
            {icon}
            {icon}
            {icon}
            {/* <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" /> */}
          </span>
          <small>
            {icon}
            {icon}
            {icon}
            {icon}
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
          {/* map */}
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
const Rate4 = ({ dname, icon, wname }) => (
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
      <span>{dname}</span>
      <div>{icon}</div>
      <p>Writers</p>
      <span>{wname}</span>
      <div>{icon}</div>
      <p>Stars:</p>
      <Image />
      <div className="icon">
        <i className="fas fa-ellipsis-h" />
      </div>
    </div>
    <div className="button">
      <button type="button" className="btn1">
        <i className="fas fa-plus" />
        <p>watchlist</p>
      </button>
      <button type="button" className="btn2">
        <i className="fas fa-caret-down" />
      </button>

      <button type="button" className="btn3">
        <i className="fas fa-caret-right" />
        <p>watch trailer</p>
      </button>
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
const Img = ({ pick }) => (
  <div className="img">
    <img src={pick} alt="" />
  </div>
);
const Last = () => <div className="last-block" />;

export default Grid;
