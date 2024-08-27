import { useTheme } from '../context/ThemeContext';
import React from 'react';
import { RingLoader } from 'react-spinners';

const Loader = () => {
  const { theme } = useTheme();

  return (
    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform">
      <RingLoader color={`${theme === 'dark' ? 'rgb(207 250 254)' : 'hsl(200 15% 8%)'}`} />
      <p className="text-[hsl(200 15% 8%)] text-md mt-4 dark:text-cyan-100">Loading...</p>
    </div>
  );
};

export default Loader;
