import axios from "axios";
import { useEffect, useState } from "react";
export default function NewsList() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    axios
      .get("http://hn.algolia.com/api/v1/search?query=")
      .then((response) => {
        setNews(response.data.hits);
        console.log(response.data.hits);
        // console.log(response.data.hits[0].objectID);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  // axios
  //   .get("http://hn.algolia.com/api/v1/search?query=React")
  //   .then((response) => {
  //     setNews(response);
  //     console.log(news);
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //   });

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
