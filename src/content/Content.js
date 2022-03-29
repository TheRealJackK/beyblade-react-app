import React from "react";
import MetalFusion from "../overviews/Metalfusionoverview";
import MetalMasters from "../overviews/Metalmastersoverview";
import MetalFury from "../overviews/Metalfuryoverview";
import "../css/app.css";
import 'bootstrap/dist/css/bootstrap.css';
import Header from "./Header";

function Content() {
  return (
    <>
    <div>
      {Header()}
    </div>
    <div class = "container-fluid text-center">
      <h1>Metal Fusion</h1>
      <div class = "card-group">
        {MetalFusion()}
      </div>
      <h1>Metal Masters</h1>
      <div class = "card-group">
        {MetalMasters()}
      </div>
      <h1>Metal Fury</h1>
      <div class = "card-group">
        {MetalFury()}
      </div>
    </div>
 
    </>
  )
}

export default Content;