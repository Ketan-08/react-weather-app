import React from 'react';
import { useWeather } from '../context/WeatherContext';

const Forecast = () => {
  const { forecast, unit } = useWeather();

  return (
    <div className="forecast">
      {forecast.map((day, idx) => (
        <div key={idx} className="forecast-card">
          <p>{new Date(day.dt_txt).toLocaleDateString()}</p>
          <img
            src={`https://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`}
            alt={day.weather[0].description}
          />
          <p>High: {Math.round(day.main.temp_max)}°{unit === "metric" ? "C" : "F"}</p>
          <p>Low: {Math.round(day.main.temp_min)}°{unit === "metric" ? "C" : "F"}</p>
        </div>
      ))}
    </div>
  );
};

export default Forecast;
