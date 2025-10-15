import React from 'react';
import '../Login/Login.css'; // Shared CSS

const Signup: React.FC = () => {
  return (
    <div className="auth-container">
      <div className="auth-form-wrapper">
        <h1>Create an Account</h1>
        <p>Join our community to find and report items.</p>
        <form>
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input type="text" id="name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" required />
          </div>
          <button type="submit" className="submit-btn">Sign Up</button>
        </form>
        <p className="form-link">
          Already have an account? <a href="/login">Log In</a>
        </p>
      </div>
    </div>
  );
};

export default Signup;