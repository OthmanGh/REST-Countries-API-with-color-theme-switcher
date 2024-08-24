import { Tooltip } from '@mui/material';
import { IoMoonOutline } from '../constants/index';
import styles from '../styles/padding.module.css';

const Header = () => {
  return (
    <header
      className={`${styles.headerPadding} flex items-center justify-between border-b border-black border-opacity-10 bg-neutral-very-light-gray-bg py-6 drop-shadow-2xl dark:bg-neutral-dark-blue-elements dark:text-neutral-white-text-elements`}
    >
      <p className="font-bold xs:text-xs sm:text-lg md:text-xl">Where in the World?</p>

      <Tooltip
        title="Toggle Dark/Light Mode"
        placement="bottom"
        className="sm:text-md flex cursor-pointer items-center gap-2  font-semibold xs:text-xs md:text-lg"
      >
        <IoMoonOutline />
        <span>Dark Mode</span>
      </Tooltip>
    </header>
  );
};

export default Header;
