import { createContext, useContext, useState } from "react";

const BASE_URL = "https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [token, setToken] = useState(() => localStorage.getItem("token"));

  const register = async (credentials) => {
    const response = await fetch(`${BASE_URL}/users/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(credentials),
    });
    const result = await response.json();
    if (!response.ok) throw Error(result.message);
    localStorage.setItem("token", result.token);
    setToken(result.token);
  };
  const login = async (credentials) => {
    const response = await fetch(`${BASE_URL}/users/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(credentials),
    });
    const result = await response.json();
    if (!response.ok) throw Error(result.message);
    localStorage.setItem("token", result.token);
    setToken(result.token);
  };

  const logout = () => {
    localStorage.removeItem("token");
    setToken(null);
  };
  const value = { token, register, login, logout };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) throw Error("useAuth must be used within AuthProvider");
  return context;
}
