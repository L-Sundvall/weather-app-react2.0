import React from "react";
import "./Search.css";

export default function Search(){
return (
<div className="Seatch-form">
            <form>
              <input
                type="search"
                className="search-input"
                placeholder="Search for a city"/>
              <input type="submit"  value="Search" className="Search-button" />
            </form>
            <button className="current-button">Current position</button>
          </div>); }