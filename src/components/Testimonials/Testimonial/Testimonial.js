import React from 'react';
import classes from './Testimonial.css';

import customerPic from '../../../assets/images/customer-1.jpg';

const Testimonial = (props) => {
    return (
        <div className={classes.Testimonial}>
            <div className={classes.BigQuote}>&#8220;</div>
            <blockquote>

{props.testimonial}
<cite>
                    <img src={props.pic} />
                    {props.name}</cite>
            </blockquote>
        </div>
    )
}



export default Testimonial;
