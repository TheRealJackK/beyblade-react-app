import React from "react";
import { beyblades } from "../data/beyblades";
import { Link } from 'react-router-dom';

export default function Allbeys() {
    return (
        <>
        <div className = "container-fluid text-center mt-5 mb-5">
            <h2>All Metal Series BeyBlades</h2>
        </div>
        <div className = "container-fluid text-center mt-5 mb-5">
            <h3>Metal Fusion</h3>
        </div>
        <div className = "card-group flex-wrap">
            {beyblades.filter(beyblade => beyblade.series === "Metal Fusion").map(beyblade => (
            <div id="bb-card" className="card-body bg-white m-3 shadow rounded" key={beyblade.id}>
                <Link to={`Detailedview/${beyblade.id}`}>
                <img id = "detailed-image" className="card-img-top" src={beyblade.image} alt={beyblade.name}></img>
                    <h5 className="card-title">{beyblade.name}</h5>
                    <br></br>
                    <p className="card-text">Series: <strong>{beyblade.series}</strong></p>
                    <p className="card-text">Type: <strong>{beyblade.type}</strong></p>
                    <p className="card-text">Facebold: <strong>{beyblade.faceBolt}</strong></p>
                    <p className="card-text">Energy Ring: <strong>{beyblade.energyRing}</strong></p>
                    <p className="card-text">Fusion Wheel: <strong>{beyblade.fusionWheel}</strong></p>
                    <p className="card-text">Spin Track: <strong>{beyblade.spinTrack}</strong></p>
                    <p className="card-text">Performance Tip: <strong>{beyblade.performanceTip}</strong></p>
                </Link>
            </div>
            ))}
        </div>
        <div className = "container-fluid text-center mt-5 mb-5">
            <h3>Metal Masters</h3>
        </div>
        <div className = "card-group flex-wrap">
            {beyblades.filter(beyblade => beyblade.series === "Metal Masters").map(beyblade => (
            <div id="bb-card" className="card-body bg-white m-3 shadow rounded" key={beyblade.id}>
                <Link to={`Detailedview/${beyblade.id}`}>
                <img id = "detailed-image" className="card-img-top" src={beyblade.image} alt={beyblade.name}></img>
                    <h5 className="card-title">{beyblade.name}</h5>
                    <br></br>
                    <p className="card-text">Series: <strong>{beyblade.series}</strong></p>
                    <p className="card-text">Type: <strong>{beyblade.type}</strong></p>
                    <p className="card-text">Facebold: <strong>{beyblade.faceBolt}</strong></p>
                    <p className="card-text">Energy Ring: <strong>{beyblade.energyRing}</strong></p>
                    <p className="card-text">Fusion Wheel: <strong>{beyblade.fusionWheel}</strong></p>
                    <p className="card-text">Spin Track: <strong>{beyblade.spinTrack}</strong></p>
                    <p className="card-text">Performance Tip: <strong>{beyblade.performanceTip}</strong></p>
                </Link>
            </div>
            ))}
        </div>
        <div className = "container-fluid text-center mt-5 mb-5">
            <h3>Metal Fury</h3>
        </div>
        <div className = "card-group flex-wrap">
            {beyblades.filter(beyblade => beyblade.series === "Metal Fury").map(beyblade => (
            <div id="bb-card" className="card-body bg-white m-3 shadow rounded" key={beyblade.id}>
                <Link to={`Detailedview/${beyblade.id}`}>
                <img id = "detailed-image" className="card-img-top" src={beyblade.image} alt={beyblade.name}></img>
                    <h5 className="card-title">{beyblade.name}</h5>
                    <br></br>
                    <p className="card-text">Series: <strong>{beyblade.series}</strong></p>
                    <p className="card-text">Type: <strong>{beyblade.type}</strong></p>
                    <p className="card-text">Facebold: <strong>{beyblade.faceBolt}</strong></p>
                    <p className="card-text">Energy Ring: <strong>{beyblade.energyRing}</strong></p>
                    <p className="card-text">Fusion Wheel: <strong>{beyblade.fusionWheel}</strong></p>
                    <p className="card-text">Spin Track: <strong>{beyblade.spinTrack}</strong></p>
                    <p className="card-text">Performance Tip: <strong>{beyblade.performanceTip}</strong></p>
                </Link>
            </div>
            ))}
        </div>
        </>
    )
}