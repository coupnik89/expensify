import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';

// Add expense
const addExpense = ({
    description = '',
    note = '',
    amount = 0,
    createdAt = 0
} = {}) => {
    return {
        type: 'ADD_EXPENSE',
        expense: {
            id: uuid(),
            description,
            note,
            amount,
            createdAt
        }
    }
}
// Remove expense
const removeExpense = ({ id } = {}) => {
    return {
        type: 'REMOVE_EXPENSE',
        id
    }
}

// Edit expense
const editExpense = (id, updates) => {
    return {
        type: 'EDIT_EXPENSE',
        id, 
        updates
    }
}

// Expenses Reducer
const expenseReducerDefaultState = [];

const expensesReducer = (state = expenseReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_EXPENSE': 
            return [
                ...state,
                action.expense
            ];
        case 'REMOVE_EXPENSE': 
            return state.filter((expense) => {
                return expense.id !== action.id
            });
        case 'EDIT_EXPENSE':
            return state.map((expense) => {
                if(expense.id === action.id) {
                    return {
                        ...expense,
                        ...action.updates
                    }
                } else {
                    return expense;
                }
            });
        default:
            return state;
    }
}

// Set text Filter
const setTextFilter = (text = '') => {
    return {
        type: 'SET_TEXT_FILTER',
        text
    }
}
// sortAmount
const sortByAmount = () => {
    return {
        type: 'SORT_BY_AMOUNT'
    }
}
// sortDate
const sortByDate = () => {
    return {
        type: 'SORT_BY_DATE'
    }
}
// Start date
const setStartDate = (date) => {
    return {
        type: 'SET_START_DATE',
        date
    }
}
// End date
const setEndDate = (date) => {
    return {
        type: 'SET_END_DATE',
        date
    }
}

// Filters Reducer
const filterReducerDefaultState = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
}

const filtersReducer = (state = filterReducerDefaultState, action) => {
    switch (action.type) {
        case 'SET_TEXT_FILTER': 
            return {
                ...state,
                text: action.text
            }
        case 'SORT_BY_AMOUNT': 
            return {
                ...state,
                sortBy: 'amount'
            }
        case 'SORT_BY_DATE':
            return {
                ...state,
                sortBy: 'date'
            } 
        case 'SET_START_DATE': 
            return {
                ...state,
                startDate: action.date
            } 
        case 'SET_END_DATE':
            return {
                ...state,
                endDate: action.date
            }          
        default:
            return state;
    }
}
// Get visible Expenses
const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
    return expenses.filter((expense) => {
        const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
        const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());

        return startDateMatch && endDateMatch && textMatch;
    }).sort((a, b) => {
        if(sortBy === 'date') {
            return b.createdAt - a.createdAt;
        } else if (sortBy === 'amount') {
            return b.amount - a.amount;
        }
    });
}

// Store creation
const store = createStore(
    combineReducers({
        expenses: expensesReducer,
        filters: filtersReducer
    })
);

store.subscribe(() => {
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
    console.log(visibleExpenses);
});

const expenseOne = store.dispatch(addExpense({ description: 'rent', amount: 100, createdAt: -21000 }));
const expenseTwo = store.dispatch(addExpense({ description: 'coffee', amount: 300, createdAt: -1000 }));
store.dispatch(addExpense({ description: 'clothing', amount: 50, createdAt: 1000 }));

// store.dispatch(removeExpense(expenseOne.expense));
// store.dispatch(editExpense(expenseTwo.expense.id, { amount: 500 }));

// store.dispatch(setTextFilter('rent'));
// store.dispatch(setTextFilter());

store.dispatch(sortByAmount());
// store.dispatch(sortByDate());

// store.dispatch(setStartDate(-2000));
// store.dispatch(setStartDate());
// store.dispatch(setEndDate(0));

