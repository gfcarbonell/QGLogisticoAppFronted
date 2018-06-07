import React from 'react';
import {Link} from "react-router-dom";

const NavBarItem = (props) => {
    let to = (props.to)? props.to : '/';
    return (
        <li> 
            <Link to={to}>
                {props.children}
            </Link>
        </li>
    );
};


export default NavBarItem;