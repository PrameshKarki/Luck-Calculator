import React from "react";

// *Import classes
import classes from "./CSS/Button.module.css";
import "./CSS/Button.css";

const Button=props=>{
    return <button className={`${classes.btn} ${props.className || ''}`} onClick={props.onClick} type={props.type || 'button'}>{props.children}</button>

}

export default Button;