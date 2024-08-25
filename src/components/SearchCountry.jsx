import React from 'react';

const SearchByCountry = ({ onSearchQuery }) => {
  return (
    <input
      type="text"
      placeholder="Search for a country..."
      onChange={(e) => onSearchQuery(e.target.value)}
      className="w-full rounded-md bg-inherit px-[70px] outline-none placeholder:text-sm xs:h-12 sm:h-14"
    />
  );
};

export default SearchByCountry;
