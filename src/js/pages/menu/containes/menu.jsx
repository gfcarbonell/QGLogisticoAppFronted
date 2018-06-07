import React from 'react';
import {Route} from 'react-router-dom';

const Menu = ({ match }) => {

    return (
        <div>
            <div>
                <Route exact path={`${match.url}`} component={()=> <li> Menu </li>} /> {/* Main */}
                <Route path={`${match.url}/dashboard/`} component={()=> <li> Das </li>} />
            </div>
        </div>
    );
};

export default Menu;