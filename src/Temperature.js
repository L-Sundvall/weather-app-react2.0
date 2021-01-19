import React, {useState} from "react";

export default function Temperature(props){
    const [unit, setUnit] = useState(`celsius`)

    function convertToCelsius(event){
        event.preventDefault();
       
    }
    function convertToFahrenheit(event){
        event.preventDefault();
        setUnit(`Fahrenheit`);
    }
   if (unit === `celsius`) {
    return ( 
                <div>
      <span className="temperature"> {Math.round(props.celsius)} </span>
                  <button className="celsius" > °C </button> <span id="slash">|</span>
                <button className="farenheit" onClick={convertToFahrenheit}>°F </button>
                  <div className= "realFeel">(Feels like {props.reelFeel} °C) </div>
                  </div> );}
                  else { if(unit === `Fahrenheit`){
                      return (
                      <div>
                  <span className="temperature"> {Math.round((props.celsius* 9/5) + 32)} </span>
                  <button className="farenheit">°F</button>
                  <span id="slash">|</span>
                   <button className="celsius" onClick={convertToCelsius}> °C </button>
                  <div className= "realFeel">(Feels like {Math.round(props.reelFeel* 9/5) + 32} °F) </div>
                  </div> ); }
                  }
                      }
                  
