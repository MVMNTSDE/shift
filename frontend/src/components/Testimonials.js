import React from 'react';
import './Testimonials.css';

function Testimonials() {
  return (
    <section className="testimonials">
      <h2>Was unsere Kunden sagen</h2>
      <div className="testimonial-list">
        <div className="testimonial-item">
          <p>"Dieses Produkt hat mein Leben verändert!"</p>
          <p>- Kunde A</p>
        </div>
        <div className="testimonial-item">
          <p>"Hervorragender Service und Support."</p>
          <p>- Kunde B</p>
        </div>
      </div>
    </section>
  );
}

export default Testimonials; 