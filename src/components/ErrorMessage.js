import React from 'react';
import { useWeather } from '../context/WeatherContext';

const ErrorMessage = () => {
  const { error } = useWeather();
  return error ? <div className="error">{error}</div> : null;
};

export default ErrorMessage;
