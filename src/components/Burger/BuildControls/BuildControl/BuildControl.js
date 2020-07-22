import React from 'react';
import classes from './BuildControl.module.css';

const BuildControl = (props) => (
    
    <div className={classes.BuildControl}>
        <div className={classes.Label}>{props.Label}</div>
        <button className={classes.Less} 
                onClick={() => props.remove(props.type)} 
                disabled={props.dissable}>Less</button>
        <button className={classes.More} 
                onClick={() => props.add(props.type)}>More</button>

    </div>
)

export default BuildControl;