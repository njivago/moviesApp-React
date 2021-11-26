const Filters = () => {
  const genres = [
    { genre: 'Action', link: '3' },
    { genre: 'Detective', link: '17' },
    { genre: 'Comedy', link: '6' },
    { genre: 'Horror', link: '1' },
    { genre: 'Fantasy', link: '5' },
    { genre: 'Drama', link: '8' },
    { genre: 'Fantastic', link: '2' },
  ];

  return (
    <ul className="sidebar">
      <span id="sidebar__link_h">Genres of films:</span>
      <li id="sidebar__link ">
        <a href="#" className="sidebar__link 1 active" data-link="main">
          Top-100
        </a>
      </li>
      {genres.map((genre) => {
        return (
          <li id="sidebar__link">
            <a href="#" className="sidebar__link" data-link={genre.link}>
              {genre.genre}
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default Filters;
