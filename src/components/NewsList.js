import Typography from '@mui/material/Typography';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

export default function NewsList({ news, setPage, page}) {
  
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
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
      <Stack spacing={2}>
      <Pagination count={50} page={page} onChange={handleChange} />
      </Stack>
      </div>

    </div>
  );
}
