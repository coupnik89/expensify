import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => {
    return (
        <div>
            <h1>Info</h1>
            {props.info && <h3>{props.info}</h3>}
        </div>
    );
}
// function
const fn = (WrappedComponent) => {
    // returning a component with props
    return (props) => {
        // component returning jsx (rendering another component)
        return (
            <div>
                {props.isAdmin && <p>This is private info. Please dont share!</p>}
                <WrappedComponent {...props} />
            </div>
        );
    };
}

const requireAuthenication = (WrappedComponent) => {
    return (props) => {
        return (
            <div>
                <h1>Some App</h1>   
                {props.isAuthenicated ? <WrappedComponent {...props} /> : <p>Please login.</p>}
            </div>
        );
    }
}

// const AdminInfo = fn(Info)
const AuthInfo = requireAuthenication(Info);

ReactDOM.render(<AuthInfo isAuthenicated={true} info='Welcome!'/>, document.getElementById('app'));