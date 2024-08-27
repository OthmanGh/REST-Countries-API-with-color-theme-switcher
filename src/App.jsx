import React from 'react';
import Home from './pages/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AppLayout from './ui/AppLayout';
import CountryDetail from './pages/CountryDetails';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<Home />} />
          <Route path="country/:countryName" element={<CountryDetail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
