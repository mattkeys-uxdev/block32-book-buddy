import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { getBookById, reserveBook } from "../api";
import { useAuth } from "../auth/AuthContext";

export default function BookDetails() {
  const [book, setBook] = useState(null);
  const { id } = useParams();
  const { token } = useAuth();

  useEffect(() => {
    async function fetchBook() {
      const data = await getBookById(id);
      setBook(data);
    }
    fetchBook();
  }, [id]);
  async function handleReserve() {
    await reserveBook(token, book.id);
    const updated = await getBookById(id);
    setBook(updated);
  }
  if (!book) return <p>Loading...</p>;

  return (
    <main>
      <img
        src={book.coverimage}
        onError={(e) => {
          e.currentTarget.src =
            "https://cover2coverbookdesign.com/site/wp-content/uploads/2019/03/geometric1.jpg";
        }}
        alt={book.title}
      />
      <h1>{book.title}</h1>
      <p>{book.author}</p>
      <p>{book.description}</p>
      {token && (
        <button onClick={handleReserve} disabled={!book.available}>
          {book.available ? "Reserve" : "Unavailable"}
        </button>
      )}
    </main>
  );
}
