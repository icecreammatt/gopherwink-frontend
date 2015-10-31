'use strict';

let React = require('react');
require('whatwg-fetch');
let mui = require('material-ui');
let Slider = mui.Slider;
let Card = mui.Card;
let config = require('./config');

let injectTapEventPlugin = require('react-tap-event-plugin');
injectTapEventPlugin();

require('styles/Ledcontroller.less');

var Ledcontroller = React.createClass({

  getInitialState() {
    return {
        rgb: {
            red: 0,
            green: 0,
            blue: 0
        }
    };
  },

  postData() {
      let url = `${ config.baseUrl }led`;
      let postData = JSON.stringify(this.state.rgb);
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

  onChangeRed(e, value) {
    this.state.rgb.red = parseInt((value * 255) * 1);
    this.postData();
  },
  onChangeGreen(e, value) {
    this.state.rgb.green = parseInt((value * 255) * 1);
    this.postData();
  },
  onChangeBlue(e, value) {
    this.state.rgb.blue = parseInt((value * 255) * 1);
    this.postData();
  },

  render() {
    return (
        <Card className="Ledcontroller">
          <div>
            <span>LED Colors</span>
            <br />
            <span>Red</span>
            <Slider name="red-slider" onChange={this.onChangeRed} />
            <span>Green</span>
            <Slider name="green-slider" onChange={this.onChangeGreen} />
            <span>Blue</span>
            <Slider name="blue-slider" onChange={this.onChangeBlue} />
          </div>
        </Card>
      );
  }
});

module.exports = Ledcontroller;
