import React from 'react';
import classes from './DrawerToggle.css';
import Logo from '../../../Logo/Logo'

const DrawerToggle = (props) => {
    return (


        <div className={classes.DrawerToggle} onClick={props.clicked}>
            <div></div>
            <div></div>
            <div></div>

        </div>
    )
}

export default DrawerToggle;
