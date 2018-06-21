import React from 'react';
// import BeerCard from '../BeerCard/';
import './WeatherHero.css';

function WeatherHero({location, date}) {
  return (
    <div className="row">
      <h1>{location}</h1>
      <h2>{date.toLocaleDateString()}</h2>
    </div>
  );
  
};

export default WeatherHero;