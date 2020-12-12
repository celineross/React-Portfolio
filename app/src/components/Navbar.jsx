import React from "react";
import { NavLink } from "react-router-dom";
import "../assets/css/style.css";

const styles = {
    linkColor: {
        color: "rgb(40, 46, 46)"
    }
}
function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light">
                <NavLink className="nav-link" style={styles.linkColor} to="/">Home</NavLink>
                <button className="navbar-toggler" data-toggle="collapse" data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <NavLink className="nav-link" to="/contact">Contact</NavLink>
                        </li>
                        <li className="nav-item active">
                            <NavLink className="nav-link" to="/portfolio">Portfolio</NavLink>
                        </li>

                    </ul>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;