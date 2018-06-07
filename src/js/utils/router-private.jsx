import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

const PrivateRoute = ({ component: Component, isAuthenticated, ...rest }) => (
    <Route 
        {...rest} 
        render={props => isAuthenticated === true ? 
            (<Component {...props} />) : 
            (<Redirect to={ { pathname: '/', state: { from: props.location }}}/>)
        }
    />
);

PrivateRoute.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired
};

export default PrivateRoute;