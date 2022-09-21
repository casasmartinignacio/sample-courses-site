import React from 'react';
import { Route } from 'react-router-dom';
import Login from 'pages/Login';
import Register from 'pages/Register';

const CommonRoutes = () => [
  <Route key="register" exact path="/register" element={<Register />} />,
  <Route key="login" exact path="/login" element={<Login />} />,
];

export default CommonRoutes;
