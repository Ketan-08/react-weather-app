import React from 'react';
import { useWeather } from '../context/WeatherContext';

const Controls = () => {
  const { unit, setUnit, darkMode, setDarkMode } = useWeather();

  return (
    <div className="controls">
      <button className='toggle-btn' onClick={() => setUnit(unit === 'metric' ? 'imperial' : 'metric')}>
        Toggle °C/°F
      </button>
      <button className='toggle-btn' onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
      </button>
    </div>
  );
};

export default Controls;
