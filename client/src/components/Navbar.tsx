import { Link } from "react-router-dom";
import { getRole, getToken, logout } from "../utils/auth";

export default function Navbar() {
  const token = getToken();
  const role = getRole();
  const name = localStorage.getItem("name");

  return (
    <nav className="bg-white shadow-md py-4 px-6 flex justify-between items-center">
      <Link to="/" className="text-2xl font-bold text-indigo-600">
        EduBot LMS
      </Link>
      <div className="flex items-center gap-4">
        {!token && (
          <>
            <Link to="/" className="text-indigo-500 hover:underline">
              Login
            </Link>
            <Link to="/register" className="text-indigo-500 hover:underline">
              Register
            </Link>
          </>
        )}
        {token && (
          <>
            <span className="text-sm text-gray-700">Hello, {name}</span>
            <Link to="/dashboard" className="text-indigo-500 hover:underline">
              Dashboard
            </Link>
            <button
              onClick={() => {
                logout();
                window.location.href = "/";
              }}
              className="text-red-500 hover:underline"
            >
              Logout
            </button>
          </>
        )}
      </div>
    </nav>
  );
}
