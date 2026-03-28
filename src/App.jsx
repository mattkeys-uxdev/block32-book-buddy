// import { useState } from "react";
// import { Routes, Route } from "react-router-dom";
// import Navbar from "./components/Navbar";
// import Books from "./pages/Books";
// import BookDetails from "./pages/BookDetails";
// import Register from "./auth/Register";
// import Login from "./auth/Login";
// import Account from "./pages/Account";
// import ProtectedRoute from "./components/ProtectedRoute";

// function App() {
//   const [token, setToken] = useState(localStorage.getItem("token"));

//   return (
//     <>
//       <Navbar token={token} setToken={setToken} />
//       <Routes>
//         <Route path="/" element={<Books />} />
//         <Route path="/books" element={<Books />} />
//         <Route path="/books/:id" element={<BookDetails token={token} />} />
//         <Route path="/register" element={<Register setToken={setToken} />} />
//         <Route element={<ProtectedRoute />}>
//           <Route path="/account" element={<Account />} />
//         </Route>
//       </Routes>
//     </>
//   );
// }
// export default App;

import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Books from "./pages/Books";
import BookDetails from "./pages/BookDetails";
import Register from "./auth/Register";
import Login from "./auth/Login";
import Account from "./pages/Account";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Books />} />
        <Route path="/books" element={<Books />} />
        <Route path="/books/:id" element={<BookDetails />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/account" element={<Account />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
