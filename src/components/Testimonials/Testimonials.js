import React from 'react';
import classes from './Testimonials.css';
import Testimonial from './Testimonial/Testimonial';
import customerPic1 from '../../assets/images/customer-1.jpg';
import customerPic2 from '../../assets/images/customer-2.jpg';
import customerPic3 from '../../assets/images/customer-3.jpg';


const Testimonials = (props) => {
    return (
        <section className={classes.Testimonials}>
            <h2 >
               Our Customers Love Us!
                </h2>

            <Testimonial
               pic={customerPic1}
               testimonial="
               Omnifood is just awesome! I just launched a startup which leaves me with no time for cooking, so Omnifood is a life-saver. Now that I got used to it, I couldn't live without my daily meals!
               "
               name="Alberto Duncan
               " 
            />
            <Testimonial
             pic={customerPic2}
             testimonial="
             Inexpensive, healthy and great-tasting meals, delivered right to my home. We have lots of food delivery here in Lisbon, but no one comes even close to Omifood. Me and my family are so in love!"
             name="Joana Silva" />
            <Testimonial
             pic={customerPic3}
             testimonial="
             I was looking for a quick and easy food delivery service in San Franciso. I tried a lot of them and ended up with Omnifood. Best food delivery service in the Bay Area. Keep up the great work!
             
                          "
             name="Milton Chapman
             " />




        </section >
    )
}



export default Testimonials;
