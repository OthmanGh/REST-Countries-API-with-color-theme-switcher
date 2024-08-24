import { useEffect, useState } from 'react';

const useCountries = () => {
  const [countries, setCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const searchedCountries = searchQuery === '' ? countries : countries.filter((country) => country.name.official.toLowerCase().includes(searchQuery));

  useEffect(() => {
    const fetchCountries = async () => {
      setIsLoading(true);

      try {
        const res = await fetch('https://restcountries.com/v3.1/all');
        if (!res.ok) throw new Error('Failed to fetch countries');
        const data = await res.json();
        setCountries(data);
      } catch (error) {
        setError(error?.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCountries();
  }, []);

  return { isLoading, error, setSearchQuery, searchedCountries };
};

export default useCountries;
