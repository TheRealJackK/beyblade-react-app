import React from "react";
import { beyblades } from "../data/beyblades";
import 'bootstrap/dist/css/bootstrap.css';
import { useParams } from "react-router-dom";

const DetailView = () => {
   const { id } = useParams()
   return (
        <>
         <div className = "container-fluid text-center mt-5 mb-5 justify-content-center">
            <h2>Metal Series BeyBlades</h2>
         </div>
         <div className = "card-group flex-wrap">
            {beyblades.filter(beyblade => beyblade.id == id).map((beyblade) => (
            <div key={beyblade.id} id="d-bb-card" className="card-body bg-white m-3 shadow rounded d-flex flex-column">
            <img className="card-img-top" src={beyblade.image} alt={beyblade.name}></img>
                  <h4 className="card-title mt-5"><strong>{beyblade.name}</strong></h4>
                  <br></br>
                  <p className="card-text">Series: <strong>{beyblade.series}</strong></p>
                  <p className="card-text">Type: <strong>{beyblade.type}</strong></p>
                  <p className="card-text">Facebold: <strong>{beyblade.faceBolt}</strong></p>
                  <p className="card-text">Energy Ring: <strong>{beyblade.energyRing}</strong></p>
                  <p className="card-text">Fusion Wheel: <strong>{beyblade.fusionWheel}</strong></p>
                  <p className="card-text">Spin Track: <strong>{beyblade.spinTrack}</strong></p>
                  <p className="card-text">Performance Tip: <strong>{beyblade.performanceTip}</strong></p>
                  <h4 className="card-text"><strong>About the Bey</strong></h4>
                  <br></br>
                  <p className="card-text m-3">{beyblade.detailedDescription}</p>
               </div>
            ))}
         </div>
        </>
   ) 
}

export default DetailView;