import expect from 'expect.js';
import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';
import Layout from '../src';

Enzyme.configure({ adapter: new Adapter() });


describe('<Layout.Right>', () => {
  it('render default', () => {
    const wrapper = mount(<Layout.Right />);
    expect(wrapper.props().className).to.be(undefined);
    expect(wrapper.props().width).to.equal(500);
    expect(wrapper.props().adaptive).to.be(undefined);
    expect(wrapper.find('Right')).to.have.length(1);
  });

  it('render has className', () => {
    const wrapper = mount(<Layout.Right className="test-class" />);
    expect(wrapper.props().className).to.equal('test-class');
    expect(wrapper.hasClass('test-class')).to.equal(true);
  });

  it('render has width', () => {
    const wrapper = mount(<Layout.Right width={800} />);
    expect(wrapper.props().width).to.equal(800);
    expect(wrapper.html()).to.match(/width: 800px/g);
  });

  it('render has adaptive', () => {
    const wrapper = mount(<Layout.Right adaptive />);
    expect(wrapper.props().adaptive).to.equal(true);
  });
});
