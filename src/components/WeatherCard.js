import React from "react";
import { useWeather } from "../context/WeatherContext";

const WeatherCard = () => {
  const { weather, unit, favorites, addFavorite, removeFavorite } =
    useWeather();
  if (!weather) return null;

  const { name, sys, main, weather: w, wind } = weather;
  const icon = `https://openweathermap.org/img/wn/${w[0].icon}@2x.png`;

  const city = name;
  const isFavorite = favorites.includes(city);

  const handleFavoriteToggle = () => {
    if (isFavorite) removeFavorite(city);
    else addFavorite(city);
  };

  return (
    <div className="weather-card">
      <h2>
        {name}, {sys.country}
      </h2>
      <img src={icon} alt={w[0].description} />
      <p>
        {Math.round(main.temp)}°{unit === "metric" ? "C" : "F"}
      </p>
      <p>{w[0].main}</p>
      <p>Humidity: {main.humidity}%</p>
      <p>
        Wind: {wind.speed} {unit === "metric" ? "km/h" : "mph"}
      </p>
      <button onClick={handleFavoriteToggle} className="favorite-btn">
        {isFavorite ? "✅ Saved" : "⭐ Save"}
      </button>
    </div>
  );
};

export default WeatherCard;
