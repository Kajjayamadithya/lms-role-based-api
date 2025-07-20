import { useNavigate } from "react-router-dom";
import CourseList from "../components/CourseList";
import { getRole } from "../utils/auth";

export default function CoursesPage() {
  const role = getRole();
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  const formattedRole = role
    ? `${role.charAt(0).toUpperCase() + role.slice(1)}`
    : "Guest";

  return (
    <div className="min-h-screen bg-sky-50 p-6 space-y-6 animate-fade-in">
      {/* Top Bar with Role, Logout, and Profile Card */}
      <div className="flex items-center justify-between bg-white p-4 rounded shadow">
        <div>
          <h2 className="text-xl font-semibold text-indigo-700">
            {formattedRole} View
          </h2>
          <p className="text-gray-600 text-sm">
            {role
              ? "Explore and manage courses based on your access level."
              : "Login to enroll or manage courses based on your role."}
          </p>
        </div>
        <div className="flex items-center gap-4">
          {/* User Profile Card */}
          <div className="bg-indigo-100 text-indigo-800 px-4 py-2 rounded">
            Role: <strong>{formattedRole}</strong>
          </div>
          {/* Logout Button */}
          <button
            onClick={handleLogout}
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
          >
            Logout
          </button>
        </div>
      </div>

      {/* Course List Section */}
      <CourseList />
    </div>
  );
}
