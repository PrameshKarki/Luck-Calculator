import React from "react";

// *Import classes
import classes from "./CSS/ShowResult.module.css";

const ShowResult=props=>{
    const luck=Math.floor(Math.random()*101);
    return (
        <>
            <h1 className={classes.header__title}>Hello {props.user.firstName},Today you are about <span className={classes.luck_display}>{luck}%</span> lucky.</h1>
            <small className={classes.note}>Note:This is just fun project.Don't take it seriously.Have a great day!</small>
        </>
    );
};

// *Export Component
export default ShowResult;