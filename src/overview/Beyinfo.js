import React from "react";
import { beyblades } from "../beyblades";
import 'bootstrap/dist/css/bootstrap.css';

function beyInfo() {
    return (
        beyblades.map(beyblade => (
            <>
            <div id = "bb-card" class="card m-3 shadow">
                <div class="card-body">
                <img class="card-img-top" src={beyblade.image} alt={beyblade.name}></img>
                    <h5 class="card-title">{beyblade.name}</h5>
                    <p class="card-text">Series: {beyblade.series}</p>
                    <p class="card-text">Type: {beyblade.type}</p>
                    <p class="card-text">Facebold: {beyblade.faceBolt}</p>
                    <p class="card-text">Energy Ring: {beyblade.energyRing}</p>
                    <p class="card-text">Fusion Wheel: {beyblade.fusionWheel}</p>
                    <p class="card-text">Spin Track: {beyblade.spinTrack}</p>
                    <p class="card-text">Performance Tip: {beyblade.performanceTip}</p>
                </div>
            </div>
            </>
        ))
    )
}

export default beyInfo;