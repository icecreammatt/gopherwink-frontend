'use strict';

let React = require('react/addons');
let mui = require('material-ui');
let Slider = mui.Slider;
let Toggle = mui.Toggle;
let Card = mui.Card;
require('whatwg-fetch');
let config = require('./config');

let injectTapEventPlugin = require('react-tap-event-plugin');
injectTapEventPlugin();

require('styles/Lightswitch.less');

var Lightswitch = React.createClass({

  getInitialState() {
    return {
      light: {
        id: parseInt(this.props.lightid),
        active: false,
        value: 0
      }
    };
  },

  postData(route) {
    let url = `${ config.baseUrl }${ route }`;
    let postData = JSON.stringify(this.state.light);
    console.log(postData);
    fetch(url, {
      method: 'put',
      body: postData,
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(response => {
      console.log('Success: ' + response.body);
    })
    .catch(error => {
      console.log('Error: ' + error);
    });
  },

  toggled(event, toggled) {
    console.log(toggled);
    this.state.light.active = toggled;
    this.postData('lights/' + this.props.lightid + '/power');
  },

  onChange(e, value) {
    this.state.light.value = parseInt((value * 255) * 1); // Limit range between 0 & 255
    console.log(this.state.light.value);
    this.postData('lights/' + this.props.lightid + '/brightness');
  },

  render() {
    return (
        <Card className="Lightswitch">
            <div>
                <Toggle label={this.props.lightlabel} defaultToggled={this.props.active} onToggle={this.toggled} />
                <Slider value={this.props.value / 255} onChange={this.onChange} />
            </div>
        </Card>
      );
  }
});

module.exports = Lightswitch;
