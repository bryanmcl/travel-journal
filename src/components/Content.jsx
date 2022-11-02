import React from "react";
import Card from "./Card";
import TravelData from "../Data/TravelData"

function Content(){
    console.log(TravelData)
    const travels = TravelData.map(item =>{
        return(
            <Card
                key = {item.id}
                data = {item}
            />
        )
    })
    return(
        <div className="px-14 py-5">
            {travels}
        </div>
    )
}

export default Content