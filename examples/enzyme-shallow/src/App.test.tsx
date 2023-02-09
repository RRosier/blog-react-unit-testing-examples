import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import List from './components/List';

describe('app rendering tests', () => {

  it('verify initial no list rendered', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(List)).toHaveLength(0);
  });

  it('button clicked', () => {
    const wrapper = shallow(<App />);
    const button = wrapper.find('button').first();
    button.props().onClick!(undefined as any);
    const list = wrapper.find(List).first();
    expect(list.props().people).toHaveLength(2);
  });
});