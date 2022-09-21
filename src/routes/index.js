import React from 'react';
import Layout from 'components/Layout';
import { Routes, Route } from 'react-router-dom';
import Home from 'pages/Home';
import CommonRoutes from './CommonRoutes';
import NotFoundPage from 'pages/NotFound';

const AppRouter = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        {CommonRoutes()}
        <Route key="home1" exact path="/" element={<Home />} />
        <Route key="home2" exact path="/home" element={<Home />} />
        <Route key="notfound" path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  )
}

export default AppRouter;
