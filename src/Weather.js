import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import FormatDate from "./FormatDate";
export default function Weather () {
  const [weatherData, setWeatherData] = useState({ready: false});
 
  function handleResponse(response){
    setWeatherData({
    ready: true,
    time:new Date (response.data.dt * 1000),
    city: response.data.name,
    temperature: Math.round(response.data.main.temp),
    realTemperature: Math.round(response.data.main.feels_like),
    humidity: response.data.main.humidity,
    wind: response.data.wind.speed,
    conditions: response.data.weather[0].description
    });
  
 
  }
  if (weatherData.ready){
return (
        <div>
    <h1 className="head-city" > {weatherData.city} </h1>
    <div className="card-body">
            <div className="row">
              <div className="col-4">
                <ul className="time">
                  <li className="current-day"> Monday</li>
                  <li>
                    <FormatDate date={weatherData.date} />
                  </li>
                </ul>
              </div>

              <div className="col-4">
                <div className="current-temp">
                  <h2 className="day-emoji">❄</h2>
                  <span id="temperature"> {weatherData.temperature} </span>
                  <button className="celsius"> °C </button> <span id="slash"> |</span>
                  <button className="farenheit"> °F</button>
                  <div className= "realFeel">(Feels like {weatherData.realTemperature} °C) </div>
                </div>
              </div>

              <div className="col-4">
                <ul className="weather-list">
                  <li id="conditions">Conditions: {weatherData.conditions}</li>
                  <li id="wind-speed">Wind: {weatherData.wind} km/h</li>
                  <li id="humidity">Humidity: {weatherData.humidity}%</li>
                </ul>
              </div>
            </div>
          </div>
</div> ); 
  } else {
 let apiKey = "7e499109a815c2c14463aa26aad21ebb";
  let city = "stockholm" 
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=
    ${city}&appid=${apiKey}&units=metric`;  
 axios.get(apiUrl).then(handleResponse);
    return ("loading...");
  }
 
}