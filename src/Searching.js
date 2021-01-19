import React from "react";
import "./Searching.css";
import FormatDate from "./FormatDate";
import WeatherIcon from "./WeatherIcon";
import Temperature from "./Temeparute";

export default function Searching (props) {
  return (<div className= "Searching">   
  <h1 > {props.data.city} </h1>
  <hr />
    <div className="card-body">
            <div className="row">
              <div className="col-4">
                <ul className="time">   
                  <li className="currentDay">
                    <FormatDate date={props.data.time} /> </li>
                    <li className="conditions"> {props.data.conditions}</li>
                </ul>
              </div>


              <div className="col-4">
                <div className="current-temp">
                  <WeatherIcon code={props.data.icon} /> <br />
                  <Temperature celsius={props.data.temperature} reelFeel={props.data.realTemperature} />
                </div>
              </div>

              <div className="col-4">
                <ul className="weather-list">
                  
                  <li className="wind-speed"><strong>Wind:</strong> {props.data.wind} km/h</li>
                  <li className="humidity"><strong> Humidity:</strong> {props.data.humidity}%</li>
                </ul>
              </div>
            </div>
          </div>
          </div>);
}