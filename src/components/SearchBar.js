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
 
  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="What are you searching for?"
        onChange={handleSearchChange}
        value={value}
      />
      <button className="btn btn-dark">Search</button>
    </form>
  );
}
