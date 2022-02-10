import React from "react";
import "../styles.css";
import CityCard from "./cityCard";

export default function getWeather() {
  // set up useState

  //fetch data 

  return (
    //basic input form to search by city
    <div className="App">
      <h1 className="title">Weather App</h1>
      <form className="form">
      <label className="label" htmlFor="query">
      <p>Search by City</p>
      </label>
      <input 
        className="input" 
        type="text" 
        name="query place"
        placeholder="i.e. Seattle">
      </input>
      <button className="button">Search</button>
      </form>
 
    <CityCard />
    </div>
  );
}
