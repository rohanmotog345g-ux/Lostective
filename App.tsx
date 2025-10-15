import React, { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage/HomePage'; // We'll create this next
import AboutUs from './pages/AboutUs/AboutUs';
import ContactUs from './pages/ContactUs/ContactUs';
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';
import Dashboard from './pages/Dashboard/Dashboard';
import ReportLostForm from './components/forms/ReportLostForm/ReportLostForm';
import ReportFoundForm from './components/forms/ReportFoundForm/ReportFoundForm';

// A component to protect routes that require login
const ProtectedRoute = ({ isLoggedIn, children }: { isLoggedIn: boolean, children: JSX.Element }) => {
  if (!isLoggedIn) {
    // Redirect them to the /login page, but save the current location they were
    // trying to go to. This is a good practice for UX.
    return <Navigate to="/login" replace />;
  }
  return children;
};


function App() {
  // --- FAKE AUTHENTICATION ---
  // In a real app, this would come from a context, Redux, or an API call
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* Public Routes */}
        <Route index element={<HomePage />} />
        <Route path="about" element={<AboutUs />} />
        <Route path="contact" element={<ContactUs />} />

        {/* Auth Routes */}
        <Route path="login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="signup" element={<Signup setIsLoggedIn={setIsLoggedIn} />} />

        {/* Protected Routes */}
        <Route
          path="dashboard"
          element={
            <ProtectedRoute isLoggedIn={isLoggedIn}>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="report-lost"
          element={
            <ProtectedRoute isLoggedIn={isLoggedIn}>
              <ReportLostForm />
            </ProtectedRoute>
          }
        />
        <Route
          path="report-found"
          element={
            <ProtectedRoute isLoggedIn={isLoggedIn}>
              <ReportFoundForm />
            </ProtectedRoute>
          }
        />

        {/* Catch-all for unknown routes (optional) */}
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
}

export default App;