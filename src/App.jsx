import React from 'react';
import Header from './header/Header';
import Rating from './rating/Rating';
import Gallery from './gallery/Gallery';
import './App.scss';

const App = () => (
  <div className="imdb-site">
    <Header />
    <Rating />
    <Gallery />
  </div>
);

export default App;
