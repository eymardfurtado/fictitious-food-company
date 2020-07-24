import React from 'react';
import classes from './FooterNavItem.css';

const FooterNavItem = (props) => {
    return (
        <li className={classes.FooterNavItem}>
            <a href="#"
            >{props.children}</a>
        </li>
    )
}

export default FooterNavItem;
