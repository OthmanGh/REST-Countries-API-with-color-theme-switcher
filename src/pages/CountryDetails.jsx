import BackButton from '../components/BackButton';
import useCountryDetails from '../hooks/useCountryDetails';

const CountryDetail = () => {
  const textColor = 'dark:text-neutral-dark-gray-input';
  const flexLayout = 'flex flex-col gap-3';
  const { borderCountries, capital, flags, languages, population, region, subregion, name, tld, currencies, isLoading } = useCountryDetails();

  return (
    <div className="px-6 py-14 dark:text-white xl:px-10">
      <BackButton />

      <div className="flex flex-col gap-10 text-sm lg:grid lg:grid-cols-2 lg:gap-[5rem]">
        <img src={flags.png} alt={`${name.common} flag`} className="h-72 w-full rounded-md object-cover sm:h-96 sm:w-[80%] sm:object-fill" />

        <div className="flex flex-col p-7">
          <h2 className="mb-6 text-2xl font-bold">{name.common}</h2>

          <div className="mb-10 justify-between lg:flex lg:items-start lg:justify-start">
            <div className={`${flexLayout} mb-10 lg:mb-0`}>
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

            <div className={`${flexLayout} lg:mb-0 lg:ml-32`}>
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
          </div>

          <div>
            <span>Border Countries:</span>
            {isLoading ? (
              <span className="text-neutral-dark-gray-input"> Loading...</span>
            ) : borderCountries.length === 0 ? (
              <span className="text-neutral-dark-gray-input"> No Border Countries</span>
            ) : (
              <div className="mt-3 flex flex-wrap gap-4 dark:text-neutral-dark-gray-input">
                {borderCountries.map((country) => (
                  <span key={country} className="rounded-sm px-3 py-1 shadow-md dark:bg-neutral-dark-blue-elements">
                    {country}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountryDetail;
