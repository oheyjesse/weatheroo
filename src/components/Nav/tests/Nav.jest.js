import React from 'react';
import { mount } from 'enzyme';

import HelloWorld from '../index';

describe('<HelloWorld />', () => {
  it('should have a className', () => {
    const renderedComponent = mount(<HelloWorld className="test" />);
    expect(renderedComponent.find('li').prop('className')).toBeDefined();
  });
});
