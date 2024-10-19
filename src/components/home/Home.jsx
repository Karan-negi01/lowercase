import React from 'react'
import homevideo from '../assests/home-video.mp4';
import './Home.css'

const Home = () => {
  return (
    <div>
      <video className="background-video" src={homevideo} loop autoPlay muted />
    </div>
  )
}

export default Home
