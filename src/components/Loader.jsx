import React from 'react';
import { RingLoader } from 'react-spinners';

const Loader = () => {
  return (
    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 -transform">
      <RingLoader color="rgb(229 231 235)" />
      <p className="mt-6 text-sm dark:text-gray-200">Loading...</p>
    </div>
  );
};

export default Loader;
