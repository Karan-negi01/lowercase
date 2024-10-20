import React from 'react';
import './Artist.css';
import banner from '../assests/banner.jpg';
import band from '../assests/band.jpeg';
import travis from '../assests/Travis.jpg';
import rocky from '../assests/rocky.jpg';

const artists = [
  { name: 'Banner', img: banner },
  { name: 'Rocky', img: rocky },
  { name: 'Band', img: band },
  { name: 'Travis', img: travis },
  { name: 'Rocky', img: rocky },
  { name: 'Banner', img: banner },
  { name: 'Travis', img: travis },
  { name: 'Band', img: band },
  
 
  { name: 'Banner', img: banner },
  { name: 'Band', img: band },
  { name: 'Travis', img: travis },
  { name: 'Rocky', img: rocky },
  { name: 'Banner', img: banner },
  { name: 'Band', img: band },
  { name: 'Travis', img: travis },
  { name: 'Rocky', img: rocky },
  { name: 'Banner', img: banner },
  { name: 'Band', img: band },
  { name: 'Travis', img: travis },
  { name: 'Rocky', img: rocky },
 
];

const Artist = () => {
  return (
    <div>
      <div className="artist_container">
        <div className="artist-heading">
          ARTIST
        </div>
         
        <div className="artist_gallery">
          {artists.map((artist, index) => (
            <div className="artist_box" key={index}>
              <img src={artist.img} alt={artist.name} />
              <div className="artist_name">{artist.name}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Artist;
