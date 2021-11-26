import Film from './components/Film';
import { useState, useEffect } from 'react';
import Filters from './components/Filters';
import Header from './components/Header';

function App() {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const searchUrl = 'v2.1/films/search-by-keyword?keyword=';

  useEffect(() => {
    if (searchValue) {
      const url = searchUrl + searchValue;
      requestData(url);
    } else requestData();
  }, [searchValue]);

  async function requestData(url) {
    if (url === undefined)
      url = 'v2.2/films/top?type=TOP_100_POPULAR_FILMS&page=1';
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
      <Header searchValue={searchValue} setSearchValue={setSearchValue} />
      <div className="container_main">
        <Filters />
        <div className="film-container">
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
