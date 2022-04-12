// Employee Button is only used for employees to click, which then will take them to the login page
// where they can enter their username and password

import React from "react";
import { useNavigate } from "react-router-dom";
import Login from "./Login";

function EmployeeButton(){
    // navigate is what allows us to route
    let navigate = useNavigate();
    return(
        <div style={{ display: "flex" }}>
                <button onClick={() =>(navigate("/login"))} style={{ marginLeft: "auto" }}>
                    Employee Login
                </button>
        </div> 
    )
            
}

export default EmployeeButton