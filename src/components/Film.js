import { Link } from 'react-router-dom';

const Film = (film) => {
  const RATE_CLASS = 'movie__average movie__average--';

  let rate = 0;
  if (film.film.rating) rate = film.film.rating;
  else rate = film.film.ratingKinopoisk;

  let nameEn = '';
  if (film.film.nameEn) nameEn = film.film.nameEn;
  else nameEn = film.film.nameOriginal;

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
      <Link
        to="/moviesApp-React/aboutFilm"
        onClick={(e) => {
          film.setFilmId(film.film.filmId);
          film.setIndex(film.index + 1);
        }}
      >
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
      </div>
    </div>
  );
};

export default Film;
