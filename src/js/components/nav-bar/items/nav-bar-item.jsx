import React from 'react';
import {Link} from "react-router-dom";

const NavBarItem = (props) => {
    let to = (props.to)? props.to : '/';
    return (
        <li> 
            <Link ref={props.setRef} to={to} onClick={props.onClick}>
                {props.children}
            </Link>
        </li>
    );
};


export default NavBarItem;