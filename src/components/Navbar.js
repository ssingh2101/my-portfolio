import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import "./navbar.css"

const Navbar = () => {
        return (
                <div>
                        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
                                <div className="container">
                                        <Link className="navbar-brand" to="/"> SANDEEPSINGH </Link>
                                        <button className="navbar-toggler" data-toggle="collapse" data-target="#navbarid">
                                                <span className="navbar-toggler-icon"></span>
                                        </button>
                                        <div className="collapse navbar-collapse" id="navbarid">
                                                <ul className="navbar-nav text-center ml-auto">
                                                        <li className="nav-item  px-3">
                                                                <Link className="nav-link" to="/">Home</Link>
                                                        </li>
                                                        <li className="nav-item  px-3">
                                                                <Link className="nav-link" to="/about">About</Link>
                                                        </li>
                                                        <li className="nav-item  px-3">
                                                                <Link className="nav-link" to="/resume">Resume</Link>
                                                        </li>
                                                        <li className="nav-item  px-3">
                                                                <Link className="nav-link" to="/contact">Contact</Link>
                                                        </li>
                                                </ul>
                                        </div>
                                </div>
                        </nav>
                </div>
        )
}

export default withRouter(Navbar);