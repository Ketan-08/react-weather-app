import React, { createContext, useState, useEffect, useContext } from "react";

const WeatherContext = createContext();
export const useWeather = () => useContext(WeatherContext);

const API_KEY = process.env.REACT_APP_OPENWEATHER_API_KEY;

export const WeatherProvider = ({ children }) => {
  const [city, setCity] = useState("Mumbai");
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState([]);
  const [unit, setUnit] = useState("metric"); // or 'imperial'
  const [darkMode, setDarkMode] = useState(false);
  const [error, setError] = useState("");
  const [favorites, setFavorites] = useState(() => {
    const saved = localStorage.getItem("favorites");
    return saved ? JSON.parse(saved) : [];
  });

  const fetchWeather = async (cityName) => {
    try {
      setError("");
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=${unit}`
      );
      if (!res.ok) throw new Error("City not found");
      const data = await res.json();
      setWeather(data);
      setCity(cityName);

      const forecastRes = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${API_KEY}&units=${unit}`
      );
      const forecastData = await forecastRes.json();
      const daily = forecastData.list.filter((_, idx) => idx % 8 === 0);
      setForecast(daily);
    } catch (err) {
      setError(err.message);
    }
  };

  useEffect(() => {
    fetchWeather(city);
  }, [unit]);

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const addFavorite = (city) => {
    if (!favorites.includes(city)) {
      setFavorites([...favorites, city]);
    }
  };

  const removeFavorite = (city) => {
    setFavorites(favorites.filter((c) => c !== city));
  };

  return (
    <WeatherContext.Provider
      value={{
        city,
        setCity,
        weather,
        forecast,
        fetchWeather,
        unit,
        setUnit,
        darkMode,
        setDarkMode,
        error,
        favorites,
        addFavorite,
        removeFavorite,
      }}
    >
      <div className={darkMode ? "dark" : "light"}>{children}</div>
    </WeatherContext.Provider>
  );
};
