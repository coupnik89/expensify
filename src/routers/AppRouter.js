import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// local
import ExpenseDashBoard from './../component/ExpenseDashBoard';
import AddExpensePage from './../component/AddExpense';
import Header from './../component/Header';
import EditExpensePage from './../component/EditExpense';
import HelpPage from './../component/HelpPage';
import NotFoundPage from './../component/NotFound'

// BrowserRouter expects child to not exist or length of 1 <div>
const AppRouter = () => {
    return (
        <BrowserRouter>
            <div>
                <Header />
                <Switch>
                    <Route path="/" component={ExpenseDashBoard} exact={true} />
                    <Route path="/create" component={AddExpensePage} exact={true} />
                    <Route path="/edit/:id" component={EditExpensePage} exact={true} />
                    <Route path="/help" component={HelpPage} exact={true} />
                    <Route component={NotFoundPage} />
                </Switch>
            </div>
        </BrowserRouter>
    );
}

export default AppRouter;