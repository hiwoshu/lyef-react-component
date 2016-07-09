import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Foo from '../../src/Foo';

describe('Component Foo', () => {

    it('should have props itens', () => {
        const wrapper = shallow(<Foo itens={[1]} />);
        expect(wrapper.props().itens).to.be.defined;
    });

    it('should have a parent class named foo', () => {
        const wrapper = shallow(<Foo itens={[1, 2]} />);
        expect(wrapper.is('.foo')).to.equal(true);
    });

    it('should have three children', () => {
        const wrapper = shallow(<Foo itens={[1, 2, 3]} />);
        expect(wrapper.children()).to.have.length(3);
    });

    it('should have children with class named bar', () => {
        const wrapper = shallow(<Foo itens={[1]} />);
        expect(wrapper.children().is('.bar')).to.equal(true);
    });
});
