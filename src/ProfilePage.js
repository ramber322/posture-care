import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import './styles/ProfilePage.css';

import pcIcon from './images/pcIcon.png';
import dumbellIcon from './images/dumbellIcon.png';
import houseIcon from './images/houseIcon.png';
import profileIcon from './images/profileIcon.png';
import darockk from './images/darockk.png';

function ProfilePage() {
  const navigate = useNavigate();
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const icons = [
    { src: pcIcon, alt: 'PC Logo' },
    { src: houseIcon, alt: 'House' },
    { src: dumbellIcon, alt: 'Dumbbell' },
    { src: profileIcon, alt: 'Profile' },
  ];

  return (
    <div className="profile-container">
      {/* Navbar */}
      <div className="profile-navbar">
        {icons.map((icon, index) => (
          <div
            key={index}
            className={`profile-icon-container ${hoveredIndex === index ? 'hovered' : ''}`}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
             onClick={() => {
  if (index === 1) navigate('/dashboard'); 
  if (index === 2) navigate('/videos');    
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

      <h1 className="profile-title">Profile</h1>

      <div className="profile-section">
        <img src={darockk} alt="Profile" className="profile-image" />
        <h3 className="profile-name">Pitos, Chris Manuel</h3>

        <input type="text" placeholder="Username" className="profile-input" />
        <input type="password" placeholder="Password" className="profile-input" />
        <input type="password" placeholder="Re-enter Password" className="profile-input" />

        <button className="profile-button">Update Profile</button>
        <button className="profile-button">Sign Out</button>
      </div>
    </div>
  );
}

export default ProfilePage;
