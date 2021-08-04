/* eslint-disable no-undef */
import React from 'react';
import { mount } from 'enzyme';
import Footer from '../../components/Footer';

describe('<Footer />', () => {
  const footer = mount(<Footer />);

  test('Render Footer component', () => {
    expect(footer.length).toEqual(1);
  });

  test('Title Renders', () => {
    expect(footer.find('.Footer-title').text()).toEqual('Alfredo Merch');
  });
});
