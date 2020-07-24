import React from 'react';
import classes from './SectionItems.css';

const SectionItem = (props) => {
    return (
        <div className={classes.SectionItem} >
            <div className={classes.Icon}>
                {props.icon}
                </div>
            <h3 className={classes.myh3}>{props.title}</h3>
            <br/>
    <p className={classes.myParagraph}>{props.paragraph}</p>
                
        </div>
    )
}

export default SectionItem;