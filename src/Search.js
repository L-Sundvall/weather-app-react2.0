import React from "react";

export default function Search(){
return (
<div>
            <form>
              <input
                type="search"
                placeholder="Search for a city"/>
              <input type="submit" value="Search" className="Search-button" />
            </form>
            <button className="current-button">Current position</button>
          </div>); }