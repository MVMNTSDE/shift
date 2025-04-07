import React from 'react';
import './Header.css'; // Optional: für Styling

function Header() {
  return (
    <header className="header">
      <nav className="mega-menu">
        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">Über uns</a>
            <div className="dropdown">
              <ul>
                <li><a href="#team">Unser Team</a></li>
                <li><a href="#history">Unsere Geschichte</a></li>
              </ul>
            </div>
          </li>
          <li>
            <a href="#services">Dienstleistungen</a>
            <div className="dropdown">
              <ul>
                <li><a href="#consulting">Beratung</a></li>
                <li><a href="#development">Entwicklung</a></li>
              </ul>
            </div>
          </li>
          <li>
            <a href="#contact">Kontakt</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;