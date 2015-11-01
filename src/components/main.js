'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link } from 'react-router';
import { AppBar, IconButton, NavigationClose } from 'material-ui';

import Lights from '../views/Lights';
import Sensors from '../views/Sensors';
import Led from '../views/Led';
import Navigation from './Navigation';
import history from './history';

let content = document.getElementById('content');

const App = React.createClass({
  toggleMenu() {
    this.refs.nav.toggle();
  },
  componentDidMount() {
    history.replaceState(null, '/lights');
  },
  render() {
    return (
      <div>
        <AppBar onClick={this.toggleMenu} navbar={this.refs.nav} />
        <Navigation ref="nav" disableSwipeToOpen={true} />
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
    {path: 'index.html', component: Lights },
    {path: 'lights', component: Lights },
    {path: 'sensors', component: Sensors },
    {path: 'led', component: Led }
  ]
};

ReactDOM.render(<Router history={history} routes={routes} />, content);
