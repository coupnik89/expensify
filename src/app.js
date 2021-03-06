import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
// local
import AppRouter from './routers/AppRouter';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
// store
import configureStore from './store/configureStore';

const store = configureStore();

const jsx = (
    // providing store to all component in AppRouter
    <Provider store={store}>
        <AppRouter />
    </Provider>
);


ReactDOM.render(jsx, document.getElementById('app'));
