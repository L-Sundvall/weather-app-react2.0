import React, { useState } from "react";
import Searching from "./Searching";
import axios from "axios";
import "./Weather.css";

export default function Weather (props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response){
    setWeatherData({
    ready: true,
    temperature: Math.round(response.data.main.temp),
    humidity: response.data.main.humidity,
    time:new Date (response.data.dt * 1000),
    conditions: response.data.weather[0].description,
    wind: response.data.wind.speed,
    city: response.data.name,
    icon: response.data.weather[0].icon,
    realTemperature: Math.round(response.data.main.feels_like),
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    Search();
   }

  function changeCity(event) {
   setCity(event.target.value);
   }

 function Search() {
  const apiKey = "7e499109a815c2c14463aa26aad21ebb";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=
  ${city}&appid=${apiKey}&units=metric`;  
  axios.get(apiUrl).then(handleResponse);
 }
 
  function currenLocation(event) {
    event.preventDefault();
  navigator.geolocation.getCurrentPosition(searchCurrentLocation);
  }

  function searchCurrentLocation (position) {
    let apiKey = "7e499109a815c2c14463aa26aad21ebb";
    let latitude = position.coords.latitude
    let longitude = position.coords.longitude
    let apiUrlPosition = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
    axios.get(apiUrlPosition).then(handleResponse);
  }
  
  if (weatherData.ready) {
    return (
          <div className="Search-form">
           <div className="serchParty">
            <form onSubmit={handleSubmit}>
              <input
                type="search"
                placeholder="Search for a city"
                className="search-input"
                autoFocus ="on"
                onChange= {changeCity}
                />
                
              <input
               type="submit" 
               value="Search" 
               className="Search-button" />
               <button className="current-button" onClick={currenLocation}>📍</button>
            </form>
       </div>
       <Searching data={weatherData}/>
        <hr />  
        </div> 
        
         ); 
  } else { Search();
    return ("loading...");
    }
    }