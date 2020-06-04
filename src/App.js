import React, {Component} from "react";
import "./assets/vendor/bootstrap/css/bootstrap.min.css";
import Navbar from "./components/layouts/Navbar";
import Routes from "./components/routes/Routes";
import {BrowserRouter as Router, Route, Link} from "react-router-dom";

class App extends React.Component {

    render() {
        return (
            <React.Fragment>
                <Router>
                    <Navbar/>
                    <div className="container">
                        <Routes/>
                    </div>
                </Router>
            </React.Fragment>

        )
    }
}

export default App;
