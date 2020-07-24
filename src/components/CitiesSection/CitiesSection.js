import React from 'react';
import classes from './CitiesSection.css';
import Lisbon from '../../assets/images/cities/lisbon-3.jpg';
import SanFrancisco from '../../assets/images/cities/san-francisco.jpg';
import Berlin from '../../assets/images/cities/berlin.jpg';
import London from '../../assets/images/cities/london.jpg';
import City from './City/City';

const CITIES = {
    Lisbon: {
        name: "Lisbon",
        picture: Lisbon,
        eaters: "1600+ happy eaters",
        chefs: "60+ top chefs",
        twitter: "@omnifood_lx"
    },
    SanFrancisco: {
        name: "San Francisco",
        picture: SanFrancisco,
        eaters: '3700+ happy eaters',
        chefs: '160+ top chefs',
        twitter: '@omnifood_sf'
    },
    Berlin: {
        name: "Berlin",
        picture: Berlin,
        eaters: '2300+ happy eaters',
        chefs: '110+ top chefs',
        twitter: '@omnifood_berlin'

    },
    London: {
        name: "London",
        picture: London,
        eaters: '1200+ happy eaters',
        chefs: '50+ top chefs',
        twitter: '@omnifood_london'
    }
}

const CitiesSection = (props) => {

    let cities = Object.keys(CITIES).map(city => {
        return (
            <City
                key={CITIES[city].twitter}
                city={CITIES[city].name}
                picture={CITIES[city].picture}
                eaters={CITIES[city].eaters}
                chefs={CITIES[city].chefs}
                twitter={CITIES[city].twitter}
            />
        );
    })

    return (
        <section className={classes.CitiesSection} id="locations">
            <h2 >We're currently in these cities</h2>
            {cities}
        </section >
    )
}



export default CitiesSection;
