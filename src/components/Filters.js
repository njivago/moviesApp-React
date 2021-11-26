import { useState } from 'react';

const Filters = (props) => {
  const filters = document.querySelectorAll('.sidebar__link');
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
        <a
          href="#"
          className="sidebar__link active"
          data-link="v2.2/films/top?type=TOP_100_POPULAR_FILMS"
          onClick={(e) => {
            filters.forEach((i) => i.classList.remove('active'));
            props.setLink('');
            e.target.classList.add('active');
          }}
        >
          Top-100
        </a>
      </li>
      {genres.map((genre) => {
        return (
          <li id="sidebar__link">
            <a
              href="#"
              className="sidebar__link"
              data-link={genre.link}
              onClick={(e) => {
                filters.forEach((i) => i.classList.remove('active'));
                props.setLink(e.target.dataset.link);
                e.target.classList.add('active');
              }}
            >
              {genre.genre}
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default Filters;
