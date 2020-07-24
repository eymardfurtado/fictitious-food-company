import React from 'react';
import WhiteLogo from '../../assets/images/logo-white.png';
import BlackLogo from '../../assets/images/logo.png';
import classes from './Logo.css';

const Logo = (props) => {
    let logo;
    if (props.display) {
        if (props.color === "white") {
            logo = (
                <div className={classes.Logo} style={{ height: props.height }}>
                    <img src={WhiteLogo} alt="My Logo" />
                </div>
            )
        } else if (props.color === "black") {
            logo = (
                <div className={classes.Logo} style={{ height: props.height }}>
                    <img src={BlackLogo} alt="My Logo" />
                </div>
            );
        }
    } else {
        logo = <div></div>;
    }
    return logo;
}

export default Logo;