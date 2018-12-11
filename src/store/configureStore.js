import { createStore, combineReducers } from 'redux';
// local
import expensesReducer from '../reducers/expenses';
import filtersReducer from '../reducers/filters';

// Store creation
export default () => {
    const store = createStore(
        combineReducers({
            expenses: expensesReducer,
            filters: filtersReducer
        })
    );

    return store;
}
