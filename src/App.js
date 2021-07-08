import React, { useState } from "react";

// *Import Components
import InputForm from "./Components/InputForm";
import Card from "./UI/Card";
import ShowResult from "./Components/ShowResult";

// *Import classes from CSS Module
import classes from "./App.module.css";

const usersData = [];

const App = () => {
    // *Manage user data state
    const [users, setUsers] = useState(usersData);
    const formSubmissionHandler = user => {
        setUsers(previousUsers => {
            return [...previousUsers, user];
        })
    }
    return (
        <>
            <Card>
                <h1 className={classes.header__title}>Luck Calculator</h1>
                <p className={classes.header__description}>Enter  your details and predict your day how awesome it will be!</p>
                <InputForm onFormSubmission={formSubmissionHandler} />
            </Card>
            {users.length>0 &&<Card><ShowResult user={users.pop()}/></Card>}


        </>
    )
};


// *Export Component
export default App;