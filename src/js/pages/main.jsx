import React from 'react';
import {withRouter, Switch} from 'react-router-dom';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
//Actions
//import {loginAuth} from '../actions/authenticate';
import {logoutAuth} from '../actions/authenticate';
//Main Components 
import Header from '../components/header/containers/header';
import Footer from '../components/footer/containers/footer';
import NavBar from '../components/nav-bar/containers/nav-bar';
import NavBarItem from '../components/nav-bar/items/nav-bar-item';
//Logo -> Entity
import logo from '../../media/images/png/QG-1.png';
//Pages 
//import Home from './home/containers/home';
//import Menu from './menu/containes/menu';
//Routes 
import PrivateRoute from '../utils/router-private';
import PublicRoute from '../utils/router-private';

const header = {
    logo:{
        src: logo,
        alt:this.title
    },
    entity: 'Quality Global',
    slogan: '"Nos gusta lo que hacemos, excelencia en nuestros servicios".'
}

const footer = {
    entity:'Quality Global',
    year: 2018,
    website: 'www.qygconsultores.com'
}

const mapStateToProps = (state, props) => {
    return {
        login: state.authenticateReducer,
    }
}

const mapDispatchToProps = (dispatch, props) => {
    const actions = {
        logoutAuth: bindActionCreators(logoutAuth, dispatch),
    };
    return actions;
}


class Main extends React.Component {
    
    render() {
        console.log(this.props.login);
        return (
            <div className='main'>
                <Header header={header} style={style.header}/>
                <NavBar style={style.navBar}>
                    <NavBarItem to={'/'}> Inicio </NavBarItem>
                    {this.props.login.isAuthenticated ? null : <NavBarItem to={'/login'} > Iniciar sesión </NavBarItem>}
                    {this.props.login.isAuthenticated ? <NavBarItem to={'/logout'} > Cerrar sesión </NavBarItem> : null}
                </NavBar>
                <section>
                    <main>
                        <Switch>
                            <PublicRoute exact isAuthenticated={true} path={'/'} component={()=><li> Inicio </li>}/>
                            <PublicRoute isAuthenticated={true} path={'/login'} component={()=><li> Login </li>}/>
                            <PrivateRoute isAuthenticated={true} path={'/dashboard'} component={()=><li> Dashboard </li>}/>
                        </Switch>
                    </main>
                </section>  
                <Footer footer={footer} style={style.footer}/>
            </div>
        );
    }
}

const style = {
    header:{
        background:'#7cb342', 
        borderBottom:'1px solid white'
    },
    footer:{
        background:'#7cb342', 
        borderTop:'1px solid white'
    },
    navBar:{
        background:'#558b2f', 
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
