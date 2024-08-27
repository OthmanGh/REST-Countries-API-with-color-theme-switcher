import styles from '../styles/padding.module.css';
import SearchField from '../ui/SearchField';
import SelectByRegion from '../components/SelectByRegion';
import Loader from '../components/Loader';
import Error from '../components/Error';
import useCountries from '../hooks/useCountries';
import CountriesList from '../ui/CountriesList';

const Home = () => {
  const { isLoading, error, searchedCountries, setSearchQuery, setSelectedRegion } = useCountries();

  if (error) return <Error message={error} />;

  return (
    <main className={` ${styles.headerPadding} flex h-full flex-col gap-14`}>
      <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <SearchField onSearchQuery={setSearchQuery} />
        <SelectByRegion onSelectedRegion={setSelectedRegion} />
      </div>

      <div>{isLoading ? <Loader /> : <CountriesList countries={searchedCountries} />}</div>
    </main>
  );
};

export default Home;
