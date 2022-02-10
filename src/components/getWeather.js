import React from "react";
import "../styles.css";
import CityCard from "./cityCard";

export default function getWeather() {
  return (
    <div className="App">
      <h1>Weather App</h1>

    <CityCard />
    </div>
  );
}
