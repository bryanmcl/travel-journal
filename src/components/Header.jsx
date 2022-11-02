import React from "react";
import globeIcon from "../assets/globe_icon.png"

function Header(){
    return(
        <header  className="flex bg-lime-500 py-6 justify-center items-center gap-2">
            <img src={globeIcon} alt="GlobeIcon" />
            <h1 className="text-white font-bold text-lg">My travel journal.</h1>
        </header>
    )
}

export default Header