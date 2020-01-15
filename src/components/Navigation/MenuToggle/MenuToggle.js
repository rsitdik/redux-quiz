import React from 'react';
import classes from './MenuToggle.module.css';
import ClearIcon from '@material-ui/icons/Clear';
import DehazeIcon from '@material-ui/icons/Dehaze';


const MenuToggle = (props) => {

    return (
        props.isOpen
            ? <p className={classes.ClearIcon}>
                <ClearIcon
                    onClick={props.onToggle}
                /></p>
            : <p className={classes.DehazeIcon}><DehazeIcon
                onClick={props.onToggle}
            /></p>
    )
};

export default MenuToggle;