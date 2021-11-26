const Pagination = (props) => {
  const arr = ['1', '2', '3', '4', '5'];
  const filters = document.querySelectorAll('.sidebar__link');
  const pags = document.querySelectorAll('.pag__link');
  const filterUrl = 'v2.1/films/search-by-filters?genre=';
  return (
    <div class="pagination">
      {arr.map((i) => {
        return (
          <a
            href="#"
            className="pag__link"
            data-page={i}
            onClick={(e) => {
              pags.forEach((i) => {
                i.classList.remove('active');
              });
              e.target.classList.add('active');
              filters.forEach((i) => {
                if (i.classList.contains('active')) {
                  if (i.classList.contains('top')) {
                    props.setPage(
                      `${i.dataset.link}&page=${e.target.dataset.page}`
                    );
                  } else {
                    props.setPage(`${filterUrl}&page=${e.target.dataset.page}`);
                  }
                }
              });
              props.setIndex(props.index + 1);
            }}
          >
            {i}
          </a>
        );
      })}
    </div>
  );
};

export default Pagination;
