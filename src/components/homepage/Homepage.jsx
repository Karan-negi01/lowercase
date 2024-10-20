import React from 'react';
import { Route, Routes, Navigate, useNavigate } from 'react-router-dom';
import './Homepage.css';

import About from '../about/About';
import Home from '../home/Home';
import Collaboration from '../collaboration/Collaboration';

import Artist from '../artist/Artist';
import Gallery from '../gallery/Gallery';
import Events from '../events/Events';
import Footer from '../footer/Footer';

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
                    <Route path="/" element={<Navigate to="/Home" />} />
                    <Route path="/Home" element={<Home />} />
                    <Route path="/About" element={<About />} />
                    <Route path="/Artist" element={<Artist />} />
                    <Route path="/Collaboration" element={<Collaboration />} />

                    <Route path="/Events" element={<Events />} />
                    <Route path="/Gallery" element={<Gallery />} />
                    <Route path="/Footer" element={<Footer />} />
                </Routes>
            </div>



        </div>
    );
};

export default Homepage