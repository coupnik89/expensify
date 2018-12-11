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

export { setTextFilter, sortByAmount, sortByDate, setEndDate, setStartDate }