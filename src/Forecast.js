import React from "react";
import "./Forecast.css";

export default function Forecast(){
    return (
        <div>
 <div className="row">
            <div className="col-3">
              <footer className="day1 days">
                <h6>
                  <span id="weekday1">Mon</span> 
                  <p id="day-emoji1" className="icon"> ❄ </p>
                  
                  <span id="day-1-temp">14</span> °C
                </h6>
              </footer>
            </div>

            <div className="col-3">
              <footer className="days">
                <h6>
                  <span id="weekday2"> Tue</span> 
                   <p id="day-emoji2" className="icon">❄  </p>
                
                  <span id="day-2-temp">14</span> °C
                </h6>
              </footer>
            </div>

            <div className="col-3">
              <footer className="day3 days">
                <h6>
                  <span id="weekday3"> Wed</span>
                  <p id="day-emoji3" className="icon"> ❄ </p>
               
                  <span id="day-3-temp">14 </span>°C
                </h6>
              </footer>
            </div>

            <div className="col-3">
              <footer className="day4 days">
                <h6>
                  <span id="weekday4">Thu</span>
                  <p id="day-emoji4" className="icon">❄  </p>
                  
                  <span id="day-4-temp">14</span> °C
                </h6>
              </footer>
            </div>

            
          </div>
          <br />
        </div>
        );
}