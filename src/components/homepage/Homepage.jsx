import React from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import './Homepage.css';

import About from '../about/About';
import Home from '../home/Home';

const Homepage = () => {
    const navigate = useNavigate();  

   
  
    const handleNavbarClick = (page) => {
        navigate(page);  
    };

    return (
        <div className="homepage-container">
            <div className="navbar">
                <div className="navbar-logo">
                    <div className='navbar-logo-border' onClick={() => handleNavbarClick('/home')}>
                        LOWER CASE EVENTS
                    </div>
                </div>
                <div className="navbar-bar">
                    <p className='navbar-items' onClick={() => handleNavbarClick('/About')}>ABOUT</p>
                    <p className='navbar-items' onClick={() => handleNavbarClick('/Artist')}>ARTIST</p>
                    <p className='navbar-items' onClick={() => handleNavbarClick('/Collaborations')}>COLLABORATIONS</p>
                    <p className='navbar-items' onClick={() => handleNavbarClick('/Events')}>EVENTS</p>
                    <p className='navbar-items' onClick={() => handleNavbarClick('/Gallery')}>GALLERY</p>
                </div>
            </div>

            <div className="belownavbar">
                <Routes>
                    <Route path="/Home" element={<Home/>}/>
                    <Route path="/About" element={<About/>} />
                    <Route path="/Artist" element={<div className="content">Artist Information</div>} />
                    <Route path="/Collaborations" element={<div className="content">Collaborations Info</div>} />
                    <Route path="/Events" element={<div className="content">Upcoming Events</div>} />
                    <Route path="/Gallery" element={<div className="content">Gallery Images</div>} />
                </Routes>
            </div>
        </div>
    );
};

export default Homepage