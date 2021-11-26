import Film from './components/Film';
import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Filters from './components/Filters';
import SearchFilm from './components/SearchFilm';
import Pagination from './components/Pagination';
import AboutFilm from './components/AboutFilm';

function App() {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [link, setLink] = useState('');
  const [page, setPage] = useState('');
  const [index, setIndex] = useState(0);
  const [filmId, setFilmId] = useState('');
  const [movie, setMovie] = useState('');
  const searchUrl = 'v2.1/films/search-by-keyword?keyword=';
  const filterUrl = 'v2.1/films/search-by-filters?genre=';
  const aboutFilm = 'v2.2/films/';

  useEffect(() => {
    if (filmId) {
      const url = aboutFilm + filmId;
      requestData(url);
    } else if (page) {
      requestData(`${page}`);
    } else if (link) {
      if (link === 'main') requestData();
      else {
        const url = filterUrl + link;
        requestData(url);
      }
    } else if (searchValue) {
      const url = searchUrl + searchValue;
      requestData(url);
    } else requestData();
    setLink('');
    setPage('');
    setFilmId('');
  }, [index, movie]);

  function requestData(url) {
    if (url === undefined)
      url = 'v2.2/films/top?type=TOP_100_POPULAR_FILMS&page=';
    const response = fetch(`https://kinopoiskapiunofficial.tech/api/${url}`, {
      headers: {
        'Content-Type': 'application/json',
        'X-API-KEY': '8c8e1a50-6322-4135-8875-5d40a5420d86',
      },
    });
    response
      .then((res) => res.json())
      .then((data) => {
        if (data.films) {
          setMovies(data.films);
          console.log(movies);
        } else {
          setMovie(data);
          console.log(movie);
        }
      });
  }

  return (
    <>
      <SearchFilm
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        setIndex={setIndex}
        index={index}
      />
      <div className="container_main">
        <Filters
          link={link}
          setLink={setLink}
          setIndex={setIndex}
          index={index}
        />
        <Routes>
          <Route
            path="/moviesApp-React"
            element={
              <div className="film-container">
                <Pagination
                  page={page}
                  setPage={setPage}
                  setIndex={setIndex}
                  index={index}
                />
                <div className="movies">
                  {movies.map((movie) => {
                    return (
                      <Film
                        film={movie}
                        filmId={filmId}
                        setFilmId={setFilmId}
                        index={index}
                        setIndex={setIndex}
                      />
                    );
                  })}
                </div>
              </div>
            }
          />
          <Route
            path="/moviesApp-React/aboutFilm/"
            element={
              <div className="film-container">
                <AboutFilm movie={movie} />
              </div>
            }
          />
        </Routes>
      </div>
    </>
  );
}

export default App;
