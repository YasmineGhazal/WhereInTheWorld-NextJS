import Card from '../../components/Card'
import Filters from '../../components/Filters';

const Home = async ({ searchParams }) => {
  const { region, search } = searchParams;

  const resMatchingRegion = await fetch(`https://restcountries.com/v3.1/${region || 'all'}?fields=name,capital,population,region,flags,cca3`);
  let countries = await resMatchingRegion.json() || [];

  if (search) {
    const resMatchingNames = await fetch(`https://restcountries.com/v3.1/name/${search}?fields=cca3`);
    if (resMatchingNames.ok) {
      const matchingNameCountries = await resMatchingNames.json();
      const matchingCodes = new Set((matchingNameCountries).map(c => c.cca3));

      countries = countries.filter(country => matchingCodes.has(country.cca3));
    } else {
      countries = [];
    }
  }

  return (<>
    <Filters />
    <div className="card-list"> {countries.length ? countries.map(country => <Card country={country} key={country.cca3} />) : <div class="no-match"> No matching countries </div>} </div>
  </>);
}

export default Home;
