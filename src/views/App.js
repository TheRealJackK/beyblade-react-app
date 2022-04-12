import React from "react";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Header from "./Header";
import Allbeys from "./Allbeys";
import DetailView from "./Detailedview";
import "../css/custom.css";
import 'bootstrap/dist/css/bootstrap.css';

function App() {
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