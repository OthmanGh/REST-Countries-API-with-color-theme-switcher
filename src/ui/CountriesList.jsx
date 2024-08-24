import React from 'react';
import Country from './Country';

const CountriesList = ({ countries }) => {
  return (
    <div className="grid grid-cols-1 gap-16 p-4 sm:grid-cols-2 sm:p-0 md:grid-cols-3 lg:grid-cols-4">
      {countries.map((country, i) => (
        <Country key={i} country={country} />
      ))}
    </div>
  );
};

export default CountriesList;
