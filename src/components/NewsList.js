import ReactPaginate from "react-paginate";

export default function NewsList({news, setPage}) {

    const handlePageClick = (data) => {
    setPage(data.selected)
  }

  return (
    <div className="NewList">
      <ol>
        {news.map((item) => {
          const date = item.created_at;
          const formattedDate = new Date(date).toUTCString();

          return (
            <li key={item.objectID}>
              <a
                href={item.url}
                className="text-decoration-none text-dark"
                target="_blank"
              >
                <h3>{item.title ? item.title : "No title provided"}</h3>
              </a>
              <span>
                {`${item.points !== 0 ? item.points : "no"}
                points | created by 
                ${item.author} | created at ${formattedDate}`}
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
