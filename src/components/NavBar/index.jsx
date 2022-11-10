import React from "react";
import { Link } from "react-router-dom";
import CartWidget from "../CartWidget";
import './styles.css';

const NavBar = () => {

    return (

        <>
            <div className="navbar-container">
                <ul className="navbar-links">
                    <li>
                        <Link to="/">SNK Persoanjes</Link>
                    </li>
                    <li>
                        <Link to="/category/titans">Titanes</Link>
                    </li>
                </ul>
                <div>
                    <CartWidget />
                </div>
            </div>
            
        </>
    );
};

export default NavBar;
