import { Link } from "react-router-dom";
import RoleProtected from "../components/RoleProtected";
import CourseList from "../components/CourseList";

export default function InstructorDashboard() {
  return (
    <RoleProtected allowedRoles={["instructor"]}>
      <div className="space-y-8 p-6 bg-gradient-to-br from-amber-50 to-rose-100 min-h-screen font-sans">
        <div className="flex justify-between items-center">
          <h1 className="text-4xl font-extrabold text-rose-700 font-serif">
            👩‍🏫 Instructor Dashboard
          </h1>
          <Link
            to="/create-course"
            className="bg-rose-600 text-white px-5 py-2 rounded-xl shadow hover:bg-rose-700 transition duration-200 font-semibold"
          >
            + Create New Course
          </Link>
        </div>

        <section className="space-y-4">
          <CourseList />
        </section>
      </div>
    </RoleProtected>
  );
}
