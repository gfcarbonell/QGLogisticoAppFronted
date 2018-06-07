import React from 'react';
import {Row, Input, Button, Icon} from 'react-materialize';
import {Link, Redirect} from 'react-router-dom';

import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

//Actions
import {loginAuth} from '../../../actions/authenticate';
import loginAvatar from '../../../../media/images/png/Key-1.png';

const mapStateToProps = (state, props) => {
    return {
        login: state.authenticateReducer,
    }
}

const mapDispatchToProps = (dispatch, props) => {
    const actions = {
        loginAuth: bindActionCreators(loginAuth, dispatch),
    };
    return actions;
}

class Login extends React.Component{
    handleSubmit = (event) =>{
        event.preventDefault();
        let user = JSON.stringify({
            username:this.inputUsername.input.value,
            password:this.inputPassword.input.value
        });
        this.props.loginAuth(user);
    }
    setInputUsername = (element) => {
        this.inputUsername = element;
    }
    setInputPassword = (element) => {
        this.inputPassword = element;
    }
    render(){
        return (
            <div className='container-center padding-simple margin-top-bottom-3'>
                <div className='login z-depth-3'>
                    <div className='login-header'>
                        <figure className='login-header-figure'>
                            <img className='login-header-figure-avatar z-depth-2' src={loginAvatar} alt={'Login'}/>
                        </figure>
                        <div>
                            <h5 className='login-title grey-text center-align'> Inicio de sesión </h5>
                        </div>
                    </div>
                    <div>
                        <form method='post' onSubmit={this.handleSubmit}>
                            <Row>
                                <Input s={12} ref={this.setInputUsername} label={'Nombre de usuario'} validate>
                                    <Icon>account_circle</Icon>
                                </Input>
                                <p className='error font-style-italic center-align red-text font-weight-bolder'> 
                                    {this.props.login.error? this.props.login.error.username:'' } 
                                </p>
                            </Row>
                            <Row>
                                <Input s={12} ref={this.setInputPassword} label={'Contraseña'} type={'password'} validate>
                                    <Icon>security</Icon>
                                </Input>
                                <p className='error font-style-italic center-align red-text font-weight-bolder'> 
                                    {this.props.login.error? this.props.login.error.password:'' } 
                                </p>
                            </Row>
                            <Row className='container-center'>
                                <Button className='red' type='submit' waves='light'>
                                    Iniciar sesión<Icon right>send</Icon>
                                </Button>
                            </Row>
                        </form>
                    </div>
                    <div className='container-center'> 
                        <Link to='forget' className='red-text font-weight-bolder hover-underline'> ¿Olvidaste tu contraseña? </Link>
                    </div>
                    <div>
                        <p>
                           
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Login);