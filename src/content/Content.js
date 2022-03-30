import React from "react";
import Header from "./Header";
import beyInfo from "../overview/Beyinfo";
import "../css/content.css";
import 'bootstrap/dist/css/bootstrap.css';


function Content() {
  return (
    <>
    <div>
      {Header()}
    </div>
    <div class = "container-fluid d-flex flex-wrap justify-content-center">
      {beyInfo()}
    </div>
    </>
  )
}

export default Content;