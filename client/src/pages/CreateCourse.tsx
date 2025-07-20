import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";

export default function CreateCourse() {
  const [form, setForm] = useState({ title: "", description: "" });
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await api.post("/courses", form);
      alert("🎉 Course created successfully!");
      navigate("/dashboard");
    } catch (err) {
      alert("❌ Failed to create course");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-tr from-sky-100 via-blue-200 to-sky-300">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-2xl shadow-xl w-96 space-y-5 animate-fade-in"
      >
        <h2 className="text-2xl font-bold text-center text-sky-700">
          📚 Create New Course
        </h2>

        <input
          required
          placeholder="📘 Enter Course Title"
          value={form.title}
          onChange={(e) => setForm({ ...form, title: e.target.value })}
          className="w-full border border-sky-200 focus:ring-2 focus:ring-sky-400 focus:outline-none px-4 py-2 rounded-lg transition"
        />

        <textarea
          required
          placeholder="📝 Write Course Description"
          value={form.description}
          onChange={(e) => setForm({ ...form, description: e.target.value })}
          className="w-full border border-sky-200 focus:ring-2 focus:ring-sky-400 focus:outline-none px-4 py-2 rounded-lg transition"
        />

        <button
          type="submit"
          className="bg-sky-600 hover:bg-sky-700 text-white font-semibold w-full py-2 rounded-lg transition"
        >
          ➕ Create Course
        </button>
      </form>
    </div>
  );
}
