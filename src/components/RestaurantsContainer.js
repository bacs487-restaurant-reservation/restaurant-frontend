import React, {useState, useEffect, useRef} from "react";
import RestaurantCard from "./RestaurantCard";
import "./RestaurantsContainer.css"
import {getAllRestaurants} from "./restaurants";
import Login from "./Login";
import { useNavigate } from "react-router-dom";


const RestaurantsContainer = () => {

    

    const [searchTerm, setSearchTerm] = useState("");
    const [searchResults, setSearchResults] = useState([]);
    const handleChange = event => {
        setSearchTerm(event.target.value)
        console.log(searchTerm);
    };
    const [restaurants, setRestaurants] = useState([]);
    const componentIsMounted = useRef(true);

    const { search } = window.location;
    const query = new URLSearchParams(search).get('s');

    // Create list of all restaurants
    useEffect(() => {
        getAllRestaurants()
            .then(response => {
                if (componentIsMounted.current) {
                    setRestaurants(response);
                }
            })
            .catch(err => {
                console.log(err);
            });
        return () => {
            componentIsMounted.current = false;
        }
    }, []);

    useEffect(() => {
        const results = restaurants.filter(restaurant => {
            restaurant.restaurant.zip_code.includes(searchTerm)
        });
        setSearchResults(results);
    }, [searchTerm]);

    
     let navigate = useNavigate();
    
    return (
    <>
        <div className="main-div">
                <center>
                    <input
                        type="text"
                        placeholder="Search a zi
                        p-code"
                        value={searchTerm}
                        onChange={handleChange} />

                </center>

                <button  onClick={() =>(navigate("/login"))} style={{ marginLeft: "auto" }}>
                    Employee Login
                </button>
                {/* <button style={{ marginLeft: "auto" }}> Employee Login</button> */}


                <div className="restaurants-container">

                    {restaurants.map(item => {
                        return <RestaurantCard key={item.id} restaurant={item}   />
                    })}

                </div>
            </div></>

    )
}

export default RestaurantsContainer;