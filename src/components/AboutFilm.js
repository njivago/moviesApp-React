import Film from './Film';

const AboutFilm = (movie) => {
  const film = movie.movie;
  return (
    <div class="container__info">
      <Film film={movie} />
      <div class="description">
        <h3 class="slogan">{film.slogan}</h3>
        <p>
          {film.description} <br /> {film.shortDescription}
        </p>
        <div class="desc">{film.editorAnnotation}</div>
        <div class="propert">
          <h4>Year: {film.year}</h4>
          <h4>Film lenght: {film.filmLenght} min</h4>
        </div>
      </div>
    </div>
  );
};

export default AboutFilm;
