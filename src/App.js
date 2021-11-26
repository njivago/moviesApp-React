import Film from './components/Film';
import { useState, useEffect } from 'react';
import Filters from './components/Filters';
import SearchFilm from './components/SearchFilm';
import Pagination from './components/Pagination';

function App() {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [link, setLink] = useState('');
  const [page, setPage] = useState('');
  const searchUrl = 'v2.1/films/search-by-keyword?keyword=';
  const filterUrl = 'v2.1/films/search-by-filters?genre=';

  useEffect(() => {
    if (page) requestData(page);
    else if (link) {
      if (link === 'main') requestData();
      else {
        const url = filterUrl + link;
        requestData(url);
      }
    } else if (searchValue) {
      const url = searchUrl + searchValue;
      requestData(url);
    } else requestData();
  }, [searchValue, link, page]);

  async function requestData(url) {
    if (url === undefined)
      url = 'v2.2/films/top?type=TOP_100_POPULAR_FILMS&page=';
    const res = await fetch(`https://kinopoiskapiunofficial.tech/api/${url}`, {
      headers: {
        'Content-Type': 'application/json',
        'X-API-KEY': '8c8e1a50-6322-4135-8875-5d40a5420d86',
      },
    });
    const json = await res.json();
    if (json.films) {
      setMovies(json.films);
    }
  }

  return (
    <>
      <SearchFilm searchValue={searchValue} setSearchValue={setSearchValue} />
      <div className="container_main">
        <Filters link={link} setLink={setLink} />
        <div className="film-container">
          <Pagination page={page} setPage={setPage} />
          <div className="movies">
            {movies.map((movie) => {
              return <Film film={movie} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
