import React, { useState, useEffect } from 'react';
import './styles/Dashboard.css';

import pcIcon from './images/pcIcon.png';
import dumbellIcon from './images/dumbellIcon.png';
import houseIcon from './images/houseIcon.png';
import profileIcon from './images/profileIcon.png';
import { useNavigate } from 'react-router-dom';

import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';

function Dashboard() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
const navigate = useNavigate();
  //responsive
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isMobile = windowWidth < 768;
  const [hoveredIndex, setHoveredIndex] = React.useState(null);
  const handleMouseEnter = (index) => setHoveredIndex(index);
  const handleMouseLeave = () => setHoveredIndex(null);

  const icons = [
    { src: pcIcon, alt: 'PC Logo' },
    { src: houseIcon, alt: 'House' },
    { src: dumbellIcon, alt: 'Dumbbell' },
    { src: profileIcon, alt: 'Profile' },
  ];

  // displayed on chart
  const data = [
    { name: 'Jan', value: 100, displayTime: '12:00 PM' },
    { name: 'Feb', value: 300, displayTime: '2:10 PM' },
    { name: 'Mar', value: 500, displayTime: '12:30 PM' },
    { name: 'Apr', value: 450, displayTime: '1:15 PM' },
    { name: 'May', value: 600, displayTime: '1:00 PM' },
    { name: 'Jun', value: 350, displayTime: '2:15 PM' },
  ];

  const valueToTimeMap = React.useMemo(() => {
    const map = {};
    data.forEach((d) => {
      map[d.value] = d.displayTime;
    });
    return map;
  }, [data]);

  const styles = {
  
    iconContainer: {
      width: '50px',
      height: '50px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#f0f0f0',
      borderRadius: '8px',
      cursor: 'pointer',
      transition: 'background-color 0.2s',
      margin: '5px',
    },
    iconImg: {
      width: '40px',
      height: '40px',
      objectFit: 'contain',
    },
    largeIconImg: {
      width: '70px',
      height: '70px',
      objectFit: 'contain',
    },
    
    
   
    progressBarFill: (percent, color) => ({
      width: `${percent}%`,
      backgroundColor: color,
      height: '10px',
      borderRadius: '5px',
    }),
  };

  const stats = [
    { label: 'Heart rate', percent: 30, color: 'red' },
    { label: 'Slouching', percent: 44, color: 'orange' },
    { label: 'Not Slouching', percent: 22, color: 'gray' },
    { label: 'Duration', percent: 6, color: 'white' },
  ];

  return (
    <div className = "main-container">
      {/* Navbar */}
      <div className = "dashboard-navbar" >
        {icons.map((icon, index) => (
          <div
            key={index}
            style={{
              ...styles.iconContainer,
              backgroundColor:
                hoveredIndex === index ? '#e0e0e0' : styles.iconContainer.backgroundColor,
            }}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
           onClick={() => {
  if (index === 2) navigate('/videos'); 
  if (index === 3) navigate('/profile');
  
}}
            title={icon.alt}
          >
            <img
              src={icon.src}
              alt={icon.alt}
              style={{
                ...(index === 0 ? styles.largeIconImg : styles.iconImg),
              }}
            />
          </div>
        ))}
      </div>

      {/* Chart Section */}
      <div className = "chartContainer" >
        <LineChart
          width={isMobile ? 300 : 600}
          height={isMobile ? 200 : 300}
          data={data}
        >
          <CartesianGrid stroke="#ccc" strokeDasharray="3 3" />
          <XAxis dataKey="name" stroke="#fff" />
          <YAxis
            stroke="#fff"
            tickFormatter={(tick) => valueToTimeMap[tick] || tick}
          />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="value"
            stroke="#fff"
            strokeWidth={2}
            fill="#a0522d"
          />
        </LineChart>
      </div>

     
<div className = "date-container">
  <h2>May 2025</h2>
  <div className = "date-namecontainer">
    <div className = "date-name"><p>&lt;</p></div>
    <div className = "date-name"><p>Mon</p></div>
    <div className = "date-name"><p>Tue</p></div>
    <div className = "date-name"><p>Wed</p></div>
    <div className = "date-name"><p>Thu</p></div>
    <div className = "date-name"><p>Fri</p></div>
    <div className = "date-name"><p>Sat</p></div>
    <div className = "date-name"><p>Sun</p></div>
    <div className = "date-name"><p>&gt;</p></div>
  </div>

  <div className = "date-numbercontainer">
    <div><p></p></div>
    <div><p>28</p></div>
    <div><p>29</p></div>
    <div><p>30</p></div>
    <div><p>1</p></div>
    <div className = "date-2n3"><p>2</p></div>
    <div className = "date-2n3"><p>3</p></div>
    <div><p> 4</p></div>
    <div><p></p></div>
  </div>
</div>

      {/* stats amalyticss */}
      <div className = "statsContainer">
        {stats.map((stat, index) => (
          <div key={index} className = "statRow" >
            <div className = "stat-numbermargin">
              <span>{stat.label}</span>
              <span>{stat.percent}%</span>
            </div>
            <div className = "progressBarBackground">
              <div  style={styles.progressBarFill(stat.percent, stat.color)}></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;