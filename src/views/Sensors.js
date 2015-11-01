'use strict';

require('whatwg-fetch');
var React = require('react');
var ReactTransitionGroup = require('react-addons-transition-group');
let Ledcontroller = require('../components/Ledcontroller');
let injectTapEventPlugin = require('react-tap-event-plugin');

injectTapEventPlugin();

// CSS
require('normalize.css');
require('../styles/main.css');

var Sensors = React.createClass({
  render: function() {
    return (
      <div className="main">
        <ReactTransitionGroup transitionName="fade">
        <h1>Sensors...</h1>
        </ReactTransitionGroup>
      </div>
    );
  }
});

module.exports = Sensors;
