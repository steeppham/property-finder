import 'react-native';
import React from 'react';
import PropertyView from '../PropertyView.js';

import renderer from 'react-test-renderer';

describe('PropertyView', () => {
  it('should render PropertyView', () => {
    const property = {
      bedroom_number: '1',
      property_type: 'house',
      bathroom_number: '1',
      img_url: 'http://someimage.com/image.jpg',
      title: 'title',
      summary: 'summary',
      price_formatted: '$123 GP'
    }
    const component = renderer.create(<PropertyView property={property}/>);
    expect(component.toJSON()).toMatchSnapshot();
  });
});