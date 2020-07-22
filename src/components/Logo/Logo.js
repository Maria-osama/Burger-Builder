import React from 'react';
import classes from './Logo.module.css';
import BurgerLoro from '../../burgerLogo.png';

const logo = (props) => (
    <div className={classes.Logo}>
        <img src={BurgerLoro} alt="MyBurger"/>
    </div>
)

export default logo;