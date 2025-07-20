import CourseList from "../components/CourseList";
import RoleProtected from "../components/RoleProtected";
import UserManagement from "../pages/UserManagement";

export default function AdminDashboard() {
  return (
    <RoleProtected allowedRoles={["admin"]}>
      <div className="space-y-8 p-6 bg-gradient-to-br from-indigo-50 to-sky-100 min-h-screen font-sans">
        <h1 className="text-4xl font-extrabold text-indigo-700 font-serif text-center">
          🛠️ Admin Dashboard
        </h1>

        <section className="space-y-6">
          <UserManagement />
          <CourseList />
        </section>
      </div>
    </RoleProtected>
  );
}
