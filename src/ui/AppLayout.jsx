import React from 'react';
import Header from '../components/Header';
import { Outlet } from 'react-router-dom';

const AppLayout = () => {
  return (
    <div className="duration-400 min-h-screen bg-neutral-very-light-gray-bg transition-all dark:bg-neutral-very-dark-blue-bg">
      <Header />
      <Outlet />
    </div>
  );
};

export default AppLayout;
