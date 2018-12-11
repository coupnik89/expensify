import React from 'react';
import { connect } from 'react-redux';
// local 
import ExpenseForm from './ExpenseForm';
import { addExpense } from '../actions/expenses';

export class AddExpense extends React.Component {
    onSubmit = (expense) => {
        this.props.addExpense(expense);
        this.props.history.push('/');
    }

    render() {
        return (
            <div>
                <ExpenseForm
                    onSubmit={this.onSubmit} />
            </div>        
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addExpense: (expense) => dispatch(addExpense(expense))
    }
}

export default connect(undefined, mapDispatchToProps)(AddExpense);