import React from 'react';
import classes from './City.css';

const City = (props) => {
    return (
        <div className={classes.City} >
            <div className={classes.Picture}>
                <img src={props.picture} alt="Lisbon" />
            </div>

            <h3 className={classes.CityName}>{props.city}</h3>

            <div className={classes.Features}>

           <ion-icon name="person"></ion-icon>
                <p>{props.eaters}</p>
            </div>

            <div className={classes.Features}>

            <ion-icon name="star"></ion-icon>
                <p>{props.chefs}</p>
            </div>


            <div className={classes.Features}>
            <ion-icon name="logo-twitter"></ion-icon>
               
                <a href={"https://www.twitter.com/" + props.twitter} rel="noopener noreferrer" target="_blank">{props.twitter}</a>
            </div>

        </div>
    )
}

export default City;