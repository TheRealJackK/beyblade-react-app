import React from "react";
import mmBeyblades from "../objects/Metalmasters";
import 'bootstrap/dist/css/bootstrap.css';

function MetalMasters() {
    return(
        mmBeyblades.map(beyblade => (
            <>
            <div class="card m-3 shadow">
                <img class="card-img-top" src={beyblade.image} alt="Beyblade"></img>
                <div class="card-body">
                    <h5 class="card-title">{beyblade.name}</h5>
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

export default MetalMasters;