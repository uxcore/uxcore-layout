import expect from 'expect.js';
import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Layout, { Right, Left } from '../src';

Enzyme.configure({ adapter: new Adapter() });


describe('<Layout>', () => {
  it('render default', () => {
    const wrapper = mount(<Layout />);
    expect(wrapper.props().className).to.be(undefined);
    expect(wrapper.find('Layout')).to.have.length(1);
  });

  it('render has className', () => {
    const wrapper = mount(<Layout className="test-class" />);
    expect(wrapper.props().className).to.equal('test-class');
    expect(wrapper.hasClass('test-class')).to.equal(true);
  });

  it('render has child', () => {
    const wrapper = mount(<Layout><Left /><Right /></Layout>);
    expect(wrapper.find(Left)).to.have.length(1);
    expect(wrapper.find(Right)).to.have.length(1);
    expect(wrapper.find(Left).hasClass('kuma-layout-2c-left-fixed')).to.equal(true);
    expect(wrapper.find(Right).hasClass('kuma-layout-2c-right-fixed')).to.equal(true);
  });

  it('render has two children', () => {
    const wrapper = mount(<Layout><Left /><Right /></Layout>);
    expect(wrapper.find('.kuma-layout-2c')).to.have.length(1);
  });

  it('render has three children', () => {
    const wrapper = mount(<Layout><Left /><Left /><Right /></Layout>);
    expect(wrapper.find('.kuma-layout-3c')).to.have.length(1);
  });
});
