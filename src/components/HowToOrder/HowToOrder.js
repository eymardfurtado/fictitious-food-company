import React from 'react';
import classes from './HowToOrder.css';
import GoogleStoreImage from '../../assets/images/download-app-android.png'
import AppleStoreImage from '../../assets/images/download-app.svg'
import iPhone from '../../assets/images/app-iPhone.png';

const HowToOrder = (props) => {



    return (
        <section className={classes.HowToOrder}>
            <h2 >How it works — as simple as 1, 2, 3</h2>
            <div className={classes.Col1} >
                <img src={iPhone} />
            </div>
            <div className={classes.Col2} >
                <div className={classes.WorkSteps}>
                    <div>1</div>
                    <p>Choose the subscription plan that best fits your needs and sign up today.</p>
                </div>
                <div className={classes.WorkSteps}>
                    <div>2</div>
                    <p>Order your delicious meal using our mobile app or website. Or you can even call us!</p>
                </div>
                <div className={classes.WorkSteps}>
                    <div>3</div>
                    <p>Enjoy your meal after less than 20 minutes. See you the next time!</p>
                </div>
                <a href="#">
                    <img src={GoogleStoreImage} alt="Play Store Button" />
                </a>
                <a href="#">
                    <img src={AppleStoreImage} alt="AppStore Button" />
                </a>
            </div>
        </section>
    )
}

export default HowToOrder;
