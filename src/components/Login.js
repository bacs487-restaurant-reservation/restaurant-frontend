import React from "react";
import { useNavigate } from "react-router-dom";

function Login(){
    let navigate = useNavigate();
    return(
        <div>
            <header style={{textAlign: 'center'}}>Employee Login Page!</header>
            
            <form>
                <label>
                    Username:
                     <input type="text" name="name" />
                </label>
                <input type="submit" value="Submit" />
                <label>
                    Password:
                     <input type="text" name="name" />
                </label>
                <input type="submit" value="Submit" />
                <label>
                    RestaurantID:
                     <input type="text" name="name" />
                </label>
                <input type="submit" value="Submit" />
            </form>
            <ul>
                <li style={{textAlign: 'center'}}><button > Login </button></li>
            </ul>  
        </div>
    )
}

export default Login