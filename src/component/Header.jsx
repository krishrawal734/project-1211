import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="shadow-sm position-sticky top-0 bg-white container " style={{ zIndex: 1000 }}>
      <nav className="navbar navbar-expand-lg bg-light py-3">
        <div className="container">
          <NavLink className="navbar-brand fw-bold fs-5" to="/">
        TOURS.COM
          </NavLink>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">

              <li className="nav-item">
                <NavLink className="nav-link text-dark" to="/">Home</NavLink>
              </li>
               <li className="nav-item">
                <NavLink className="nav-link text-black " to="/destinations">Destinations</NavLink>
              </li>
               <li className="nav-item">
                <NavLink className="nav-link text-black" to="/travelpackages">Travel Packages</NavLink>
              </li>
               <li className="nav-item">
                <NavLink className="nav-link text-black" to="/Aboutus">About US</NavLink>
              </li>
               <li className="nav-item">
                <NavLink className="nav-link text-black" to="/travelguides">Travel Guides</NavLink>
              </li>
               <li className="nav-item">
                <NavLink className="nav-link text-black" to="/gallery">Gallery</NavLink>
              </li>
               <li className="nav-item">
                <NavLink className="nav-link text-black" to="/contact">Contact</NavLink>
              </li>


            </ul>
          </div>

        </div>
      </nav>
    </header>
  );
};

export default Header;