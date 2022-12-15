import { useState } from "react";

export default function SearchBar({ setSearch }) {
  const [value, setValue] = useState("");

  const handleSearchChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearch(value);
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="What are you searching for?"
        onChange={handleSearchChange}
      />
      <button>Search</button>
    </form>
  );
}
