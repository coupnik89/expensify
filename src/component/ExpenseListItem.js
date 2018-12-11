import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

export const ExpenseListItem = ({ id, description, amount, createdAt }) => {
    return(
        <div>
            <Link to={`edit/${id}`}><h3>{description}</h3></Link>
            <p>{amount} - {moment(createdAt).format('MMM Do, YYYY')}</p>
        </div>
    );
}

export default ExpenseListItem;