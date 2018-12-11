import React from 'react';
import { connect } from 'react-redux';
// local
import ExpenseList from './ExpenseList';
import ExpenseListFilter from './ExpensesListFilter';
import moment from 'moment';

export default () => {
    // const now = moment();
    // console.log(now.valueOf());
    // console.log(moment(1543500174686).isSameOrAfter(1543544174686));
    return (
        <div>
            <ExpenseListFilter />
            <ExpenseList />
        </div>
    );
}
