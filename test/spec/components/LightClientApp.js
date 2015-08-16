'use strict';

describe('LightClientApp', () => {
  let React = require('react/addons');
  let LightClientApp, component;

  beforeEach(() => {
    let container = document.createElement('div');
    container.id = 'content';
    document.body.appendChild(container);

    LightClientApp = require('components/LightClientApp.js');
    component = React.createElement(LightClientApp);
  });

  it('should create a new instance of LightClientApp', () => {
    expect(component).toBeDefined();
  });
});
