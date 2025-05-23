import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


import './styles/VideosPage.css';

import pcIcon from './images/pcIcon.png';
import dumbellIcon from './images/dumbellIcon.png';
import houseIcon from './images/houseIcon.png';
import profileIcon from './images/profileIcon.png';
import video1 from './images/video1-image.png';
import video2 from './images/video2-image.jpg';
import video3 from './images/video3-image.jpg';
import video4 from './images/video4-image.jpg';
import video5 from './images/video5-image.jpg';
function VideosPage() {
    const videos = [
  {
    id: 1,
    thumbnail: video1,
    title: 'Shaolin Workout Routine',
    channel: 'Fitness Pro',
  },
  {
    id: 2,
    thumbnail: video2,
    title: 'Fix Your Posture',
    channel: 'Posture God',
  },
  {
    id: 3,
    thumbnail: video3,
    title: 'Exercises 201',
    channel: 'Gym Channel',
  },
  {
    id: 4,
    thumbnail: video4,
    title: 'Fix Bad Posture in Easy Way',
    channel: 'Daily Stretch',
  },
   {
    id: 5,
    thumbnail: video5,
    title: 'Back Workout to Fix Posture',
    channel: 'Fitness Guru',
  },
];

  const navigate = useNavigate();
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const icons = [
    { src: pcIcon, alt: 'PC Logo' },
    { src: houseIcon, alt: 'House' },
    { src: dumbellIcon, alt: 'Dumbbell' },
    { src: profileIcon, alt: 'Profile' },
  ];

  return (
    <div className="main-container">
      {/* Navbar */}
      <div className="navbar">
        {icons.map((icon, index) => (
          <div
            key={index}
            className={`navbar-icon-container ${hoveredIndex === index ? 'hovered' : ''}`}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
             onClick={() => {
  if (index === 1) navigate('/dashboard'); 
  if (index === 3) navigate('/profile'); 
}}
            title={icon.alt}
          >
            <img
              src={icon.src}
              alt={icon.alt}
              className={index === 0 ? 'large-icon-img' : 'icon-img'}
            />
          </div>
        ))}
      </div>
<div className = "videos-container">
    {videos.map((video) => (
  <div key={video.id} className="video-card">
    <img src={video.thumbnail} alt={video.title} className="video-thumbnail" />
    <div className="video-info">
      <h3 className="video-title">{video.title}</h3>
      <p className="video-channel">{video.channel}</p>
    </div>
  </div>
))}

</div>
     
    </div>
  );
}

export default VideosPage;
