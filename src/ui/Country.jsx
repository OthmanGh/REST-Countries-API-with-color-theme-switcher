import { Tooltip } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Country = ({ country }) => {
  const navigate = useNavigate();
  const textColor = 'dark:text-neutral-300';

  const handleClick = (countryName) => {
    navigate(`/country/${countryName}`, { state: country });
  };

  return (
    <div
      className="flex w-full cursor-pointer flex-col gap-4 overflow-hidden rounded-md bg-neutral-very-light-gray-bg  drop-shadow-2xl transition-all duration-500 xs:hover:scale-95 sm:hover:scale-105 dark:bg-neutral-dark-blue-elements dark:text-neutral-white-text-elements"
      onClick={() => handleClick(country.name.common)}
    >
      <Tooltip placement="top" title="click to explore country details">
        <img src={country.flags.png} alt={`${country.name.official} flag`} className="o h-[160px] w-full object-cover" />

        <div className="px-6 py-3 text-sm">
          <h2 className="mb-4 text-lg font-bold">{country.name.common}</h2>

          <div className="mb-3 flex flex-col gap-2">
            <p>
              Population: <span className={textColor}>{country.population}</span>
            </p>

            <p>
              Region: <span className={textColor}>{country.region}</span>
            </p>
            <p>
              Capital: <span className={textColor}>{country.capital}</span>
            </p>
          </div>
        </div>
      </Tooltip>
    </div>
  );
};

export default Country;
