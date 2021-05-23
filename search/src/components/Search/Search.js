import './Search.css';

const Search = ({ onChange }) => {
  return (
    <div className="search-container">
      <input
        className="search-input"
        type="text"
        placeholder="Search"
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};

export default Search;
