import BackButton from '../components/BackButton';
import useCountryDetails from '../hooks/useCountryDetails';

const CountryDetail = () => {
  const textColor = 'dark:text-neutral-dark-gray-input';
  const flexLayout = 'flex flex-col gap-3';
  const { borderCountries, capital, flags, languages, population, region, subregion, name, tld, currencies } = useCountryDetails();

  return (
    <div className="px-6 py-10 dark:text-white">
      <BackButton />

      <div className="flex flex-col gap-6 text-sm sm:grid sm:grid-cols-2">
        <img src={flags.png} alt={`${name.common} flag`} className="mb-4 block h-64 w-full rounded-sm object-cover" />

        <div className={`${flexLayout}`}>
          <h2 className="mb-2 text-2xl font-bold">{name.common}</h2>

          <p>
            Native Name: <span className={textColor}>Native Name</span>
          </p>
          <p>
            Population: <span className={textColor}>{population}</span>
          </p>
          <p>
            Region: <span className={textColor}>{region}</span>
          </p>
          <p>
            Subregion: <span className={textColor}>{subregion}</span>
          </p>

          <p>
            Capital: <span className={textColor}>{capital}</span>
          </p>
        </div>

        <div className={flexLayout}>
          <p>
            Top Level Domain: <span className={textColor}>{tld}</span>
          </p>
          <p>
            Currencies: {''}
            <span className={textColor}>
              {Object.values(currencies)
                .map((currency) => currency.name)
                .join(', ')}
            </span>
          </p>
          <p>
            Languages: {''}
            <span className={textColor}>
              {languages &&
                Object.entries(languages).map(([code, language]) => (
                  <span key={code}>
                    {language}
                    {', '}
                  </span>
                ))}
            </span>
          </p>
        </div>

        <div>
          Border Countries:
          <div className="mt-3 flex flex-wrap gap-4  dark:text-neutral-dark-gray-input">
            {borderCountries.map((country) => (
              <span className="shadow-[hsl(200, 15%, 8%)] rounded-sm px-5 py-[6px] shadow-md dark:bg-neutral-dark-blue-elements" key={country}>
                {country}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountryDetail;
