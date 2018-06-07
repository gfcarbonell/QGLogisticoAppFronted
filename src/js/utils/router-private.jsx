import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

const PrivateRoute = ({ component: Component, authenticated, ...rest }) => (
    <Route 
        {...rest} 
        render={props => authenticated === true ? 
            (<Component {...props} />) : 
            (<Redirect to={ { pathname: '/login', state: { from: props.location }}}/>)
        }
    />
);

PrivateRoute.propTypes = {
    authenticated: PropTypes.bool.isRequired
};

export default PrivateRoute;