import React, { useState } from "react";
import axios from "axios";
import "./Forecast.css";
import ForeCastDays from "./ForeCastDays";


export default function Forecast(props){
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);
 

  function showForecast(response) {
    setForecast(response.data);
    setLoaded(true);
  }

  if (loaded && props.city === forecast.city.name) {
    return (
      <div className="row">
         <div className= "col-3"> 
         <ForeCastDays data={forecast.list[7]}/>
         </div>
          <div className= "col-3"> 
         <ForeCastDays data={forecast.list[15]}/>
         </div>
          <div className= "col-3"> 
         <ForeCastDays data={forecast.list[23]}/>
         </div>
          <div className= "col-3"> 
         <ForeCastDays data={forecast.list[31]}/>
         </div>
    </div>);

      
         } else {

  let apiKey = "7e499109a815c2c14463aa26aad21ebb";
 let  apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=
    ${props.city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(showForecast);
    return "Try a larger city";
} 

}