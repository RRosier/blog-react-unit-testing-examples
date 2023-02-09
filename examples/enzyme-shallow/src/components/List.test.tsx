import { shallow } from 'enzyme';
import React from 'react';
import List from './List';

describe('list rendering tests', () => {

    it('render people list', () => {
        const people = [{ name: 'John' }, { name: 'Paul' }];

        const wrapper = shallow(<List people={people} />);

        expect(wrapper.find('li')).toHaveLength(2);
    });

    it('display person name', () => {
        const people = [{ name: 'John' }];

        const wrapper = shallow(<List people={people} />);

        const link = wrapper.find('li').first();

        expect(link.text()).toBe('John');
    });

    it('handle selected name', () => {
        let _selected: string;
        const people = [{ name: 'John' }, { name: 'Paul' }];
        const _onSelect = (s: string) => { _selected = s; };

        const wrapper = shallow(<List people={people} onSelect={_onSelect} />);

        const link = wrapper.find('li').last();
        link.props().onClick?.(undefined as any);
        expect(_selected!).toBe('Paul');
    });
});