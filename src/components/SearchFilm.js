import { Link } from 'react-router-dom';

const SearchFilm = (props) => {
  return (
    <header className="container">
      <div className="header__content">
        <Link to="/moviesApp-React" className="header__logo">
          Movies App
        </Link>
        <Link to="/favourites" className="sidebar__link">
          Favourites
        </Link>
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
