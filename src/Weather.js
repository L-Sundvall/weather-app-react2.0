import React from "react";
import "./Weather.css";

export default function Weather () {
    return (
        <div>
    <h1 className="head-city" > Stockholm </h1>
    <div className="card-body">
            <div className="row">
              <div className="col-4">
                <ul className="time">
                  <li className="current-day"> Monday</li>
                  <li>
                    <span className="current-hour">14: </span>
                    <span className="current-minuets">00</span>
                  </li>
                </ul>
              </div>

              <div className="col-4">
                <div className="current-temp">
                  <h2 className="day-emoji">❄</h2>
                  <span id="temperature"> 0 </span>
                  <button className="celsius"> °C </button> <span id="slash"> |</span>
                  <button className="farenheit"> °F</button>
                </div>
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