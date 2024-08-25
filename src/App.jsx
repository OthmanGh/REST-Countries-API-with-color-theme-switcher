import React from 'react';
import Header from './components/Header';
import Home from './pages/Home';

const App = () => {
  return (
    <div className="min-h-screen bg-neutral-very-light-gray-bg dark:bg-neutral-very-dark-blue-bg">
      <Header />
      <Home />
    </div>
  );
};

export default App;
