import React from "react";
import './App.css';
import Weather from './Weather';
import Forecast from "./Forecast"


export default function App() {
  return (<div>
    <div className="App">
     <div className="container"> 
     <Weather defaultCity="Oslo"/>

     <Forecast />
   
       
   </div>
   </div>
   <p>
          <a
            href="https://github.com/L-Sundvall/weather-app-react2.0"
            target="_blank"
            rel="noreferrer"
            id="code-link"
          >
            Open source code</a
          >
         {" "} by{" "}  <a
            href="https://www.linkedin.com/in/linda-sundvall-ab241990"
            target="_blank"
            rel="noreferrer"
            id="code-link"
          >Linda Sundvall</a>
        </p>
    </div>
  );
}


