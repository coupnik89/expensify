import React from 'react';
import { shallow } from 'enzyme';
import ExpenseListItem from '../../component/ExpenseListItem';
import expenses from '../fixtures/expenses';

test('should render ExpenseListItem correctly', () => {
    const wrapper = shallow(<ExpenseListItem {...expenses[2]}/>);
    expect(wrapper).toMatchSnapshot();
});