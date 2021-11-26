const Pagination = (props) => {
  const arr = ['1', '2', '3', '4', '5'];
  const filters = document.querySelectorAll('.sidebar__link');
  const pags = document.querySelectorAll('.pag__link');
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
                  props.setPage(
                    `${i.dataset.link}&page=${e.target.dataset.page}`
                  );
                }
              });
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
