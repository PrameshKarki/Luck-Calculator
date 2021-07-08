import React, { useState } from "react";

// *Import Components
import Input from "../UI/Input";
import Button from "../UI/Button";

// *Import Classes
import classes from "./CSS/InputForm.module.css";

const InputForm =props => {
    // *Manage State of Input
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [dateOfBirth, setDateOfBirth] = useState("");

    // *Manage valid and invalid input state
    const [isValidFirstName, setIsValidFirstName] = useState(true);
    const [isValidLastName, setIsValidLastName] = useState(true);
    const [isValidDateOfBirth, setIsValidDateOfBirth] = useState(true);


    const firstNameChangeHandler = value => {
        setFirstName(value);
        // !Validation Logic Here
        setIsValidFirstName(true);
    }
    const lastNameChangeHandler = value => {
        setLastName(value);
        // !Validation Logic Here
        setIsValidLastName(true);
    }
    const dateOfBirthChangeHandler = value => {
        setDateOfBirth(value);
        // !Validation Logic Here
        setIsValidDateOfBirth(true);
    }

    const formSubmissionHandler=e=>{
        e.preventDefault();

        if(isValidLastName && isValidLastName && isValidDateOfBirth){
            const user={
                name:`${firstName} ${lastName}`,
                firstName,
                lastName,
                dateOfBirth:new Date(dateOfBirth)
            };
            props.onFormSubmission(user);

            setFirstName("");
            setLastName("");
            setDateOfBirth("");
        }
    }
    return (
        <div className="form__container">
            <form className="form" onSubmit={formSubmissionHandler}>
                <div className={classes.row}>
                    <Input name="firstName" className={!isValidFirstName ? 'invalid' : ""} label="First Name" type="text" value={firstName} minLength={2} maxLength={20} onChange={firstNameChangeHandler} />
                    <Input name="lastName" className={!isValidFirstName ? 'invalid' : ""} label="Last Name" type="text" value={lastName} onChange={lastNameChangeHandler} maxLength={20} />
                </div>
                <Input name="dateOfBirth" className={!isValidFirstName ? 'invalid' : ""} label="Date of Birth" value={dateOfBirth} onChange={dateOfBirthChangeHandler} type="date" />
                <Button className="calculate-btn" type="submit">Calculate</Button>
            </form>
        </div>
    );
};

// Export Component
export default InputForm;