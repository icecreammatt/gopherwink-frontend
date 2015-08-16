'use strict';

var React = require('react/addons');
var ReactTransitionGroup = React.addons.TransitionGroup;
var Lightswitch = require('./Lightswitch');

// CSS
require('normalize.css');
require('../styles/main.css');

var LightClientApp = React.createClass({
  render: function() {
    return (
      <div className="main">
        <ReactTransitionGroup transitionName="fade">
          <Lightswitch id="Living Room" active="false"/>
        </ReactTransitionGroup>
      </div>
    );
  }
});

module.exports = LightClientApp;
