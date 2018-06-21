import React from 'react';
import WeatherHero from '../components/WeatherHero/';

function Home ({location, date}) {
  console.log(location);
  if (!location) {
    return <div>No location!</div>;
  }

  return (
    <div className="container">
      <WeatherHero location={location} date={date}/>
    </div>
  );
}

export default Home;