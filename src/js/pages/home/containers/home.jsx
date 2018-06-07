import React from 'react';
import {Route} from 'react-router-dom';
import SectionLogin from '../sections/login';


const Home = ({ match }) => {
    return (
        <div>
            <div>
                <Route exact path={`${match.url}`} component={()=> <li> Inicio </li>} /> {/* Main */}
                <Route path={`${match.url}login/`} component={SectionLogin} />
                <Route path={`${match.url}logout/`} component={()=> <li> Logout </li>} />
                <Route path={`${match.url}change-password/`} component={()=> <li> Change Contraseña </li>} />
                <Route path={`${match.url}reset-password/`} component={()=> <li> Restablecer Contraseña </li>} />
                <Route path={`${match.url}about/`} component={()=> <li> Acerca </li>} />
            </div>
        </div>
    );
};

export default Home;