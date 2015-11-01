'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import mui from 'material-ui';
import ReactRouter from 'react-router';
import history from './history';

let LeftNav = mui.LeftNav;

let menuItems = [
  {route: 'lights', text: 'Lights'},
  {route: 'sensors', text: 'Sensors'},
  {route: 'led', text: 'LED'},
  {route: 'Settings', text: 'Settings'},
  {type: mui.MenuItem.Types.LINK, payload: '/index.html', text: 'Refresh'}
];

const Navigation = React.createClass({
  onChange(event, selectedIndex, menuItem) {
    console.log(event);
    console.log(selectedIndex);
    console.log(menuItem);
    history.replaceState(null, '/' + menuItem.route);
  },
  toggle() {
    this.refs.leftNav.toggle();
  },
  render() {
    return (
      <div>
        <LeftNav ref="leftNav" docked={false} menuItems={menuItems} onChange={this.onChange}/>
      </div>
    );
  }
});

module.exports = Navigation;
