import { useState } from "react";

export default function SearchBar({ setSearch }) {
  const [value, setValue] = useState("");

  const handleSearchChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearch(value);
    setValue("");
  };
  const submitEnter = (event) => {
    if (event.keyCode === 13) {
      handleSubmit(event);
    }
  };
  return (
    <div className="SearchBar">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onKeyDown={(e) => submitEnter(e)}
          placeholder="What are you searching for?"
          onChange={handleSearchChange}
          value={value}
        />
        <button>Search</button>
      </form>
    </div>
  );
}
