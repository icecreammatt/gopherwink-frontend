'use strict';

var LightClientApp = require('./LightClientApp');
var React = require('react');
import { Router, Route } from 'react-router';

var content = document.getElementById('content');

var Routes = (
  <Router>
    <Route component={LightClientApp} path="/" >
      <Route path="lights" handler={LightClientApp} />
    </Route>
  </Router>
);

React.render(Routes, content);
