import React, {useState, useEffect, useRef} from "react";
import RestaurantCard from "./RestaurantCard";
import "./RestaurantsContainer.css"
import {getAllRestaurants} from "./restaurants";

const RestaurantsContainer = () => {

    const [searchTerm, setSearchTerm] = useState("");
    const [searchResults, setSearchResults] = useState([]);
    const handleChange = event => {
        setSearchTerm(event.target.value)
        console.log(searchTerm);
    };
    const [restaurants, setRestaurants] = useState([]);
    const componentIsMounted = useRef(true);

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

    return (

        <div>

            <center>
                <input
                type="text"
                placeholder="Search a zip-code"
                value={searchTerm}
                onChange={handleChange}
                />
            </center>

            <div className="restaurants-container">

                {restaurants.map(item => {
                    return <RestaurantCard key={item.id} restaurant={item}/>
                })}

            </div>
        </div>

    )
}

export default RestaurantsContainer;