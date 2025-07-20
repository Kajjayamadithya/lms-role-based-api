import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center bg-gradient-to-br from-blue-50 via-pink-50 to-yellow-50 font-sans px-4">
      <header className="text-4xl md:text-6xl font-extrabold text-rose-700 mb-6 animate-fade-in-down font-serif tracking-tight">
        🎓 EduBot LMS
      </header>

      <p className="text-gray-700 text-lg md:text-xl mb-10 max-w-xl animate-fade-in font-medium">
        Empower your learning journey. Join as a <span className="text-rose-600 font-semibold">Student</span>, contribute as an <span className="text-emerald-600 font-semibold">Instructor</span>, or manage as an <span className="text-indigo-600 font-semibold">Admin</span>.
      </p>

      <div className="flex flex-wrap justify-center gap-4 animate-fade-in-up">
        <Link
          to="/login"
          className="bg-rose-600 hover:bg-rose-700 text-white px-6 py-3 rounded-xl shadow-md font-semibold transition duration-200"
        >
          Login
        </Link>
        <Link
          to="/register"
          className="bg-white border-2 border-rose-600 text-rose-600 px-6 py-3 rounded-xl shadow-md hover:bg-rose-100 font-semibold transition duration-200"
        >
          Create Account
        </Link>
        <Link
          to="/courses"
          className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-xl shadow-md font-semibold transition duration-200"
        >
          Browse Courses
        </Link>
      </div>

      <footer className="mt-16 text-sm text-gray-500">
        © {new Date().getFullYear()} EduBot LMS. All rights reserved.
      </footer>
    </div>
  );
}
