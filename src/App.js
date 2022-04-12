import React from "react";
import './App.css';
import RestaurantsContainer from "./components/RestaurantsContainer";
import Login from "./components/Login";
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import EmployeeButton from "./components/EmployeeButton";


const App = () => {
    return <RestaurantsContainer />;
}   

function AppOne(){
    return(
    <Router>
            <Routes>
                <Route path="/" element={<RestaurantsContainer />} />
                <Route path="/login" element={<Login />} />
                <Route path="/employeebutton" element={<EmployeeButton />} />
            </Routes>
        </Router>
    )
}


export default AppOne;
