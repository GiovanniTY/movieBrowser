import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { faHome, faSearch, faUser } from '@fortawesome/free-solid-svg-icons';

const BottomNavbar = () => {
    return (
    <div className="bottom-navbar">
    <Link to="/" className="nav-item">
    <FontAwesomeIcon icon={faHome} className='nav-icon' />
      </Link>
      <Link to="/search" className="nav-item">
      <FontAwesomeIcon icon={faSearch} className='nav-icon' />
      </Link>
      <Link to="/profile" className="nav-item">
      <FontAwesomeIcon icon={faUser} className='nav-icon' />
      </Link>

    </div>
    );
};

export default BottomNavbar;
