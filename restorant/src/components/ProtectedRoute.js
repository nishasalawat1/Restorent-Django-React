import React from 'react';
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom';

const ProtectedRoute = ({ component: Cmp, ...rest }) => (
    <Route
        {...rest}
        render={(props) => (
            localStorage.getItem('token') ?
                (<Cmp {...props} />) :
                <Redirect to='/login' />
        )}
    />
);

export default ProtectedRoute;