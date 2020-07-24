import React from 'react';
import classes from './Toolbar.css';
import Button from '../../UI/Button/Button'
import NavigationItems from '../NavigationItems/NavigationItems';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';
import Logo from '../../Logo/Logo';




const Toolbar = (props) => {

    return (
        <div>
            <header className={classes.Toolbar} id="toolbar">
                <div className={classes.StickyNav} id='mobileStickyNav'>
                    <DrawerToggle clicked={props.drawerToggleClicked} />
                    <a href='#toolbar' className={classes.logo}>
                        <Logo height='55px' color="white" display />
                    </a>
                    <nav className={classes.DesktopOnly}>
                        <NavigationItems isAuth={props.isAuth} />
                    </nav>
                </div>
                <div className={classes.HeroTextBox} id="headerMessage">
                    <h6>Goodbye Fast Food. <br />Hello Healthy Food.</h6>
                    <a href="#contact">
                        <Button btnType="Important" href='#contact'>
                            Contact</Button></a>
                    <a href="#plans">
                        <Button btnType="Ghost">Plans</Button></a>
                </div>
            </header>
        </div>
    )
}

export default Toolbar

