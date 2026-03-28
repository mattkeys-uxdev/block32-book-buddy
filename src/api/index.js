const BASE_URL = "https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api";

export async function getAllBooks() {
  const response = await fetch(`${BASE_URL}/books`);
  const data = await response.json();
  return data;
}

export async function getBookById(id) {
  const response = await fetch(`${BASE_URL}/books/${id}`);
  const data = await response.json();
  return data;
}

export async function registerUser(firstName, lastName, email, password) {
  const response = await fetch(`${BASE_URL}/users/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application.json",
    },
    body: JSON.stringyfy({ firstName, lastName, email, password }),
  });
  const data = await response.json();
  return data;
}

export async function loginUser(email, password) {
  const response = await fetch(`${BASE_URL}/users/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application.json",
    },
    body: JSON.stringify({ email, password }),
  });
  const data = await response.json();
  return data;
}

export async function getMe(token) {
  const response = await fetch(`${BASE_URL}/users/me`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  const data = await response.json();
  return data;
}

export async function reserveBook(token, bookId) {
  const response = await fetch(`${BASE_URL}/reservations`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: json.stringify({ bookId }),
  });
  const data = await response.json();
  return data;
}

export async function returnBook(token, reservationId) {
  const response = await fetch(`${BASE_URL}/reservations/${reservationId}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response;
}
