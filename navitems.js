import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import "./navitems.css";
const Navbar = () => {
 return (
    <>
       <header className="header">
            <nav className="nav container">
                <h3>Go Green</h3>
                <div className="nav-menu">
                        <p className="nav-item">
                            <NavLink to="/" className="nav-link">
                                Home
                            </NavLink>
                        </p>
                        <p className="nav-item">
                            <NavLink to="/register" className="nav-link">
                                Register
                            </NavLink>
                        </p>
                        <p className="nav-item">
                            <NavLink to="/login" className="nav-link">
                                Login
                            </NavLink>
                            </p>
                </div>
            </nav>
        </header>
    <Outlet/>
    </>
 );
};
export default Navbar;