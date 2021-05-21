import React from 'react';
import { Route, Switch } from 'react-router-dom';

import LandingPage from './pages/LandingPage';
import HomePage from './pages/HomePage';
import WeatherPage from './pages/WeatherPage';

class Routes extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path='/' component={LandingPage} />
        <Route exact path='/home' component={HomePage} />
        <Route exact path='/:city/weather' component={WeatherPage} />
        <Route
          render={function () {
            return <h1>Not Found</h1>;
          }}
        />
      </Switch>
    );
  }
}

export default Routes;
