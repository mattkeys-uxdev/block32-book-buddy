import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getAllBooks } from "../api";

export default function Books() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    async function fetchBooks() {
      const data = await getAllBooks();
      setBooks(data);
    }
    fetchBooks();
  }, []);

  return (
    <main>
      <h2>All Books</h2>
      <ul>
        {books.map((book) => (
          <li key={book.id}>
            <Link to={`/books/${book.id}`}>
              <img
                src={book.coverimage}
                onError={(e) => {
                  e.currentTarget.src =
                    "https://cover2coverbookdesign.com/site/wp-content/uploads/2019/03/geometric1.jpg";
                }}
                alt={book.title}
              />
              <h2>{book.title}</h2>
              <p>{book.author}</p>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
