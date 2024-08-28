import SearchByCountry from '../components/SearchCountry';
import { IoSearchSharp } from '../constants';

const SearchField = ({ onSearchQuery }) => {
  return (
    <div className="relative flex items-center rounded-md bg-neutral-very-light-gray-bg drop-shadow-md dark:bg-neutral-dark-blue-elements dark:text-neutral-white-text-elements dark:placeholder:text-gray-200">
      <IoSearchSharp className="top-50 absolute left-7 z-10 text-xl text-gray-500 dark:text-gray-100" />
      <SearchByCountry onSearchQuery={onSearchQuery} />
    </div>
  );
};

export default SearchField;
