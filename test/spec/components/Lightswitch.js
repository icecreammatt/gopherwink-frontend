'use strict';

// Uncomment the following lines to use the react test utilities
// import React from 'react';
// const TestUtils = React.addons.TestUtils;

import createComponent from 'helpers/createComponent';
import Lightswitch from 'components/Lightswitch.js';

describe('Lightswitch', () => {
    let LightswitchComponent;

    beforeEach(() => {
        LightswitchComponent = createComponent(Lightswitch);
    });

    it('should have its component name as default className', () => {
        expect(LightswitchComponent._store.props.className).toBe('Lightswitch');
    });
});
