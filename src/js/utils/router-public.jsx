import React from 'react';
import { Route, Redirect } from 'react-router-dom';
//import { connect } from 'react-redux';
import PropTypes from 'prop-types';


const PublicRoute = ( { component: Component, authenticated, rest } ) => (
    <Route
        {...rest} 
        render={props => authenticated === false? <Component {...props}/>:<Redirect to='/' />}
        />
  )

PublicRoute.propTypes = {
    authenticated: PropTypes.bool.isRequired
};

PublicRoute.defaultProps = {
    authenticated: false,
};
/*
const mapStateToProps = state => ({
    auth: state.authenticateReducer.isAuthenticated,
});
export default connect(mapStateToProps)(PublicRoute);
*/
export default PublicRoute;