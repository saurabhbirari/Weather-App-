import React, { useState } from "react";
import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";

function WeatherApp() {
  const [weatherInfo, setWeatherInfo] = useState({
    city: "NA",
    feelslike: 0,
    temp: 0,
    tempMin: 0,
    tempMax: 0,
    humidity: 0,
    weather: "NA",
  });

  let updateInfo = (newInfo) => {
    setWeatherInfo(newInfo);
  };
  return (
    <div style={{ textAlign: "center" }}>
      <h2>Weather App</h2>
      <SearchBox updateInfo={updateInfo} />
      <InfoBox info={weatherInfo} />
    </div>
  );
}

export default WeatherApp;
