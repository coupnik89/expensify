import moment from 'moment';

const expenses = [
    { 
        id: '1',
        description: 'test 1',
        amount: 900,
        note: 'some note test 1',
        createdAt: moment(0)
    },
    {
        id: '2',
        description: 'test mug 2',
        amount: 1900,
        note: 'some note test 2',
        createdAt: moment(0).add(2, 'days').valueOf()
    },
    {
        id: '3',
        description: 'test trunk 3',
        amount: 2800,
        note: 'some note test 3',
        createdAt: moment(0).subtract(2, 'days').valueOf()
    }
]

export default expenses;