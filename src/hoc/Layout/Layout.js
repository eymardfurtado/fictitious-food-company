import React, { Component, Fragment } from 'react';
import classes from './Layout.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

class Layout extends Component {
    state = {
        showSideDrawer: false
    }

    sideDrawerClosedHandler = () => {
        this.setState({ showSideDrawer: false });
    }

    sideDrawerToggleHandler = () => {
        this.setState((prevState) => {
            return { showSideDrawer: !prevState.showSideDrawer };
        });
    }

    render() {
        return (
            <Fragment>
                <Toolbar
                    isAuth={this.props.isAuthenticated}
                    drawerToggleClicked={this.sideDrawerToggleHandler} />
                    
                <SideDrawer
                    isAuth={this.props.isAuthenticated}
                    open={this.state.showSideDrawer}
                    closed={this.sideDrawerClosedHandler}
                />
                <main className={classes.Content}>
                    {this.props.children}
                </main>
               
               
            </Fragment>
        )
    }
}


export default Layout;


/*

                <p>COPY this https://www.kickresume.com/en/help-center/front-end-developer-resume-sample/</p>
                <p>Section 1: Features
  Title: Get food fast — not fast food.
  
  Hello, we’re Omnifood, your new premium food delivery service. We know you’re always busy. No time for cooking. So let us take care of that, we’re really good at it, we promise!
  
  Up to 365 days/year
  Never cook again! We really mean that. Our subscription plans include up to 365 days/year coverage. You can also choose to order more flexibly if that's your style.
  
  Ready in 20 minutes
  You're only twenty minutes away from your delicious and super healthy meals delivered right to your home. We work with the best chefs in each town to ensure that you're 100% happy.
  
  100% organic
  All our vegetables are fresh, organic and local. Animals are raised without added hormones or antibiotics. Good for your health, the environment, and it also tastes better!
  
  Order anything
  We don't limit your creativity, which means you can order whatever you feel like. You can also choose from our menu containing over 100 delicious meals. It's up to you!
  
  
  
</p>
*/