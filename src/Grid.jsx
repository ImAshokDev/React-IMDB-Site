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
      <p>sdf</p>
    </div>
    <div className="middile-right">
      <p>sdf</p>
    </div>
  </div>
);
const Last = () => <div className="last-block" />;

export default Grid;
