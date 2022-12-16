import ReactPaginate from "react-paginate";

export default function NewsList({ news, setPage }) {
  const handlePageClick = (data) => {
    setPage(data.selected);
  };

  return (
    <div className="NewList">
      <ol>
        {news.map((item, index) => {
          const date = item.created_at;
          const formattedDate = new Date(date).toUTCString();     

          return (
            <li className="newsLi" key={item.objectID}>             
              <a
                href={item.url}
                className="text-decoration-none text-dark"
                target="_blank"
              >
                <h5>{item.title ? item.title : "No title provided"}</h5>
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

      <div className="paginatorContainer">
      <ReactPaginate
        previousLabel={"<<"}
        nextLabel={">>"}
        breakLabel={"..."}
        pageCount={50}
        marginPagesDisplayed={3}
        pageRangeDisplayed={3}
        onPageChange={handlePageClick}
        containerClassName={"pagination"}
        pageClassName={"page-item"}
        pageLinkClassName={"page-link text-bg-dark"}
        previousLinkClassName={"page-link text-bg-secondary"}
        nextLinkClassName={"page-link text-bg-secondary"}
        breakClassName={"page-link text-bg-secondary"}
        activeClassName={"active"}
      />
      </div>
    </div>
  );
}
