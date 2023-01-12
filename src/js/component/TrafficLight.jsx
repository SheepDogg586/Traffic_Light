import React, {useState} from "react";

//include images into your bundle


//create your first component
function TrafficLight (){
    const [ selectedColor, setSelectedColor ] = useState("");

    return (
        <div className = "container">
        <div className ="top-box"></div>
        <div className = "traffic-light">
            <div onClick = {() => setSelectedColor("red")} className = {"light red" + ((selectedColor === "red") ? " red glow" : "")}></div>
            <div onClick = {() => setSelectedColor("yellow")} className = {"light yellow" + ((selectedColor === "yellow") ? " yellow glow" : "")}></div>
            <div onClick = {() => setSelectedColor("green")} className = {"light green" + ((selectedColor === "green") ? " green glow" : "")}></div>
        </div>
        </div>
)};

export default TrafficLight;




