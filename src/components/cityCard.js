import React from "react";
import "../../src/styles.css";

export default function CityCard(props) {

  const {forecast} = props;
  //pass props to cards
  const cityName = forecast?.name;
  const temp = forecast?.main?.temp;
  const desc = forecast?.weather[0]?.main;

  return (
    <>
      <div className="card-container">
        <p className="card-title">{cityName}</p>
        <p>{temp}</p>
        <p>{desc}</p>
      </div>
    </>
  );
}
