import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
// import config from './config.js';

import Nav from './components/Nav';
import Home from './pages/Home';
import About from './pages/About';


// TODO: Create state 
// TODO: Feed the state to the render
// componentDidMount (fetch data when app mounted)
// TODO: Fetch weather from API 
// js fetch
// TODO: Put fetched data into state
// TODO: Feed the updated state to the render

// used to return objects with weather from location and date
function getWeather (location, date) {
  // TODO: fetch data from weather API

  // TODO: parse the data

  // TODO: return only the data we need
  const weather = '';
  // return a weather object with just those vars that we pulled out
  const {forecast, currentHigh, currentLow, forecastHigh, forecastLow} = weather;

  return {
    forecast: forecast,
    current: {
      high: currentHigh,
      low: currentLow
    },
    tomorrow: {
      high: forecastHigh,
      low: forecastLow
    }
  };
}

class App extends Component {
  constructor() {
    super();

    this.state = {
      isLoaded: false,
      date: new Date(Date.now()),
      location: 'Melbourne',
      weather: []
    };
  }

  componentDidMount () {

  }

  render() {
    return ( 
      <BrowserRouter>
        <Switch>

          <Route 
            exact 
            path='/'
            render={() => {
              return (
                <div className="App">
                  <Nav subheader="Home" />
                  <Home location={this.state.location} date={this.state.date} />
                </div>
              );
            }}
          />

          <Route
            exact
            path='/about'
            render={() => {
              return (
                <div className="App">
                  <Nav subheader="About" />
                  <About state={this.state} />
                </div>
              );
            }}
          />

        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
