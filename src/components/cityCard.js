import React from "react";
import "../../src/styles.css";

export default function CityCard({ forecast }) {
  //pass props to cards
  const cityName = forecast.name;
  const temp = forecast.main.temp;

  return (
      <div className="card-container">
        <p className="card-title">{cityName}</p>
        <p>Temp: {temp} </p>
      </div>

  );
}
