import { useState } from 'react';

export default function SearchBar({setSearch}) {
const [value, setValue] = useState("");

const handleSearchChange = (e) => {
    setValue(e.target.value)
}

const handleSubmit = (e) => {
    e.preventDefault()
    setSearch(value)
}

    return (
        <div className="SearchBar">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="What are you searching for?"
            onChange={handleSearchChange}
          />
          <button>Search</button>
        </form>
      </div>
    )
  }
