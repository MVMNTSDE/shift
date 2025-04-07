import React from 'react';
import './Sidebar.css'; // Optional: für Styling

function Sidebar() {
  return (
    <aside className="sidebar">
      <nav>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">Über uns</a></li>
          <li><a href="#services">Dienstleistungen</a></li>
          <li><a href="#contact">Kontakt</a></li>
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar; 