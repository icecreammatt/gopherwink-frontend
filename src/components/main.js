'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link } from 'react-router';
import { AppBar, IconButton, NavigationClose } from 'material-ui';

import LightClientApp from '../views/Lights';
import Sensors from '../views/Sensors';
import Led from '../views/Led';
import Navigation from './Navigation';
import history from './history';

let content = document.getElementById('content');

const App = React.createClass({
  toggleMenu() {
    this.refs.nav.toggle();
  },
  render() {
    return (
      <div>
        <AppBar onClick={this.toggleMenu} navbar={this.refs.nav} />
        <Navigation ref="nav" />
        {this.props.children}
      </div>
    );
  }
});

const routes = {
  path: '/',
  location: 'hash',
  component: App,
  childRoutes: [
    {path: 'lights', component: LightClientApp },
    {path: 'sensors', component: Sensors },
    {path: 'led', component: Led }
  ]
};

ReactDOM.render(<Router history={history} routes={routes} />, content);
