import { useState, useEffect } from "react";
import { useAuth } from "../auth/AuthContext";
import { getMe, returnBook } from "../api";

export default function Account() {
  const { token } = useAuth();
  const [user, setUser] = useState(null);

  useEffect(() => {
    async function fetchUser() {
      const data = await getMe(token);
      setUser(data);
    }
    fetchUser();
  }, [token]);

  async function handleReturn(reservationId) {
    await returnBook(token, reservationId);
    const updated = await getMe(token);
    setUser(updated);
  }

  if (!user) return <p>Loading...</p>;

  return (
    <main>
      <h1>My Account</h1>
      <p>
        Name: {user.firstname} {user.lastname}
      </p>
      <p>Email: {user.email}</p>
      <h2> My Reservations</h2>
      {user.reservations.length === 0 ? (
        <p>You have no reservations.</p>
      ) : (
        <ul>
          {user.reservations.map((reservation) => (
            <li key={reservation.Id}>
              <img
                src={reservation.coverimage}
                onError={(e) => {
                  e.currentTarget.src =
                    "https://cover2coverbookdesign.com/site/wp-content/uploads/2019/03/geometric1.jpg";
                }}
                alt={reservation.title}
              />
              <h3>{reservation.title}</h3>
              <p>{reservation.author}</p>
              <button onClick={() => handleReturn(reservation.id)}>
                Return
              </button>
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}
