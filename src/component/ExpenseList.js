import React from 'react';
// Connect react component to redux store
import { connect } from 'react-redux';
// local
import ExpenseListItem from './ExpenseListItem';
import expenseSelector from '../selectors/expenses';

export const ExpenseList = (props) => {
    return (
        <div>
            {
                props.expenses.length === 0 ? (
                    <p>No expenses</p>
                ) : (props.expenses.map((expense) => {
                    return (
                        <ExpenseListItem key={expense.id} {...expense} />
                    );
                })
            )
            }
        </div>
    );
}
// passing state into component props
const mapStateToProps = (state) => {
    return {
        expenses: expenseSelector(state.expenses, state.filters)
    }
}
// mapStateToProps..define what you want to get from store
// e.g expenses, filters
// connect the component to store
export default connect(mapStateToProps)(ExpenseList);
