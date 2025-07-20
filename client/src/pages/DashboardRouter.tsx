import { useEffect, useState } from "react";
import StudentDashboard from "../dashboards/StudentDashboard";
import InstructorDashboard from "../dashboards/InstructorDashboard";
import AdminDashboard from "../dashboards/AdminDashboard";

export default function DashboardRouter() {
  const [role, setRole] = useState<string | null>(null);
  const [name, setName] = useState<string>("");

  useEffect(() => {
    const storedRole = localStorage.getItem("role");
    const storedName = localStorage.getItem("name") || "User";
    setRole(storedRole);
    setName(storedName);
  }, []);

  const handleLogout = () => {
    localStorage.clear();
    window.location.href = "/login";
  };

  const renderDashboard = () => {
    if (role === "student") return <StudentDashboard />;
    if (role === "instructor") return <InstructorDashboard />;
    if (role === "admin") return <AdminDashboard />;
    return <div className="text-red-500 font-semibold">Unauthorized or unknown role</div>;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="flex justify-between items-center bg-indigo-600 text-white px-6 py-4 shadow-md">
        <div className="flex items-center gap-4">
          <div className="bg-white text-indigo-700 px-3 py-1 rounded-lg font-semibold shadow-sm">
            Role: {role?.toUpperCase()}
          </div>
          <div className="bg-white text-indigo-700 px-3 py-1 rounded-lg shadow-sm">
            👤 {name}
          </div>
        </div>
        <button
          onClick={handleLogout}
          className="bg-white text-red-600 hover:bg-red-100 px-4 py-2 rounded font-semibold transition"
        >
          🚪 Logout
        </button>
      </header>

      <main className="p-6">
        {renderDashboard()}
      </main>
    </div>
  );
}
