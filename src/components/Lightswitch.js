'use strict';

let React = require('react/addons');
let mui = require('material-ui');
let Slider = mui.Slider;
let Toggle = mui.Toggle;
let Card = mui.Card;
require('whatwg-fetch');

let ip = '192.168.1.11';
let port = '5000';
let baseUrl = `http://${ ip }:${ port }/`;

require('styles/Lightswitch.less');

var Lightswitch = React.createClass({

  getInitialState() {
    return {value: '0.5'};
  },

  toggled(event, toggled) {
    console.log(toggled);
    let url = `${ baseUrl }light?status=${toggled ? 'ON' : 'OFF'}`;
    fetch(url)
      .then(response => {
        console.log('Success' + response);
      })
      .catch(error => {
        console.log('Error: ' + error);
      });
  },

  onChange(e, value) {
    value = parseInt((value * 255) * 1); // Limit range between 0 & 255
    console.log('Value:', value);
    let url = `${ baseUrl }light?value=${ value }`;
    fetch(url)
      .then(response => {
        console.log('Success: ' + response.body);
      })
      .catch(error => {
        console.log('Error: ' + error);
      });
  },

  render() {
    return (
        <Card className="Lightswitch">
            <div>
                <Toggle value="toggleValue1" label={this.props.id} defaultToggled={this.props.active} onToggle={this.toggled} />
                <Slider onChange={this.onChange} />
            </div>
        </Card>
      );
  }
});

module.exports = Lightswitch;
