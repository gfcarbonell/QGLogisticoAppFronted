import React from 'react';
import { Route, Redirect } from 'react-router-dom';
//import { connect } from 'react-redux';
import PropTypes from 'prop-types';


const PublicRoute = ( { component: Component, isAuthenticated, rest } ) => (
    <Route
        {...rest} 
        render={props => isAuthenticated === false? <Component {...props}/>:<Redirect to='/dashboard' />}
        />
  )

PublicRoute.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired
};

PublicRoute.defaultProps = {
    isAuthenticated: false,
};
/*
const mapStateToProps = state => ({
    auth: state.authenticateReducer.isAuthenticated,
});
export default connect(mapStateToProps)(PublicRoute);
*/
export default PublicRoute;