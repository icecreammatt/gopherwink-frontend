'use strict';

let React = require('react');
let mui = require('material-ui');
let Slider = mui.Slider;
let Toggle = mui.Toggle;
let Card = mui.Card;
let TextField = mui.TextField;
require('whatwg-fetch');
let config = require('./config');

let injectTapEventPlugin = require('react-tap-event-plugin');
injectTapEventPlugin();

require('styles/Lightswitch.less');

var labelStyle = {
  width: '150px',
  display: 'inline-block'
};

var switchStyle = {
  marginTop: '15px',
  width: '50px',
  display: 'inline-block',
  float: 'right'
};

var labelSwitchToggle = {
  minWidth: '200px'
};

var Lightswitch = React.createClass({

  getInitialState() {
    return {
      light: {
        id: parseInt(this.props.lightid),
        active: false,
        value: 0,
        username: this.props.lightlabel
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

  onLabelChange(e) {
    this.state.light.username = e.target.value;
    this.setState({light: this.state.light});
    this.postData('lights/' + this.props.lightid + '/name');
  },

  render() {
    return (
        <Card className="Lightswitch">
            <div className="label-switch-toggle" style={labelSwitchToggle}>
              <TextField style={labelStyle} className="label" onBlur={this.onLabelChange} defaultValue={this.state.light.username} />
              <Toggle style={switchStyle} className="toggle" defaultToggled={this.props.active} onToggle={this.toggled} />
            </div>
              <Slider value={this.props.value / 255} onChange={this.onChange} />
            <div>
            </div>
        </Card>
      );
  }
});

module.exports = Lightswitch;
