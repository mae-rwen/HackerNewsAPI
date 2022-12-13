import "bootstrap/dist/css/bootstrap.min.css";
import OurNavbar from "./components/OurNavbar";
import NewsList from "./components/NewsList";
import Footer from "./components/Footer";
import "./style.css";

function App() {
  return (
    <div className="App">

      <OurNavbar />
      <NewsList />
      <Footer />
    </div>

  );
}

export default App;
