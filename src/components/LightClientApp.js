'use strict';

var React = require('react/addons');
var ReactTransitionGroup = React.addons.TransitionGroup;
var Lightswitch = require('./Lightswitch');
let mui = require('material-ui');
let ThemeManager = new mui.Styles.ThemeManager();
let Ledcontroller = require('./Ledcontroller');
let injectTapEventPlugin = require('react-tap-event-plugin');

injectTapEventPlugin();

// CSS
require('normalize.css');
require('../styles/main.css');

var LightClientApp = React.createClass({

  childContextTypes: {
    muiTheme: React.PropTypes.object
  },

  getChildContext() {
    return {
      muiTheme: ThemeManager.getCurrentTheme()
    };
  },

  render: function() {
    return (
      <div className="main">
        <ReactTransitionGroup transitionName="fade">
          <Lightswitch lightlabel="mobile" lightid="1" active="false"/>
          <Lightswitch lightlabel="entry" lightid="2" active="false"/>
          <Ledcontroller />
        </ReactTransitionGroup>
      </div>
    );
  }
});

module.exports = LightClientApp;
