import React, { useState } from 'react';

const SearchBar = () => {
    const [input, setInput] = useState("");

    const fetchData = () => {
        fetch("http://jsonplaceholder.typicode.com/users")
            .then((response) => response.json())
            .then((json) => {
                console.log(json);
            });
    };

    const handleChange = (value) => {
        setInput(value);
        fetchData(value);
    };

    return (
        <form className="d-flex" role="search">
            <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                value={input}
                onChange={(e) => handleChange(e.target.value)}
            />
            <button className="btn btn-outline-success" type="submit">
                Search
            </button>
        </form>
    );
};

export default SearchBar;
