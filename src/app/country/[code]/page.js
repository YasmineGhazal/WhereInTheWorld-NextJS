import Link from 'next/link';
import Image from 'next/image';

const Country = async ({ params }) => {
    const res = await fetch(`https://restcountries.com/v3.1/alpha/${params.code}?fields=name,capital,population,region,flags,subregion,currencies,languages,borders`);
    const countryData = await res.json();

    const data = {
        population: countryData.population,
        capital: countryData.capital,
        region: countryData.region,
        subregion: countryData.subregion,
        flag: countryData.flags.png,
        flagAlt: countryData.flags.alt,
        name: countryData.name.official,
        nativeName: Object.keys(countryData.name.nativeName).map(key => countryData.name.nativeName[key].official),
        currencies: Object.keys(countryData.currencies).map(key => `${countryData.currencies[key].name} (${countryData.currencies[key].symbol})`),
        borders: countryData.borders,
        languages: Object.keys(countryData.languages).map(key => `${countryData.languages[key]}`).join(', '),
    };

    return (
        <div className="country-content">
            <Image src={data.flag} alt={data.flagAlt} width="100" height="100" />
            <div className="country-data">
                <h1>{data.name}</h1>
                <div className="country-data-mid">
                    <p><span className="info-title">Native name: </span>{data.nativeName}</p>
                    <p><span className="info-title">Population: </span>{data.population} </p>
                    <p><span className="info-title">Region: </span>{data.region} </p>
                    <p><span className="info-title">Sub-region: </span>{data.subregion}</p>
                    <p><span className="info-title">Capital: </span>{data.capital} </p>
                    <p><span className="info-title">Currencies: </span>{data.currencies}</p>
                    <p><span className="info-title">Languages: </span>{data.languages}</p>
                </div>
                {!!data.borders.length && <div className="borders">
                    <span className="info-title">Border countries: </span>
                    {data.borders.map(border => <Link href={`/country/${border}`} key={border}>{border}</Link>)}
                </div>}
            </div>
        </div>
    );
}

export default Country;
