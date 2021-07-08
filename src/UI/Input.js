import React from "react";

// *Import Classes
import classes from "./CSS/Input.module.css";
import "./CSS/Input.css";

const Input = props => {
    const inputChangeHandler=(e)=>{
        props.onChange(e.target.value);
    }
    return (
        <div className={classes.form__controls}>
            <input className={`${classes.form__control} ${props.className}`} name={props.name} type={props.type} minLength={props.minLength || 0} maxLength={props.maxLength || 255} value={props.value} onChange={inputChangeHandler} required />
            <span className={classes.placeholder}>{props.label}</span>
        </div>
    )
}

// *Export Component
export default Input;