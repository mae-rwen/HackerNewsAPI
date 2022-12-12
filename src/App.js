import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar'
import NewsList from './components/NewsList';
import Footer from './components/Footer';
import './style.css';

function App() {
  return (
    <div className="App">
        <Navbar />
        <NewsList />
        <Footer/>
      </div>
  );
}

export default App;
