import React from 'react';
import { WeatherProvider } from './context/WeatherContext';
import SearchBar from './components/SearchBar';
import WeatherCard from './components/WeatherCard';
import Forecast from './components/Forecast';
import Controls from './components/Controls';
import ErrorMessage from './components/ErrorMessage';
import FavoriteList from './components/FavoriteList';

const App = () => {
  return (
    <WeatherProvider>
      <div className={`app`}>
        <SearchBar />
        <Controls />
        <ErrorMessage />
        <FavoriteList />
        <WeatherCard />
        <Forecast />
      </div>
    </WeatherProvider>
  );
};

export default App;
