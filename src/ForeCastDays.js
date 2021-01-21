import React from "react";
import WeatherIcon from "./WeatherIcon";


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
     let day = date.getDay();
     return (`${day}`);
    }
       return(
       <div> 
        
           <WeatherIcon code= {props.data.weather[0].icon}/>
      {Math.round(props.data.main.temp)} °C
      </div>
   )

    }