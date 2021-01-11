import React from "react";

export default function Forecast(){
    return (
        <div>
 <div className="row">
            <div className="col-sm-2">
              <footer ClassName="day1 days">
                <h6>
                  <span id="weekday1">Mon</span> <br />
                  <img src="" alt="clear" id="day-emoji1" ClassName="icon" />
                  <br />
                  <span id="day-1-temp">14</span> °C
                </h6>
              </footer>
            </div>

            <div ClassName="col-sm-2">
              <footer ClassName="day2 days">
                <h6>
                  <span id="weekday2"> Tue</span> <br />
                  <img src="" alt="clear" id="day-emoji2" ClassName="icon" />
                  <br />
                  <span id="day-2-temp">14</span> °C
                </h6>
              </footer>
            </div>

            <div ClassName="col-sm-2">
              <footer className="day3 days">
                <h6>
                  <span id="weekday3"> Wed</span> <br />
                  <img src="" alt="clear" id="day-emoji3" className="icon" />
                  <br />
                  <span id="day-3-temp">14 </span>°C
                </h6>
              </footer>
            </div>

            <div className="col-sm-2">
              <footer className="day4 days">
                <h6>
                  <span id="weekday4">Thu</span> <br />
                  <img src="" alt="clear" id="day-emoji4" className="icon" />
                  <br />
                  <span id="day-4-temp">14</span> °C
                </h6>
              </footer>
            </div>

            <div className="col-sm-2">
              <footer className="day5 days">
                <h6>
                  <span id="weekday5"> Fri</span> <br />
                  <img src="" alt="clear" id="day-emoji5" className="icon" />
                  <br />
                  <span id="day-5-temp">14</span> °C
                </h6>
              </footer>
            </div>
          </div>
          <br />
        </div>
        );
}