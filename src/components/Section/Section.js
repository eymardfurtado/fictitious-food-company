import React from 'react';
import classes from "../Section/Section.css"

import SectionItem from './SectionItems/SectionItems';

const Section = (props) => {
    return (
        <section className={classes.Section} id='about'>
            <div className={classes.SectionHeader}>
                <h2 className={classes.myh2}>Get food fast — not fast food.</h2>
                <p>Hello! Omnifood is a <strong><u>fictitious</u></strong> meal delivery company used to built this site as a sample of my work  — 
                built with React JS and Firebase. You can reach me at &nbsp;
 <a href = "mailto: EymardFurtado@gmail.com">EymardFurtado@gmail.com</a> or contact me through the contact form here. </p>
            </div>

            <SectionItem
                paragraph="Never cook again! We really mean that. Our subscription plans include up to 365 days/year coverage. You can also choose to order more flexibly if that's your style."
                title="Up to 365 days/year"
                icon={<ion-icon name="infinite-outline"></ion-icon>}
            />

            <SectionItem
                paragraph="You're only twenty minutes away from your delicious and super healthy meals delivered right to your home. We work with the best chefs in each town to ensure that you're 100% happy."
                title="Ready in 20 minutes"
                icon={<ion-icon name="alarm-outline"></ion-icon>}
            />
            <SectionItem
                paragraph="All our vegetables are fresh, organic and local. Animals are raised without added hormones or antibiotics. Good for your health, the environment, and it also tastes better!"
                title="100% organic"
                icon={<ion-icon name="nutrition-outline"></ion-icon>}
            />
            <SectionItem
                paragraph="We don't limit your creativity, which means you can order whatever you feel like. You can also choose from our menu containing over 100 delicious meals. It's up to you!"
                title="Order anything"
                icon={<ion-icon name="cart-outline"></ion-icon>}
            />

            {/* 
            <NavigationItem link="/" >About</NavigationItem>
            <NavigationItem link="/" >Projects</NavigationItem>
            <NavigationItem link="/" >Contact</NavigationItem>

            {props.isAuth 
            ? <NavigationItem link="/orders">My Orders</NavigationItem> 
            : null }
            {!props.isAuth
                ? <NavigationItem link="/auth" login="true">Login</NavigationItem>
                : <NavigationItem link="/logout">Logout</NavigationItem>}
            */}
            <div className={classes.marginDiv}>.</div>
        </section>
    )
}



export default Section;
