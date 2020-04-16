import React, {Component} from "react";
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import Form from "../Form";
import Home from "../Home";

class Routes extends Component {
    render() {
        return (
            <React.Fragment>
                <Route
                    exact
                    path="/"
                    component={props => <Home {...props} name="home"/>}
                />
                <Route
                    exact
                    path="/form"
                    component={props => <Form {...props} name="form"/>}
                />
            </React.Fragment>
        );
    }
}

export default Routes;
