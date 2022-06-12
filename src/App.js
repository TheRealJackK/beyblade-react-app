import React from "react";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Header from "./components/Header";
import Allbeys from "./components/Allbeys";
import DetailView from "./components/Detailedview";
import 'bootstrap/dist/css/bootstrap.css';
import "./css/custom.css";

const App = () => {
  return (
    <>
    <Router>
    <div className="App">
      <Header />
      <div className="Content">
        <Switch>
          <Route exact path="/beyblade-react-app">
            <Allbeys />
          </Route>
          <Route path="/Detailedview/:id">
            <DetailView />
          </Route>
        </Switch>
      </div>
    </div>
    </Router>
    </>
  )
}

export default App;