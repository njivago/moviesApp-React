import { Link } from 'react-router-dom';

const Film = (film) => {
  const RATE_CLASS = 'movie__average movie__average--';

  const infoEvent = () => {
    film.setFilmId(film.film.filmId);
    film.setIndex(film.index + 1);
  };

  let rate = 0;
  let nameEn = '';
  let event;
  let e;
  if (film.film.ratingKinopoisk) {
    rate = film.film.ratingKinopoisk;
    nameEn = film.film.nameOriginal;
    event = '';
  } else {
    rate = film.film.rating;
    nameEn = film.film.nameEn;
    event = infoEvent;
  }

  const addFav = () => {
    return (
      <div className="favourites">
        <svg
          onClick={() => {
            film.handleFavouritesClick(film.film);
          }}
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          fill="#34323f"
          class="bi bi-heart-fill"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
          />
        </svg>
      </div>
    );
  };

  const removeFav = () => {
    return (
      <div className="favourites">
        <svg
          onClick={() => {
            film.removeFavouriteMovie(film.film);
          }}
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          fill="#34323f"
          class="bi bi-trash-fill"
          viewBox="0 0 16 16"
        >
          <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" />
        </svg>
      </div>
    );
  };

  if (film.fav === 'favor') {
    e = removeFav();
  } else e = addFav();

  const getClassByRate = (vote) => {
    if (vote >= 7) {
      return RATE_CLASS + 'green';
    } else if (vote > 5) {
      return RATE_CLASS + 'orange';
    } else {
      return RATE_CLASS + 'red';
    }
  };
  return (
    <div className="movie">
      <Link to="/moviesApp-React/aboutFilm" onClick={event}>
        <div className="movie__cover-inner">
          <img
            src={film.film.posterUrlPreview}
            className="movie__cover"
            alt={film.film.nameRu}
          />
          <div className="movie__cover--darkened"></div>
        </div>
      </Link>
      <div className="movie__info">
        <div className="movie__title">
          <span className="title__en">{nameEn}</span> <br /> {film.film.nameRu}
        </div>
        <div className={getClassByRate(rate)}>{rate}</div>
        {e}
      </div>
    </div>
  );
};

export default Film;
