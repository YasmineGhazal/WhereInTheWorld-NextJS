const Filter = ({ onChange }) => {
  return (
    <select className="filter" onChange={onChange}>
      <option value="all" default>Filter by Region</option>
      <option value="region/africa">Africa</option>
      <option value="region/america">America</option>
      <option value="region/asia">Asia</option>
      <option value="region/europe">Europe</option>
      <option value="region/oceania">Oceania</option>
    </select>);
};

export default Filter;
