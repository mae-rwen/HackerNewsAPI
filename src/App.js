import "bootstrap/dist/css/bootstrap.min.css";
import OurNavbar from "./components/OurNavbar";
import NewsList from "./components/NewsList";
import Footer from "./components/Footer";
import SearchBar from "./components/SearchBar";
import "./style.css";
import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  
  const [news, setNews] = useState([]);
  const [search, setSearch] = useState("React");
  const [page, setPage] = useState(0);
  
  useEffect(() => {
    axios
      .get(`http://hn.algolia.com/api/v1/search?query=${search}&page=${page}`)
      .then((response) => {
        setNews(response.data.hits);
      }) 
      .catch((err) => {
        console.log(err);
      });
  }, [search, page]);

  return (
    <div className="App">
      <OurNavbar />
      <SearchBar news={news} setSearch={setSearch}/>
      <NewsList news={news} setPage={setPage} />
      <Footer />
    </div>
  );
}

export default App;
