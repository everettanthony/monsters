import './search.css';

function SearchInput({placeholder, handleChange}) {
  return (
    <div className="search">
      <input 
        className="search-field"
        type="text"
        placeholder={placeholder}
        onChange={handleChange} 
      />
    </div>
  );
}

export default SearchInput;