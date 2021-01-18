import React from "react";
import "./Searching.css";
import FormatDate from "./FormatDate";

export default function Searching (props) {
  return (<div className= "Searching">   
  <h1 > {props.data.city} </h1>
    <div className="card-body">
            <div className="row">
              <div className="col-4">
                <ul className="time">
                  <li className="current-day"> </li>
                  <li>
                    <FormatDate date={props.data.time} />
                  </li>
                </ul>
              </div>


              <div className="col-4">
                <div className="current-temp">
                  <h2 className="day-emoji">❄</h2>
                  <span id="temperature"> {props.data.temperature} </span>
                  <button className="celsius"> °C </button> <span id="slash"> |</span>
                  <button className="farenheit"> °F</button>
                  <div className= "realFeel">(Feels like {props.data.realTemperature} °C) </div>
                </div>
              </div>

              <div className="col-4">
                <ul className="weather-list">
                  <li id="conditions"><strong>Conditions:</strong> {props.data.conditions}</li>
                  <li id="wind-speed"><strong>Wind:</strong> {props.data.wind} km/h</li>
                  <li id="humidity"><strong> Humidity:</strong> {props.data.humidity}%</li>
                </ul>
              </div>
            </div>
          </div>
          </div>);
}