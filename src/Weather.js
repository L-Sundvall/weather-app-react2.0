import React from "react";

export default function Weather () {
    return (
        <div>
    <h1 className="head-city" > Stockholm </h1>
    <div class="card-body">
            <div class="row">
              <div class="col-4">
                <ul id="time">
                  <li id="current-day"> Monday</li>
                  <li>
                    <span id="current-hour">14: </span>
                    <span id="current-minuets">00</span>
                  </li>
                </ul>
              </div>

              <div class="col-4">
                <span class="current-temp">
                  <h2>❄</h2>
                  <span id="temperature"> 0 </span>
                  <a href="#" id="celsius"> °C </a> <span id="slash"> |</span>
                  <a href="#" id="farenheit"> °F</a>
                </span>
              </div>

              <div class="col-4">
                <ul class="weather-list">
                  <li id="conditions">Conditions: Snow</li>
                  <li id="wind-speed">Wind: 5 km/h</li>
                  <li id="humidity">Humidity: 3%</li>
                </ul>
              </div>
            </div>
          </div>
</div> ); 
}