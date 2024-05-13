import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../layouts/header.css';

export default function Header() {
  const [activeTab, setActiveTab] = useState('');

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <div className="header">
      <div className="logo">
        <Link to="/app" className="myshinee text-neon">My SHINee</Link>
      </div>
      <nav className="nav-links">
        <Link to="/artist" className={`nav-link ${activeTab === 'Artist' ? 'active' : ''}`} onClick={() => handleTabClick('Artist')}>Artist</Link>
        <Link to="/history" className={`nav-link ${activeTab === 'History' ? 'active' : ''}`} onClick={() => handleTabClick('History')}>History</Link>
        <Link to="/" className={`nav-link ${activeTab === 'toptrack' ? 'active' : ''}`} onClick={() => handleTabClick('Top Track')}>Top Track</Link>
      </nav>
      <div className="login-container">
        <Link to="/login" className="login-btn">Login</Link>
      </div>
    </div>
  );
}
