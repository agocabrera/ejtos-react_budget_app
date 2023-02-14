import React, { useState, useContext } from "react";
import { AppContext } from "../context/AppContext";

const Budget = () => {
    const { budget, dispatch } = useContext(AppContext);

    // const [budget, setBudget] = useState("");

    const increaseBudget = (value) => {
        dispatch({
            type: "SET_BUDGET",
            payload: value
        });
    };

    return (
        <div className="alert alert-secondary">
        <span>Budget: £</span>
            <input
                required='required'
                type='number'
                value={budget}
                step="10"
                onChange={(event) => increaseBudget(event.target.value)}>
            </input>
        </div>
    );
};

export default Budget;