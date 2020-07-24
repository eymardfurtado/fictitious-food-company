import React from 'react';
import classes from './Subscribe.css';
import Plan from './Plan/Plan';

const PLANS = {
    Premium: {
        planName: "Preium",
        planPrice: "399",
        period: "month",
        pricePerMeal: "Thats only $13.30 per meal",
        btnType: "Important",
        features: {
            feat1: ["1 meal everyday", true],
            feat2: ["Order 24/7", true],
            feat3: ["Access to newest creations", true],
            feat4: ["Free delivery", true]
        }
    },
    Pro: {
        planName: "Pro",
        planPrice: "149",
        period: "month",
        pricePerMeal: "That's only $14.90 per meal",
        btnType: "Ghost",
        features: {
            feat1: ["1 meal 10 days/month", true],
            feat2: ["Order 24/7", true],
            feat3: ["Access to newest creations", true],
            feat4: ["Free delivery", true]
        }
    },
    Starter: {
        planName: "Starter",
        planPrice: "19",
        period: "meal",
        pricePerMeal: "",
        btnType: "Ghost",
        features: {
            feat1: ["1 meal", true],
            feat2: ["Order from 8 am to 12 pm", true],
            feat3: ["Access to newest creations", false],
            feat4: ["Free delivery", true]
        }
    }
}

const Subscribe = (props) => {

    let plans = Object.keys(PLANS).map(plan => {
        return (
            <Plan
                key={PLANS[plan].planName}
                planName={PLANS[plan].planName}
                planPrice={PLANS[plan].planPrice}
                period={PLANS[plan].period}
                pricePerMeal={PLANS[plan].pricePerMeal}
                btnType={PLANS[plan].btnType}
                features={PLANS[plan].features}
            />
        );
    })

    return (
        <section className={classes.Subscribe} id="plans">
            <h2 >Start eating healthy today</h2>
            {plans}
        </section >
    )
}

export default Subscribe;
