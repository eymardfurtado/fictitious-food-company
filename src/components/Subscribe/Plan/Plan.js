import React from 'react';
import classes from './Plan.css';
import Button from '../../UI/Button/Button';

const Plan = (props) => {

    return (
        <div className={classes.Plan}>
            <div className={classes.NameAndPrice}>
                <h3>{props.planName}</h3>
                <p className={classes.PlanPrice}>${props.planPrice}<span>/{props.period}</span></p>
                <p className={classes.PricePerMeal} style={props.pricePerMeal ? null : { color: 'transparent' }}>{props.pricePerMeal ? props.pricePerMeal : "\xa0"}</p>
            </div>
            <div className={classes.Description}>
                <ul> {Object.values(props.features).map(feature => {
                    return (
                        <div>
                            <div className={classes.Icon}>
                                {!feature[1] ? <ion-icon name="close-outline"></ion-icon> : <ion-icon name="checkmark-outline"></ion-icon>}
                            </div>
                            <li
                                key={feature + feature[0]}
                                style={feature[1] ? null : { color: 'rgb(202, 202, 202)', fontStyle: 'italic' }}
                            >{feature[0] ? feature[0] : "\xa0"}</li>
                        </div>)
                })}
                </ul>
            </div>
            <div className={classes.ButtonArea}>
                <Button btnType={props.btnType}>Subscribe</Button>
            </div>
        </div>
    )
}

export default Plan;
