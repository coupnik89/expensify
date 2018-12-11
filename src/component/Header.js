import React from 'react';
import { NavLink } from 'react-router-dom';

export default () => {
    return (
        <div>
            <header>
                <h1>Expensify</h1>
                <NavLink to="/" activeClassName="is-active">Home</NavLink>
                <NavLink to="/create">Create Expense</NavLink>
            </header>
        </div>
    );
}