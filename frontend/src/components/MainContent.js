import React from 'react';
import './MainContent.css'; // Optional: für Styling

function MainContent() {
  return (
    <main className="main-content">
      <section id="home">
        <h2>Willkommen auf unserer Webseite</h2>
        <p>Hier ist ein kurzer Überblick über unsere Dienstleistungen und Angebote.</p>
      </section>
      <section id="about">
        <h2>Über uns</h2>
        <p>Wir sind ein führendes Unternehmen in der Branche mit jahrelanger Erfahrung.</p>
      </section>
      <section id="services">
        <h2>Unsere Dienstleistungen</h2>
        <ul>
          <li>Beratung</li>
          <li>Entwicklung</li>
          <li>Support</li>
        </ul>
      </section>
      <section id="contact">
        <h2>Kontakt</h2>
        <p>Kontaktieren Sie uns für weitere Informationen.</p>
      </section>
    </main>
  );
}

export default MainContent;