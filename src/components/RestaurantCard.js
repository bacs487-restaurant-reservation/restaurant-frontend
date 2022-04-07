import React from "react";
import "./RestaurantCard.css";

const RestaurantCard = ({ restaurant }) => {
    return (
        <div className="restaurant-card">
            <div className="restaurant-info-container-img">
                <img className="restaurant-photo" src={restaurant.url} alt="Restaurant Image" />
            </div>
            <h3>{restaurant.restaurant_name}</h3>
            <div className="restaurant-info-container">
                <p className="description">{restaurant.description}</p>
            </div>
        </div>
    );
};

export default RestaurantCard;