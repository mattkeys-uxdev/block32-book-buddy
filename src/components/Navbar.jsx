import { Link } from "react-router-dom";
import { useAuth } from "../auth/AuthContext";

export default function Navbar() {
  const { token, logout } = useAuth();

  function handleLogout() {
    logout();
  }
  return (
    <nav>
      <h1>Book Buddy</h1>
      <div className="nav-links">
        <Link to="/" className="nav-link">
          Books
        </Link>
        {token ? (
          <>
            <Link to="/account" className="nav-link">
              Account
            </Link>
            <button className="nav-link" onClick={handleLogout}>
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/login" className="nav-link">
              Login
            </Link>
            <Link to="/register" className="nav-link">
              Register
            </Link>
          </>
        )}
      </div>
    </nav>
  );
}
