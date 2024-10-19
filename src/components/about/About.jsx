import React, { useState } from 'react';

import banner from '../assests/banner.jpg';
import './About.css';
import gallery from '../assests/rocky.jpg';
import artist from '../assests/Travis.jpg';
import event from '../assests/event.jpg';
import collab from '../assests/Production.png';
import { GrPrevious } from "react-icons/gr";
import { GrNext } from "react-icons/gr";
import video1 from '../assests/video1.mp4';
import video2 from '../assests/video2.mp4';
import video3 from '../assests/video3.mp4';
import video4 from '../assests/video4.mp4';
// import { GrSend } from "react-icons/gr";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";




const About = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const images = [artist, gallery, event, collab];
    const videos = [video1, video2, video3, video4];

    const nextImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    return (
        <div>
            <div className="about_container">

                {/* Box1 banner */}
                <div className="banner">
                    <img src={banner} alt="banner" />
                </div>


                {/* Box2 About */}

                <div className="about_content">
                    <div className="left_des_heading">
                        ABOUT US
                    </div>


                    <div className="left_des_text">
                        Since pioneering the nightlife scene and booking top talents in the early 2000s, Lower Case has evolved into a global lifestyle and culture brand, consistently leading the way in bridging cultures and advancing the entertainment industry. Since pioneering the nightlife scene and booking top talents in the early 2000s, Lower Case has evolved into a global lifestyle and culture brand, consistently leading the way in bridging cultures and advancing the entertainment industry. Since pioneering the nightlife scene and booking top talents in the early 2000s, Lower Case has evolved into a global lifestyle and culture brand, consistently leading the way in bridging cultures and advancing the entertainment industry...
                    </div>

                </div>




                {/* Box3 Collage */}


                <div className="collage">
                    <div className="box_about">
                        <img src={artist} alt="artist" />
                        <div className="overlay">ARTIST</div>
                    </div>
                    <div className="box_about">
                        <img src={collab} alt="collab" />
                        <div className="overlay">COLLABORATIONS</div>
                    </div>
                    <div className="box_about">
                        <img src={event} alt="event" />
                        <div className="overlay">EVENTS</div>
                    </div>
                    <div className="box_about">
                        <img src={gallery} alt="gallery" />
                        <div className="overlay">GALLERY</div>
                    </div>
                </div>



                {/* box4 slider */}



                <div className="slider_about">

                    <div className="slider_about_title">Recent Collaborations</div>

                    <div className="carousel">
                        <button onClick={prevImage} className="prev_button"><GrPrevious /></button>
                        <div className="video-container">
                            <video
                                src={videos[currentIndex]}
                                className="carousel_video"
                                muted
                                loop
                                onMouseEnter={(e) => e.currentTarget.play()}
                                onMouseLeave={(e) => e.currentTarget.pause()}
                            />
                            <img
                                src={images[currentIndex]}
                                alt="carousel"
                                className="carousel_image"
                                onMouseEnter={() => document.querySelector(`video`).play()}
                                onMouseLeave={() => document.querySelector(`video`).pause()}
                            />
                        </div>
                        <button onClick={nextImage} className="next_button"><GrNext /></button>
                    </div>
                </div>

                {/* <div className="reach_out">
                    <div className="reach_out_title">Reach Out to US!!!</div>
                    <div className="reach_out_name">Name:</div>
                    <div className="reach_out_mail">Mail:</div>
                    <div className="reach_out_contact">Our Contact: xyz@example.com</div>
                    <div className="reach_out_button"><GrSend /></div>
                </div> */}

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
        </div>


    )
}

export default About;