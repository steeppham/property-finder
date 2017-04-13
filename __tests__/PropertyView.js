import 'react-native';
import React from 'react';
import { shallow, render, mount } from 'enzyme';
import PropertyView from '../PropertyView.js';

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
    const component = shallow(<PropertyView property={property}/>);
    expect(component).toMatchSnapshot();
  });
});