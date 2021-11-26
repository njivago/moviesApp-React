const Film = (film) => {
  const RATE_CLASS = 'movie__average movie__average--';

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
    <div className="movie" data-id={film.film.filmId}>
      <div className="movie__cover-inner">
        <img
          src={film.film.posterUrlPreview}
          className="movie__cover"
          alt={film.film.nameRu}
        />
        <div className="movie__cover--darkened"></div>
      </div>
      <div className="movie__info">
        <div className="movie__title">{film.film.nameRu}</div>
        <div className="movie__category">
          {film.film.genres.map((genre, key) => `  ${genre.genre},`)}
        </div>
        <div className={getClassByRate(film.film.rating)}>
          {film.film.rating}
        </div>
      </div>
    </div>
  );
};

export default Film;
