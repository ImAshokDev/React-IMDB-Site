import React from 'react';
import './Grid.scss';

const Grid = ({ pixels, bg }) => (
  <div className="grid-section" style={{ height: pixels, background: bg }}>
    <First />
    <Middile />
    <Last />
  </div>
);

const First = () => <div className="first-block" />;
const Middile = () => <div className="middile-block" />;
const Last = () => <div className="last-block" />;
export default Grid;
