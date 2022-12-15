import ReactPaginate from "react-paginate";

export default function NewsList({news, setPage}) {

    const handlePageClick = (data) => {
    setPage(data.selected)
  }

  return (
    <div className="NewList">
      <ol>
        {news.map((item) => {
          return (
            <li key={item.objectID}>
              <a
                href={item.url}
                className="text-decoration-none text-dark"
                target="_blank"
              >
                <h3>{item.title}</h3>
              </a>
              <span>
                {item.points} points | created by {item.author} | created at{" "}
                {item.created_at}
              </span>
            </li>
          );
        })}
      </ol>
      <br />
      <ReactPaginate 
        previousLabel={'<<'}
        nextLabel={'>>'}
        breakLabel={'...'}
        pageCount={50}
        marginPagesDisplayed={3}
        pageRangeDisplayed={3}
        onPageChange={handlePageClick}
        containerClassName={'pagination'}
        pageClassName={'page-item'}
        pageLinkClassName={'page-link text-dark'}
        previousLinkClassName={'page-link text-dark'}
        nextLinkClassName={'page-link text-dark'}
        breakClassName={'page-link text-dark'}
        activeClassName={'active'}
      />
    </div>
  );
}


