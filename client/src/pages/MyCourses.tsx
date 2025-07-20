import { useEffect, useState } from "react";
import api from "../services/api";

export default function MyCourses() {
  const [courses, setCourses] = useState([]);

  const fetchCourses = async () => {
    try {
      const res = await api.get("/my-courses");
      setCourses(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  const unenroll = async (id: string) => {
    try {
      await api.delete(`/courses/${id}/unenroll`);
      alert("✅ Successfully unenrolled from the course.");

      // Refresh the list
      const res = await api.get("/my-courses");
      setCourses(res.data);
    } catch (err) {
      alert("❌ Failed to unenroll from the course.");
      console.error(err);
    }
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  return (
    <div className="min-h-screen px-4 py-6 bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100">
      <h2 className="text-2xl font-bold text-indigo-700 mb-6 text-center">🎓 My Enrolled Courses</h2>

      {courses.length === 0 ? (
        <p className="text-center text-gray-600">You haven’t enrolled in any courses yet.</p>
      ) : (
        <div className="grid gap-4 max-w-2xl mx-auto">
          {courses.map((c: any) => (
            <div
              key={c._id}
              className="bg-white border border-gray-200 p-5 rounded-xl shadow-md transition hover:shadow-lg"
            >
              <h3 className="text-xl font-semibold text-purple-700 mb-1">📘 {c.title}</h3>
              <p className="text-gray-700 mb-2">📝 {c.description}</p>
              <p className="text-sm text-gray-500 mb-3">👨‍🏫 Instructor: {c.instructorId?.name || "Unknown"}</p>
              <button
                onClick={() => unenroll(c._id)}
                className="text-red-600 hover:underline text-sm font-medium"
              >
                🚫 Unenroll
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
