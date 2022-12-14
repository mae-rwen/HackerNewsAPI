
export default function NewsList({news}) {

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
    </div>
  );
}


