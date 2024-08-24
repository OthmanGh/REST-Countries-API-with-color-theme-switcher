import styles from '../styles/padding.module.css';
import SearchField from '../ui/SearchField';
import SelectByRegion from '../components/SelectByRegion';
import Loader from '../components/Loader';
import Error from '../components/Error';
import useCountries from '../hooks/useCountries';

const Home = () => {
  const { countries, isLoading, error } = useCountries();
  if (error) return <Error message={error} />;

  return (
    <main className={` ${styles.headerPadding} relative flex h-screen flex-col gap-14 dark:bg-neutral-very-dark-blue-bg`}>
      <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <SearchField />
        <SelectByRegion />
      </div>

      {isLoading ? <Loader /> : ''}
    </main>
  );
};

export default Home;
