import { StrictMode } from "react";
import ReactDOM from "react-dom";
import GetWeather from "./components/getWeather";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <GetWeather />
  </StrictMode>,
  rootElement
);
