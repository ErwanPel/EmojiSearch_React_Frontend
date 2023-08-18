const Search = ({ setSearch, data }) => {
  const handleSearch = (event) => {
    setSearch((prev) => event.target.value);
  };
  let symbol = "";
  return (
    <header>
      {data.map((element) => {
        if (element.title === "Sunglasses") symbol = element.symbol;
      })}
      <div>
        <span>{symbol}</span>
        <h1>Emoji Search</h1>
        <span>{symbol}</span>
      </div>
      <label htmlFor="searching"></label>
      <input
        type="text"
        name="searching"
        id="searching"
        placeholder="What emoji are you looking for ?"
        onChange={handleSearch}
      />
    </header>
  );
};

export default Search;
