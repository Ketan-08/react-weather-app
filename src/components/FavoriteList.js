import React from "react";
import { useWeather } from "../context/WeatherContext";

const FavoriteList = () => {
  const { favorites, fetchWeather, removeFavorite } = useWeather();

  if (favorites.length === 0) return null;

  return (
    <div className="favorites-container">
      <h3 className="favorites-title">⭐ Your Favorite Cities</h3>
      <div className="favorites-grid">
        {favorites.map((city) => (
          <div key={city} className="favorite-card">
            <button
              className="city-btn"
              onClick={() => fetchWeather(city)}
            >
              {city}
            </button>
            <button
              className="remove-btn"
              onClick={() => removeFavorite(city)}
              title="Remove"
            >
              ❌
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FavoriteList;
