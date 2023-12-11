import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import React from "react";
import FaIcons from "../faIcons/FaIcons";
import "./navbar.scss";

const Navbar = () => {
    return (
        <div className="navbar">
            {/* Sidebar */}
            <div className="wrapper">
                <span>Lama Dev</span>
                <div className="social">
                    <a href="#">
                        <FaIcons style={"brands"} name={faLinkedin} />
                    </a>
                    <a href="#">
                        <FaIcons style={"brands"} name={faGithub} />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
