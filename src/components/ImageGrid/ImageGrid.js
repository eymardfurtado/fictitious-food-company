import React from 'react';
import classes from './ImageGrid.css';
import image1 from '../../assets/images/mealImages/1.jpg';
import image2 from '../../assets/images/mealImages/2.jpg';
import image3 from '../../assets/images/mealImages/3.jpg';
import image4 from '../../assets/images/mealImages/4.jpg';
import image5 from '../../assets/images/mealImages/5.jpg';
import image6 from '../../assets/images/mealImages/6.jpg';
import image7 from '../../assets/images/mealImages/7.jpg';
import image8 from '../../assets/images/mealImages/8.jpg';

const ImageGrid = (props) => {
    return (
        <section className={classes.ImageGrid}>
            <ul>
                <li>
                    <figure>
                        <img src={image1} alt="Korean bibimbap with egg and vegetables" />
                    </figure>
                </li>
                <li>
                    <figure>

                        <img src={image2} alt="" />
                    </figure>
                </li>
                <li>
                    <figure>
                        <img src={image3} alt="" />
                    </figure>
                </li>
                <li>
                    <figure>
                        <img src={image4} alt="" />
                    </figure>
                </li>
                <li>
                    <figure>
                        <img src={image5} alt="" />
                    </figure>
                </li>
                <li>
                    <figure>
                        <img src={image6} alt="" />
                    </figure>
                </li>
                <li>
                    <figure>
                        <img src={image7} alt="" />
                    </figure>
                </li>
                <li>
                    <figure>
                        <img src={image8} alt="" />
                    </figure>
                </li>
            </ul>
        </section>
    )
}

export default ImageGrid;
