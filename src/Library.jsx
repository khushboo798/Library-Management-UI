import React, { useState } from "react";
import "./Library.css";

function Library() {
  const [books, setBooks] = useState([
    { id: 1, title: "The Great Gatsby", author: "F. Scott Fitzgerald" },
    { id: 2, title: "To Kill a Mockingbird", author: "Harper Lee" }
  ]);

  const [search, setSearch] = useState("");
  const [newTitle, setNewTitle] = useState("");
  const [newAuthor, setNewAuthor] = useState("");

  const addBook = () => {
    if (newTitle && newAuthor) {
      const newBook = {
        id: Date.now(),
        title: newTitle,
        author: newAuthor
      };
      setBooks([...books, newBook]);
      setNewTitle("");
      setNewAuthor("");
    }
  };

  const removeBook = (id) => {
    setBooks(books.filter(book => book.id !== id));
  };

  const filteredBooks = books.filter(book =>
    book.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container">
      <h1>Library Management System</h1>

      <input
        type="text"
        placeholder="Search books..."
        className="search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="form">
        <input
          type="text"
          placeholder="Book Title"
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
        />

        <input
          type="text"
          placeholder="Author"
          value={newAuthor}
          onChange={(e) => setNewAuthor(e.target.value)}
        />

        <button onClick={addBook}>Add Book</button>
      </div>

      <div className="book-list">
        {filteredBooks.map(book => (
          <div key={book.id} className="book">
            <div>
              <h3>{book.title}</h3>
              <p>{book.author}</p>
            </div>
            <button onClick={() => removeBook(book.id)}>Remove</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Library;

