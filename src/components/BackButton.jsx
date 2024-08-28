import React from 'react';
import { IoIosArrowRoundBack } from '../constants';
import { useNavigate } from 'react-router-dom';

const BackButton = () => {
  const navigate = useNavigate();

  return (
    <button
      className="duration-400 shadow-[hsl(200, 15%, 8%)] mb-16 flex h-10 w-28 items-center justify-center gap-1 rounded-sm bg-neutral-very-light-gray-bg font-light shadow-xl transition-all hover:bg-gray-100 dark:bg-neutral-dark-blue-elements hover:dark:bg-neutral-dark-blue-elements-hover"
      onClick={() => navigate(-1)}
    >
      <IoIosArrowRoundBack className="text-2xl" /> Back
    </button>
  );
};

export default BackButton;
