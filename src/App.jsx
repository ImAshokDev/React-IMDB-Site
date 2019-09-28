import React from 'react';
import Header from './header/Header';
import Rating from './rating/Rating';
import Gallery from './gallery/Gallery';
import Slider from './slider/Slider';
import Picks from './picks/Picks';
import './App.scss';

const App = () => (
  <div className="imdb-site">
    <Header />
    <Rating />
    <Gallery />
    <Slider />
    <Picks />
  </div>
);

export default App;
