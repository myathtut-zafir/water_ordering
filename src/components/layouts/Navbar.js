import React from "react";
import {Link} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#">Navbar</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse"
                    data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false"
                    aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"/>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <Link to='/' className="font-color-title">
                        <a className="nav-item nav-link active" href="#"> <span
                            className="sr-only">(current)</span>Home</a>
                    </Link>
                    <Link to='/form' className="font-color-title">
                        <a className="nav-item nav-link active" href="#">Order Form <span
                            className="sr-only">(current)</span></a>
                    </Link>
                </div>
            </div>
        </nav>
    )
};
export default Navbar;

