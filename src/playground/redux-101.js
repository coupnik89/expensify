import { createStore } from 'redux';

// Action generators - fn that return action object

const incrementCount = ({ incrementBy = 1 } = {}) => {
    return {
        type: 'INCREMENT',
        incrementBy
    }
}

const decrementCount = ({ decrementBy = 1 } = {}) => {
    return {
        type: 'DECREMENT',
        decrementBy
    }
}

// Setcount
const setCount = ({ setCount = 0 } = {}) => {
    return {
        type: 'SET',
        setCount
    }
}
// Reset
const resetCount = ({ resetCount = 0 } = {}) => {
    return {
        type: 'RESET',
        resetCount
    }
}

// Reducers
const countReducer = (state = { count: 0 }, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {
                count: state.count + action.incrementBy
            };
        case 'DECREMENT':
            return {
                count: state.count - action.decrementBy
            }
        case 'SET':
            return {
                count: action.setCount
            };
        case 'RESET':
            return {
                count: action.resetCount
            }
        default:
            return state;
    }
}

const store = createStore(countReducer);

store.subscribe(() => {
    console.log(store.getState());
});

store.dispatch(incrementCount({ incrementBy: 5 }));

store.dispatch(decrementCount({ decrementBy: 1 }));

store.dispatch(setCount({ setCount: 100 }));

store.dispatch(resetCount());