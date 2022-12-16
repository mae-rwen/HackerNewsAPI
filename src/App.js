import "bootstrap/dist/css/bootstrap.min.css";
import OurNavbar from "./components/OurNavbar";
import NewsList from "./components/NewsList";
import Footer from "./components/Footer";
import SearchBar from "./components/SearchBar";
import "./style.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [news, setNews] = useState([]);
  const [search, setSearch] = useState("React");
  const [page, setPage] = useState(0);

  useEffect(() => {
    axios
      .get(`http://hn.algolia.com/api/v1/search?query=${search}&page=${page}`)
      .then((response) => {
        const res = response.data.hits;
        if (res.length === 0) {
          toast.error("No matching results");
        } else {
          setNews(res);
        }
      })
      .catch((err) => {
        console.log(err);
        toast.error("Couldn't load data");
      });
  }, [search, page]);

  return (
    <div className="App">
      <OurNavbar />
      <main className="content">
        <SearchBar news={news} setSearch={setSearch} />
        <NewsList news={news} setPage={setPage} page={page}/>
      </main>
      <Footer news={news} setSearch={setSearch} />
    </div>
  );
}

export default App;
