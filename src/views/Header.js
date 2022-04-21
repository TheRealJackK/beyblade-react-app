import React from "react";
import {Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';

const Header = () => {
    return (
        <>
        <nav className="navbar bg-white shadow-sm d-flex justify-content-center flex-column">
            <h2>BeyBlade Metal Series</h2>
            <h3>Reference and Guide</h3>
            <div className="container-fluid d-flex justify-content-evenly">
                <Link to="/beyblade-react-app">Home</Link>
            </div>
        </nav>
        </>
    )
}

export default Header;