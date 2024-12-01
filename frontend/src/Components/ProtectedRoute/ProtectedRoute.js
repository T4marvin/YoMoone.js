//To ensure users can't access the dashboard without logging in, you can create a protected route that checks for the token in localStorage
import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ element }) => {
  const token = localStorage.getItem('token');
  if (!token) {
    return <Navigate to="/login" />;
  }
  return element;
};

export default ProtectedRoute;
