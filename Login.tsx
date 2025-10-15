import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

// 1. Define an interface or type for the component's props.
// This tells TypeScript what to expect.
interface LoginProps {
  setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
}

// 2. Apply the type to your component using React.FC<YourPropsType>
//    and destructure the prop in the function parameters.
const Login: React.FC<LoginProps> = ({ setIsLoggedIn }) => {
  const navigate = useNavigate();

  const handleLogin = (event: React.FormEvent) => {
    event.preventDefault();
    console.log('Login successful!');
    setIsLoggedIn(true); // Now TypeScript knows this function exists
    navigate('/dashboard');
  };

  return (
    <div className="auth-container">
      <div className="auth-form-wrapper">
        <h1>Welcome Back!</h1>
        <p>Log in to manage your reports.</p>
        <form onSubmit={handleLogin}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" required />
          </div>
          <button type="submit" className="submit-btn">Log In</button>
        </form>
        <p className="form-link">
          Don't have an account? <a href="/signup">Sign Up</a>
        </p>
      </div>
    </div>
  );
};

export default Login;