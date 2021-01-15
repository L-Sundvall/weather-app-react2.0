import React from "react";

export default function FormatDate(props){
   console.log(props.date);
   let day = props.date.getDay();
   let hours = props.date.getHours();
   let minuets = props.date.getMinuets();
    return (<div>
´{day} <br /> {hours}:{minuets} ´;

    </div>);
}