import React from "react";
import "./Weather.css";

export default function Weather () {
    return (
        <div>
    <h1 className="head-city" > Stockholm </h1>
    <div className="card-body">
            <div className="row">
              <div className="col-4">
                <ul id="time">
                  <li id="current-day"> Monday</li>
                  <li>
                    <span id="current-hour">14: </span>
                    <span id="current-minuets">00</span>
                  </li>
                </ul>
              </div>

              <div className="col-4">
                <span className="current-temp">
                  <h2 className="day-emoji">❄</h2>
                  <span id="temperature"> 0 </span>
                  <button className="celsius"> °C </button> <span id="slash"> |</span>
                  <button className="farenheit"> °F</button>
                </span>
              </div>

              <div className="col-4">
                <ul className="weather-list">
                  <li id="conditions">Conditions: Snow</li>
                  <li id="wind-speed">Wind: 5 km/h</li>
                  <li id="humidity">Humidity: 3%</li>
                </ul>
              </div>
            </div>
          </div>
</div> ); 
}