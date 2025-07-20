import CourseList from "../components/CourseList";
import MyCourses from "../pages/MyCourses";
import RoleProtected from "../components/RoleProtected";

export default function StudentDashboard() {
  return (
    <RoleProtected allowedRoles={["student"]}>
      <div className="space-y-8 p-6 bg-gradient-to-br from-purple-50 to-indigo-100 min-h-screen font-sans">
        <h1 className="text-4xl font-extrabold text-purple-700 font-serif text-center">
          🎓 Student Dashboard
        </h1>

        <section className="space-y-4">
          <CourseList />
          <MyCourses />
        </section>
      </div>
    </RoleProtected>
  );
}
