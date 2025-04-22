import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../header/header.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isShrink, setIsShrink] = useState(false);
  const location = useLocation(); // ✅ Get current path

  const handleScroll = () => {
    setIsShrink(window.scrollY > 60);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = () => {
    setMenuOpen(!menuOpen);
  };

  const navItems = [
    { label: 'HOME', path: '/' },
    { label: 'ABOUT US', path: '/about-us' },
    { label: 'PROJECTS', path: '/projects' },
    { label: 'REFERRAL', path: '/referral' },
    { label: 'JOINT VENTURE', path: '/joint-ventures' },
    { label: 'CONTACT US', path: '/contact-us' }
  ];

  return (
    <div className={`main-header ${isShrink ? 'shrink' : ''}`}>
      <div className="header-container">
        {/* left section */}
        <div className="header-left-section">
         <a href='#home'> <img src="logo-global-habitat.png" alt="Logo" /></a>
        </div>

        {/* mobile menu icon */}
        <div className="menu-icon" onClick={handleClick}>
          <i className="fa-solid fa-bars"></i>
        </div>

        {/* right section */}
        <div className={`header-right-section ${menuOpen ? 'open' : ''}`}>
          <ul>
            {navItems.map((item) => (
              <li key={item.label}>
                <Link
                  to={item.path}
                  className={location.pathname === item.path ? 'active' : ''}
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <a href="#">
                <i className="fa-solid fa-magnifying-glass"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
