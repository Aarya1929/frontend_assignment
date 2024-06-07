import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';
import logo from '../assets/logo.png'; 

const Sidebar = () => {
  return (
    <div className="Sidebar">
      <nav>
        <img src={logo} alt="Dashboard Logo" className="logo-image" />
        <ul>
          <li><Link to="/">Dashboard</Link></li>
          <li><a href="#activities">Activities</a></li>
          <li><a href="#settings">Settings</a></li>
          <li><a href="#logout">Logout</a></li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
