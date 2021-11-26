import { Link } from 'react-router-dom';
import Film from './Film';

const AboutFilm = (movie) => {
  return (
    <div className="container__info">
      <Film film={movie.movie} />
      <div className="description">
        <h3 className="slogan">{movie.movie.slogan}</h3>
        <p>
          {movie.movie.description} <br /> {movie.movie.shortDescription}
        </p>
        <div className="desc">{movie.movie.editorAnnotation}</div>
        <div classname="propert">
          <h4>Year: {movie.movie.year}</h4>
          <h4>Film lenght: {movie.movie.filmLength} min</h4>
        </div>
        <div className="button__holder">
          <button className="back__button">
            <Link to="/moviesApp-React" className="back__button_a">
              Back
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutFilm;
