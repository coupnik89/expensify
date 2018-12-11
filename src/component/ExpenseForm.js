import React from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';

export default class ExpenseForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            description: props.expense ? props.expense.description : '',
            amount: props.expense ? (props.expense.amount).toString() : '',
            note: props.expense ? props.expense.note : '',
            createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
            focused: false,
            error: undefined
        }
    }

    onDescriptionChange = (e) => {
        const description = e.target.value;
        this.setState(() => {
            return {
                description
            }
        });
    }

    onAmountChange = (e) => {
        const amount = e.target.value;
        
        if(!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
            this.setState(() => ({ amount }))
        }
    }

    onNoteChange = (e) => {
        const note = e.target.value;
        this.setState(() => {
            return {
                note
            }
        });
    }

    onSubmit = (e) => {
        e.preventDefault();

        if(!this.state.description || !this.state.amount) {
            this.setState(() => {
                return {
                    error: 'Please provide valid description and amount'
                }
            });
        } else {
            this.setState(() => ({error: ''}));
            this.props.onSubmit({
                description: this.state.description,
                amount: parseFloat(this.state.amount, 10) * 100,
                note: this.state.note,
                createdAt: this.state.createdAt.valueOf()
            });
        }
    }

    onDateChange = (createdAt) => {
        if (createdAt) {
            this.setState(() => ({ createdAt }));
        }
    }

    onFocusChange = ({ focused }) => {
        this.setState(() => ({ focused }));
    }

    render() {
        return (
            <div>
                {this.state.error && this.state.error}
                <form onSubmit={this.onSubmit}>
                    <input
                        value={this.state.description}
                        onChange={this.onDescriptionChange}
                        type='text'
                        placeholder='Description'
                        autoFocus />
                    <input
                        value={this.state.amount}
                        onChange={this.onAmountChange}
                        type='text'
                        placeholder='Amount' />
                    <SingleDatePicker 
                        date={this.state.createdAt}
                        onDateChange={this.onDateChange}
                        focused={this.state.focused}
                        onFocusChange={this.onFocusChange}
                        isOutsideRange={() => false}
                        numberOfMonths={1}
                    />
                    <textarea
                        value={this.state.note}
                        onChange={this.onNoteChange}
                        type='text'
                        placeholder='Add note (optional)' /> 
                    <button>{this.props.expense ? 'Edit Expense' : 'Add Expense'}</button>    
                </form>  
            </div>
        );
    }
}