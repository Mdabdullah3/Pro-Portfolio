import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { TiThMenuOutline } from 'react-icons/ti';
import { ImCross } from 'react-icons/im';
import "./nav.css";

const Nav = () => {
    const [navOpen, setNavOpen] = useState(false);

    return (
        <div className="">
            <div className="w-10/12 mx-auto flex justify-between mt-10">
                <div className="text-xl font-bold font-mono">Abdullah 2.0</div>
                <div className="menu-toggle " onClick={() => setNavOpen(!navOpen)}>
                    <div className=""> {!navOpen ? <span className="text-3xl text-gray-800"> < TiThMenuOutline /> </span> : <span className="text-2xl font-bold text-white">< ImCross /></span>} </div>
                </div>
            </div>

            <div
                className="nav-overlay"
                style={{
                    top: navOpen ? "0" : "-100%",
                    transitionDelay: navOpen ? "0s" : "0s",
                }}
            >
                <ul className="nav-links">
                    <li className="nav-item">
                        <Link
                            to="/"
                            onClick={() => setNavOpen(!navOpen)}
                            style={{
                                top: navOpen ? "0" : "120px",
                                transitionDelay: navOpen ? "0.8s" : "0s",
                            }}
                        >
                            Home
                        </Link>
                        <div className="nav-item-wrapper"></div>
                    </li>
                    <li className="nav-item">
                        <Link
                            to="/projects"
                            onClick={() => setNavOpen(!navOpen)}
                            style={{
                                top: navOpen ? "0" : "120px",
                                transitionDelay: navOpen ? "0.9s" : "0s",
                            }}
                        >
                            Projects
                        </Link>
                        <div className="nav-item-wrapper"></div>
                    </li>
                    <li className="nav-item">
                        <Link
                            to="/about"
                            onClick={() => setNavOpen(!navOpen)}
                            style={{
                                top: navOpen ? "0" : "120px",
                                transitionDelay: navOpen ? "1s" : "0s",
                            }}
                        >
                            About
                        </Link>
                        <div className="nav-item-wrapper"></div>
                    </li>
                    <li className="nav-item">
                        <Link
                            to="/contact"
                            onClick={() => setNavOpen(!navOpen)}
                            style={{
                                top: navOpen ? "0" : "120px",
                                transitionDelay: navOpen ? "1.1s" : "0s",
                            }}
                        >
                            Contact
                        </Link>
                        <div className="nav-item-wrapper"></div>
                    </li>
                </ul>
                <div className="nav-footer">
                    <div
                        className="location"
                        style={{
                            bottom: navOpen ? "0" : "-20px",
                            opacity: navOpen ? "1" : "0",
                            transitionDelay: navOpen ? "1.2s" : "0s",
                        }}
                    >
                        <span>Toronto, ON</span>
                    </div>
                    <div className="nav-social-media">
                        <ul>
                            <li>
                                <Link
                                    href="#"
                                    style={{
                                        bottom: navOpen ? "0" : "-20px",
                                        opacity: navOpen ? "1" : "0",
                                        transitionDelay: navOpen ? "1.3s" : "0s",
                                    }}
                                >
                                    YouTube
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="#"
                                    style={{
                                        bottom: navOpen ? "0" : "-20px",
                                        opacity: navOpen ? "1" : "0",
                                        transitionDelay: navOpen ? "1.4s" : "0s",
                                    }}
                                >
                                    Instagram
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Nav;
