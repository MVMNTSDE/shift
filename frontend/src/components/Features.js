import React from 'react';
import './Features.css';

function Features() {
  return (
    <section className="features">
      <h2>Unsere Hauptmerkmale</h2>
      <div className="feature-list">
        <div className="feature-item">
          <h3>Feature 1</h3>
          <p>Beschreibung des Features 1.</p>
        </div>
        <div className="feature-item">
          <h3>Feature 2</h3>
          <p>Beschreibung des Features 2.</p>
        </div>
        <div className="feature-item">
          <h3>Feature 3</h3>
          <p>Beschreibung des Features 3.</p>
        </div>
      </div>
    </section>
  );
}

export default Features; 