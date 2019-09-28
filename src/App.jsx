import React from 'react';
import Header from './header/Header';
import Rating from './rating/Rating';
import './App.scss';

const App = () => (
  <div className="imdb-site">
    <Header />
    <Rating />
  </div>
);

export default App;
