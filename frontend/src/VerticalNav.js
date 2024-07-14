import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import logo from './images/logo.jpg';
import './verticalNavStyling.css';

function VerticalNav({ links }) {
  const navigate = useNavigate();
  return (
    <div className="vertical-nav">
      <img src={logo} alt="Logo" className="nav-logo" onClick={() => navigate("/home")} />
      <nav className="nav-links">
        {links.map((link, index) => (
          <NavLink key={index} to={link.path} className="nav-link">
            {link.name}
          </NavLink>
        ))}
      </nav>
    </div>
  );
}

export default VerticalNav;
