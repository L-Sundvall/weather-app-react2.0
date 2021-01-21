import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./Forecast.css";


export default function ForeCastDays (props){
   function Forecastweekday(){ 
    let days = [
      "Sunday", 
        "Monday", 
          "Tuesday", 
          "Wednesday", 
          "Thursday", 
        "Friday", 
      "Saturday"];
   
       
     let date = new Date(props.data.dt * 1000);
     let day = days[date.getDay()];

     return (`${day}`);
    }
       return(
      
       <div className="Forecastweekday">
        {Forecastweekday()}
           <WeatherIcon code= {props.data.weather[0].icon}/>
      {Math.round(props.data.main.temp)} °C
      </div>
   )

    }