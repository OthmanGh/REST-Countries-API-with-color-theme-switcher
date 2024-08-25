import { MdKeyboardArrowDown } from '../constants';

const SelectByRegion = () => {
  return (
    <div className="relative flex max-w-[200px] cursor-pointer items-center rounded-md bg-neutral-very-light-gray-bg px-6 text-gray-600 drop-shadow-md xs:h-12 sm:h-14 dark:bg-neutral-dark-blue-elements dark:text-neutral-white-text-elements ">
      <select className="w-full cursor-pointer appearance-none rounded-lg bg-inherit pr-10 text-center outline-none sm:py-[14px]">
        <option>Filter by region</option>
        <option value="africa">Africa</option>
        <option value="america">America</option>
        <option value="asia">Asia</option>
        <option value="europe">Europe</option>
      </select>
      <MdKeyboardArrowDown className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 transform text-2xl" />
    </div>
  );
};

export default SelectByRegion;
