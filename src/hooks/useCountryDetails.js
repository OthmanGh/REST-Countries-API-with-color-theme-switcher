import { useLocation } from 'react-router-dom';
import axios from 'axios';
import { useState, useEffect } from 'react';

const useCountryDetails = () => {
  const location = useLocation();
  const { capital, flags, languages, population, region, subregion, name, tld, currencies, borders } = location.state || {};
  const [borderCountries, setBorderCountries] = useState([]);

  useEffect(() => {
    if (borders && borders.length > 0) {
      const fetchBorderCountries = async () => {
        try {
          const res = await Promise.all(borders.map((border) => axios.get(`https://restcountries.com/v3.1/alpha/${border}`)));
          const countryNames = res.map((response) => response.data[0].name.common);
          setBorderCountries(countryNames);
        } catch (error) {
          console.error('Error fetching border countries:', error);
        }
      };

      fetchBorderCountries();
    }
  }, [borders]);

  return { borderCountries, capital, flags, languages, population, region, subregion, name, tld, currencies };
};

export default useCountryDetails;
