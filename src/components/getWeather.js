import React, { useState } from "react";
import "../styles.css";
import CityCard from "./cityCard";

export default function GetWeather() {
    // set up useState
  // track query, dislay cities
  const [city, setCity] = useState('');
  const [forecast, setForecast] = useState([]);

  const getCity = async (e) => {
    e.preventDefault();

  //create API variables 
  const APIkey = `d845519e939fee1ca0d40e76611f9818`;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${APIkey}`;
  
  //build a fetch response in a try catch
  try {
  const res = await fetch(url);
  const data = await res.json();
  setForecast(data);
  } catch (err) {
    console.error(err);
  }

};

  return (
    //basic input form to search by city
    <div>
      <h1 className="title">Weather App</h1>
      <CityCard forecast={forecast} />
      <form className="form" onSubmit={getCity}>
      <label className="label" htmlFor="city">
      <p>Search by City</p>
      </label>
      <input 
        className="input" 
        type="text" 
        name="query place"
        placeholder="i.e. Seattle"
        value={city} onChange={(e) => setCity(e.target.value)}
        >
      </input>
      <button 
      className="button" 
      type="submit"
      >Search</button>
      </form>
    </div>
  );
}
