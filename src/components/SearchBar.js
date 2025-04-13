import React, { useState } from "react";
import { useWeather } from "../context/WeatherContext";

const SearchBar = () => {
  const { fetchWeather } = useWeather();
  const [input, setInput] = useState("");

  const handleSearch = () => {
    if (input.trim()) fetchWeather(input);
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Enter city"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") handleSearch();
        }}
      />
      <button className="search-btn" onClick={handleSearch}>
        Search
      </button>
    </div>
  );
};

export default SearchBar;
