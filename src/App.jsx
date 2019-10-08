import React from 'react';
import Header from './header/Header';
import Rating from './rating/Rating';
import Gallery from './gallery/Gallery';
import Slider from './slider/Slider';
import Picks from './picks/Picks';
import Footer from './footer/Footer';
import './App.scss';

const App = () => (
  <div className="imdb-site">
    <Header />
    <Rating />
    <Gallery />
    <Slider />
    <Picks />
    <Footer
      icon={[
        {
          name: 'twitter-square',
        },
        {
          name: 'facebook',
        },
        {
          name: 'instagram',
        },
      ]}
    />
  </div>
);

// Component folder names in caps

export default App;
