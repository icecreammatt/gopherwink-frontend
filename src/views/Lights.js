'use strict';

require('whatwg-fetch');
var React = require('react');
var ReactTransitionGroup = require('react-addons-transition-group');
var Lightswitch = require('../components/Lightswitch');
let injectTapEventPlugin = require('react-tap-event-plugin');
let config = require('../components/config');

injectTapEventPlugin();

// CSS
require('normalize.css');
require('../styles/main.css');

var Lights = React.createClass({

  getInitialState() {
    if(localStorage.state) {
      return JSON.parse(localStorage.state);
    }
    return {items: []};
  },

  componentDidMount() {
    let url = `${ config.baseUrl }lights`;
    fetch(url)
    .then(response => {
      return response.json();
    })
    .then(json => {
      console.log(json);
      this.setState({items: json});
      localStorage.state = JSON.stringify(this.state);
    });
  },

  render: function() {
    var switches = this.state.items.map(light => {
      return (
        <Lightswitch key={light.Id} lightlabel={light.Username} lightid={light.Id} active={light.Active} value={light.Value} />
      );
    });

    return (
      <div className="main">
        <ReactTransitionGroup transitionName="fade">
          {switches}
        </ReactTransitionGroup>
      </div>
    );
  }
});

module.exports = Lights;
