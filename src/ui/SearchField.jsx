import SearchByCountry from '../components/SearchCountry';
import { IoSearchSharp } from '../constants';

const SearchField = () => {
  return (
    <div className="relative flex max-w-[450px] items-center rounded-sm bg-neutral-very-dark-blue-text bg-opacity-5 p-1">
      <IoSearchSharp className="top-50 absolute left-7 z-10 text-xl dark:text-gray-100" />
      <SearchByCountry />
    </div>
  );
};

export default SearchField;
