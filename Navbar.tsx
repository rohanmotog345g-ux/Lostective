import React from 'react';
import { Link } from 'react-router-dom'; // Import Link
import './Navbar.css';

const Navbar: React.FC = () => {
  return (
    <header className="navbar-container">
      <Link to="/" className="logo"> {/* Use Link component */}
        <span role="img" aria-label="location pin"></span>
        <span>Lostective</span>
      </Link>
      <nav className="nav-links">
        <ul>
          {/* If on the homepage, these can be anchor links. On other pages, they should link to the homepage sections. */}
          <li><a href="/#features">Features</a></li>
          <li><a href="/#how-it-works">How It Works</a></li>
          <li><Link to="/about">About Us</Link></li> {/* Use Link component */}
        </ul>
      </nav>
      {/* Update this part based on login state in the future */}
      <Link to="/login" className="get-started-btn-nav">Login</Link>
    </header>
  );
};

export default Navbar;