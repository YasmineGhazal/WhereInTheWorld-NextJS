'use client';
import Link from 'next/link'
import Image from 'next/image'

const Card = ({ country }) => {
    return <div className="card" name={country.name.official.toLowerCase()}>
        <Link href={`/country/${country.cca3}`} > <Image src={country.flags.png} alt={country.flags.alt} className="flag" height="180" width="200" /> </Link>

        <div className="card-data">
            <div className="country-name">{country.name.official}</div>
            <div className="info">
                <span className="info-title">Population: </span>{country.population}
            </div>
            <div className="info">
                <span className="info-title">Region: </span>{country.region}
            </div>
            <div className="info">
                <span className="info-title">Capital: </span>{country.capital}
            </div>
        </div>
    </div >
}

export default Card;
