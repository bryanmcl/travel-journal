import React from "react";
import locationIcon from "../assets/location_icon.png"

function Card(props){
    return(
        <div className="flex h-[300px] px-10 py-5 max-w-[1000px] gap-10">
            <img className="w-[220px] h-full object-cover rounded-lg" src={`images/${props.data.img}`} alt="" />

            <div className="text-white">
                <div className="location flex items-center gap-2">
                    <img className="w-[15px]"src={locationIcon} alt="" />
                    <p>{props.data.location}</p>
                    <a target="_blank" href={props.data.url} className="ml-4 text-gray-400">View On Google Maps</a>
                </div>
                <h1 className="text-5xl font-[600]">{props.data.name}</h1>
                <h2 className="text-lime-400 mt-4">{props.data.date.from} - {props.data.date.to}</h2>
                <p>{props.data.desc}</p>
            </div>
        </div>
    )
}

export default Card