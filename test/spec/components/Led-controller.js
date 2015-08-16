'use strict';

// Uncomment the following lines to use the react test utilities
// import React from 'react/addons';
// const TestUtils = React.addons.TestUtils;

import createComponent from 'helpers/createComponent';
import Led-controller from 'components/Led-controller.js';

describe('Led-controller', () => {
    let Led-controllerComponent;

    beforeEach(() => {
        Led-controllerComponent = createComponent(Led-controller);
    });

    it('should have its component name as default className', () => {
        expect(Led-controllerComponent._store.props.className).toBe('Led-controller');
    });
});
