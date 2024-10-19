import React from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import './Homepage.css';

import About from '../about/About';
import Home from '../home/Home';
import Collaboration from '../collaboration/Collaboration';
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";
import Artist from '../artist/Artist';

const Homepage = () => {
    const navigate = useNavigate();  

   
  
    const handleNavbarClick = (page) => {
        navigate(page);  
    };

    return (
        <div className="homepage-container">
            <div className="navbar">
                <div className="navbar-logo">
                    <div className='navbar-logo-border' onClick={() => handleNavbarClick('/Home')}>
                        LOWER CASE EVENTS
                    </div>
                </div>
                <div className="navbar-bar">
                    <p className='navbar-items' onClick={() => handleNavbarClick('/About')}>ABOUT</p>
                    <p className='navbar-items' onClick={() => handleNavbarClick('/Artist')}>ARTIST</p>
                    <p className='navbar-items' onClick={() => handleNavbarClick('/Collaboration')}>COLLABORATIONS</p>
                    <p className='navbar-items' onClick={() => handleNavbarClick('/Events')}>EVENTS</p>
                    <p className='navbar-items' onClick={() => handleNavbarClick('/Gallery')}>GALLERY</p>
                </div>
            </div>

            <div className="belownavbar">
                <Routes>
                    <Route path="/Home" element={<Home/>}/>
                    <Route path="/About" element={<About/>} />
                    <Route path="/Artist" element={<Artist/>} />
                    <Route path="/Collaboration" element={<Collaboration/>} />
                    <Route path="/Events" element={<div className="content">Upcoming Events</div>} />
                    <Route path="/Gallery" element={<div className="content">Gallery Images</div>} />
                </Routes>
            </div>
            

            <div className="lisenced">
                    <div className="lisenced-logo">
                        <div className="logo-border">

                            Lower Case Events
                        </div>
                    </div>
                    <div className="lisenced-note">
                        COPYRIGHT © 2024 Lower Case Events | Lower Case Events ltd. ALL RIGHTS RESERVED.
                    </div>
                </div>

                <div className="footer">

                    <div className="footer-box1">
                        <p className='footer-heading' >LOWER CASE EVENTS</p>
                        <ul>
                            <li>About</li>
                            <li>Artist</li>
                            <li>Collaborations</li>
                            <li>Events</li>
                            <li>Gallery</li>
                        </ul>
                    </div>
                    <div className="footer-box2">
                        <p className='footer-heading' >ENQUIRIES</p>
                        <ul>
                            <li>Reach us by email or chat for enquiries and bookings.

                            </li>
                            <li>info@lower-case.co
                            London UK</li>

                        </ul>
                    </div>
                    <div className="footer-box3">
                        <div className="footer-heading">
                            SOCIAL MEDIA
                        </div>
                        <div className="social-icons">
                        <FaInstagram   className='footer-icons' />
                        <FaWhatsapp  className='footer-icons' />
                        <FaFacebookSquare  className='footer-icons' />
                        <CiTwitter  className='footer-icons' />



                        </div>

                    </div>
                </div>
        </div>
    );
};

export default Homepage