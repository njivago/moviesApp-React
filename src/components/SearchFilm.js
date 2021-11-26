const SearchFilm = (props) => {
  return (
    <header className="container">
      <div className="header__content">
        <a href="index.html" className="header__logo">
          Movies App
        </a>
        <input
          onChange={(e) => {
            props.setSearchValue(e.target.value);
            props.setIndex(props.index + 1);
          }}
          value={props.searchValue}
          className="header__search"
          placeholder="Search"
        />
      </div>
    </header>
  );
};

export default SearchFilm;
