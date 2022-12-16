import SearchBar from "./SearchBar";

export default function Footer({ news, setSearch }) {
  return (
    <div className=" py-2 bg-black">
      <ul className="nav justify-content-center">
        <li className="nav-item">
          <a href="#guidelines" className="nav-link text-light">
            Guidelines
          </a>
        </li>
        <li className="nav-item">
          <a href="#faq" className="nav-link text-light ">
            FAQ
          </a>
        </li>
        <li className="nav-item">
          <a href="#lists" className="nav-link px-2 text-light">
            Lists
          </a>
        </li>
        <li className="nav-item">
          <a href="#api" className="nav-link text-light">
            API
          </a>
        </li>
        <li className="nav-item">
          <a href="#security" className="nav-link text-light ">
            Security
          </a>
        </li>
        <li className="nav-item">
          <a href="#legal" className="nav-link text-light">
            Legal
          </a>
        </li>
        <li className="nav-item">
          <a href="#apply" className="nav-link text-light">
            Apply to G3
          </a>
        </li>
        <li className="nav-item">
          <a href="#contact" className="nav-link text-light">
            Contact
          </a>
        </li>
      </ul>
      <SearchBar news={news} setSearch={setSearch} />
    </div>
  );
}
