import React, { Component } from 'react'
import NavigationItem from './NavigationItem/NavigationItem';
import classes from './NavigationItems.css';
import Logo from '../../../components/Logo/Logo';

class NavigationItems extends Component {
    state = {
        scrolled: false,
        stickyOn: false,
        headerHeight: null,
        displayIcon: false,
        toolbar: {
            top: null
        }
    }

    componentDidMount() {
        let mobileStickyNav = document.getElementById('mobileStickyNav');
        let stickyNav = document.getElementById('stickyNav');
        window.addEventListener('scroll', () => {
            if (window.innerWidth < 518) {
                if (window.scrollY > 10) {
                    mobileStickyNav.style.backgroundColor = "rgba(51, 51, 51, 0.98)";
                    mobileStickyNav.style.backdropFilter = "blur(2px)";
                } else {
                    mobileStickyNav.style.backgroundColor = "transparent";
                    mobileStickyNav.style.backdropFilter = "none";
                }
            } else {
                if (window.scrollY > 10) {
                    stickyNav.style.backgroundColor = "rgba(51, 51, 51, 0.98)";
                    stickyNav.style.backdropFilter = "blur(2px)";
                } else {
                    stickyNav.style.backgroundColor = "transparent";
                    stickyNav.style.backdropFilter = "none";
                }
            }
        })
    }

    render() {
        return (
            <div id="header" className={classes.StickyNav} id="stickyNav">
                <a href='#toolbar' className={classes.logo}>
                    <Logo height='55px' color="white" display />
                </a>
                <ul className={classes.HeaderItems}>
                    <NavigationItem link="#about" exact >About</NavigationItem>
                    <NavigationItem link="#locations">Locations</NavigationItem>
                    <NavigationItem link="#plans">Plans</NavigationItem>
                    <NavigationItem link="#contact" >Contact</NavigationItem>
                </ul>
            </div>
        )
    }
}

export default NavigationItems;
