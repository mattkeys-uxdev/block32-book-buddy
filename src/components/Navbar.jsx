import { Link } from "react-router-dom";
import { useAuth } from "../auth/AuthContext";

export default function Navbar() {
  const { token, logout } = useAuth;

  function handleLogout() {
    logout();
  }
  return (
    <nav>
      <h1>Book Buddy</h1>
      <Link to="/">Books</Link>
      {token ? (
        <>
          <Link to="/account">Account</Link>
          <button onClick={handleLogout}>Logout</button>
        </>
      ) : (
        <>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
        </>
      )}
    </nav>
  );
}
