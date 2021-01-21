import React, { useState } from "react";
import axios from "axios";
import "./Forecast.css";
import ForeCastDays from "./ForeCastDays";


export default function Forecast(props){
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);
 

  function showForecast(response) {
    console.log(response.data);
    setForecast(response.data);
    setLoaded(true);
  }

  if (loaded) {
    return (
      
         <ForeCastDays data={forecast.list[0]}/>
    )

      
         } else {

  let apiKey = "7e499109a815c2c14463aa26aad21ebb";
 let  apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=
    ${props.city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(showForecast);
    return null;
} 
}