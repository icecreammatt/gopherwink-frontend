'use strict';

require('whatwg-fetch');
var React = require('react/addons');
var ReactTransitionGroup = React.addons.TransitionGroup;
var Lightswitch = require('./Lightswitch');
let mui = require('material-ui');
let ThemeManager = new mui.Styles.ThemeManager();
let Ledcontroller = require('./Ledcontroller');
let injectTapEventPlugin = require('react-tap-event-plugin');
let config = require('./config');

injectTapEventPlugin();

// CSS
require('normalize.css');
require('../styles/main.css');

var LightClientApp = React.createClass({

  getInitialState() {
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
    });
  },

  childContextTypes: {
    muiTheme: React.PropTypes.object
  },

  getChildContext() {
    return {
      muiTheme: ThemeManager.getCurrentTheme()
    };
  },

  render: function() {
    var switches = this.state.items.map(light => {
      return (
        <Lightswitch lightlabel={light.Username} lightid={light.Id} active={light.Active} value={light.Value} />
      );
    });

    return (
      <div className="main">
        <ReactTransitionGroup transitionName="fade">
          {switches}
          <Ledcontroller />
        </ReactTransitionGroup>
      </div>
    );
  }
});

module.exports = LightClientApp;
