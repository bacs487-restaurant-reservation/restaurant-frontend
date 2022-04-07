import React from "react";
import "./RestaurantCard.css";

const RestaurantCard = ({ restaurant }) => {
    return (
        <div className="restaurant-card">
            <h3>{restaurant.restaurant_name}</h3>
            <div className="restaurant-info-container">
                <h4>Description:</h4>
                <p>{restaurant.description}</p>
            </div>
            <div className="restaurant-info-container">
                <img className="restaurant-photo" src={restaurant.url} alt="Restaurant Image" />
            </div>
        </div>
    );
};

export default RestaurantCard;