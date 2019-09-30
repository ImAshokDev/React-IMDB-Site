import React from 'react';
import './Picks.scss';
import PicksImg from './PicksImg';

const Picks = () => (
  <div className="picks-section">
    <Middile />
  </div>
);

const Middile = () => (
  <div className="middile-block">
    <div className="head">
      <h6>
        <span>imdb picks:</span>
        november
      </h6>
    </div>
    <PicksImg />
    <div className="buttom">
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam porro
        facilis quia tempore delectus recusandae optio ipsum obcaecati?
        Molestias ea, praesentium ex nostrum facilis ab Molestias ea,
        praesentium ex nostrum facilis ab repellat labore beatae voluptatem?
        Exercitationem!
      </p>
      <h3>visit the imdb picks section</h3>
    </div>
  </div>
);
export default Picks;
