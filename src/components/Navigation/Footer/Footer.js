import React from 'react';
import FooterNavItem from './FooterNavItem/FooterNavItem';
import classes from './Footer.css';

const Footer = (props) => {
    return (
        <footer className={classes.Footer}>
            <div className={classes.myLinks}>
                <ul className={classes.Col1} >
                    <FooterNavItem link="/" >About</FooterNavItem>
                    <FooterNavItem link="/" >Projects</FooterNavItem>
                    <FooterNavItem link="/" >Contact</FooterNavItem>
                    <FooterNavItem link="/auth" login="true">Login</FooterNavItem>
                </ul>
                <div className={classes.Col2}>
                    <ul className={classes.SocialIcons}>
                        <FooterNavItem link="/" ><ion-icon name="logo-twitter"></ion-icon></FooterNavItem>
                        <FooterNavItem link="/" ><ion-icon name="logo-github"></ion-icon></FooterNavItem>
                        <FooterNavItem link="/orders"><ion-icon name="logo-facebook"></ion-icon></FooterNavItem>
                    </ul>
                </div>
            </div>
            <p>
                This webpage was created using React JS, HTML and CSS and Firebase as its server. Copyright &copy; 2020. All rights reserved. This webpage is a small sample of my work and skill. So go and do whatever you want with it and have fun. <br /> <br />
            </p>
        </footer>
    )
}

export default Footer;
