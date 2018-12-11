import React from 'react';
import { shallow } from 'enzyme';
import { ExpenseListFilter } from '../../component/ExpensesListFilter';
import { filters, altFilters } from '../fixtures/filters';
import moment from 'moment';

let wrapper, setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate;

beforeEach(() => {
    setTextFilter = jest.fn();
    sortByAmount = jest.fn();
    sortByDate = jest.fn();
    setEndDate = jest.fn();
    setStartDate = jest.fn();
    wrapper = shallow(
        <ExpenseListFilter 
            setTextFilter={setTextFilter} 
            setStartDate={setStartDate}
            setEndDate={setEndDate}
            sortByAmount={sortByAmount}
            sortByDate={sortByDate} 
            filters={filters} 
            />);
});

test('should render ExpenseFilters correctly', () => {
    expect(wrapper).toMatchSnapshot();
});

test('should render ExpenseFilters with alt data correctly', () => {
    // set a prop in EXPENSELISTFILTER shallow component
    wrapper.setProps({
        filters: altFilters
    })
    expect(wrapper).toMatchSnapshot();
});

// should handle text change
// should sort by date
// should sort by amount
// should handle date changes
// should handle date focus changes

test('should handle text change', () => {
    wrapper.find('input').simulate('change', {
        target: { value: 'test' }
    });
    expect(setTextFilter).toHaveBeenCalledWith('test');
});

test('should sort by date', () => {
    wrapper.find('select').simulate('change', {
        target: { value: 'date' }
    });
    expect(sortByDate).toHaveBeenCalled();
});

test('should sort by amount', () => {
    wrapper.find('select').simulate('change', {
        target: { value: 'amount' }
    });
    expect(sortByAmount).toHaveBeenCalled();
});

test('should handle date changes', () => {
    const startDate = moment(0);
    const endDate = moment(1000);
    wrapper.find('withStyles(DateRangePicker)').prop('onDatesChange')({ startDate, endDate });
    expect(setStartDate).toHaveBeenLastCalledWith(startDate);
    expect(setEndDate).toHaveBeenLastCalledWith(endDate);
});

test('should handle date focus changes', () => {
    // could be closed or 1 of 2 open states (startDate, endDate)
    const focused = 'startDate';
    wrapper.find('withStyles(DateRangePicker)').prop('onFocusChange')(focused);
    expect(wrapper.state('focused')).toBe(focused);
});