import SearchBar from "./SearchBar";

export default function Footer({ news, setSearch }) {
  return (
    <div className="footer-block">
      <hr />
      <p>
        Guidelines | FAQ | Lists | API | Security | Legal | Apply to YC |
        Contact
      </p>
      <footer className="Footer">
        <SearchBar news={news} setSearch={setSearch} />
      </footer>
    </div>
  );
}
