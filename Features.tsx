import React from 'react';
import './Features.css';

const Features: React.FC = () => (
  <section id="features" className="section-container">
    <h2 className="section-title">A Better Way to Find What's Lost</h2>
    <p className="section-subtitle">
      We leverage modern technology and the power of community to maximize the chances of a successful reunion.
    </p>
    <div className="features-grid">
      <div className="feature-card">
        <div className="feature-icon">📍</div>
        <h3>Location-Based Matching</h3>
        <p>Our algorithm prioritizes matches based on the geographical area where an item was lost and found.</p>
      </div>
      <div className="feature-card">
        <div className="feature-icon">💬</div>
        <h3>Anonymous Chat</h3>
        <p>Connect securely with the finder or owner through our private messaging system without sharing personal contact info.</p>
      </div>
      <div className="feature-card">
        <div className="feature-icon">🔔</div>
        <h3>Instant Notifications</h3>
        <p>Get immediate email or push notifications the moment a potential match for your lost item is posted.</p>
      </div>
    </div>
  </section>
);

export default Features;