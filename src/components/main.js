'use strict';

import LightClientApp from './LightClientApp';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route } from 'react-router';

var content = document.getElementById('content');

var Routes = (
  <Router>
    <Route component={LightClientApp} path="/" >
      <Route path="lights" component={LightClientApp} />
    </Route>
  </Router>
);

ReactDOM.render(Routes, content);
