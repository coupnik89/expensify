import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { editExpense } from '../actions/expenses';
import { removeExpense } from '../actions/expenses';

export class EditExpense extends React.Component {
    onSubmit = (expense) => {
        // props.dispatch(editExpense(props.expense.id, expense));
        this.props.editExpense(this.props.expense.id, expense);
        this.props.history.push('/');
    }

    onRemoveExpense = () => {
        if (confirm('Remove Expense?')) {
            this.props.removeExpense({ id: this.props.expense.id });
            this.props.history.push('/');
        }
    }

    render() {
        return (
            <div>
                <ExpenseForm
                    expense={this.props.expense}
                    onSubmit={this.onSubmit} />
                <button onClick={this.onRemoveExpense}>Remove</button>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        editExpense: (id, expense) => dispatch(editExpense(id, expense)),
        removeExpense: (expense) => dispatch(removeExpense(expense))
    }
}

const mapStateToProps = (state, props) => {
    return {
        expense: state.expenses.find((expense) => {
            return expense.id === props.match.params.id;
        })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditExpense);
