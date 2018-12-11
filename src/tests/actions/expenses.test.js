import { addExpense, removeExpense, editExpense } from '../../actions/expenses';
import expenses from '../fixtures/expenses';

test('should generate addExpense object with default', () => {
    const action = addExpense();
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            id: expect.any(String),
            description: '',
            note: '',
            amount: 0,
            createdAt: 0
        }
    });
});

test('should generate addExpense object with provided data', () => {
    const obj = {
        description: 'test',
        note: 'test note',
        amount: 2900,
        createdAt: 1000
    }
    const action = addExpense(obj);
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            id: expect.any(String),
            ...obj
        }
    });
});

test('should generate removeExpense object', () => {
    const action = removeExpense({ id: 'abc' });
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: 'abc'
    });
});

test('should generate editExpense object', () => {
    const updates = {
        description: 'edit',
        note: 'edit'
    };
    const action = editExpense('abc', updates);
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: 'abc',
        updates: updates
    });
});