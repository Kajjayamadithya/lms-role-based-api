import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import api from "../services/api";

export default function EditCourse() {
  const { id } = useParams();
  const [form, setForm] = useState({ title: "", description: "" });
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchCourse() {
      try {
        const res = await api.get(`/courses/${id}`);
        setForm({ title: res.data.title, description: res.data.description });
      } catch (err) {
        alert("Failed to fetch course details");
      }
    }
    fetchCourse();
  }, [id]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await api.put(`/courses/${id}`, form);
      alert("✅ Course updated successfully!");
      navigate("/dashboard");
    } catch (err) {
      console.error(err);
      alert("❌ Failed to update course");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-yellow-50 to-amber-100 p-4 font-sans">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-2xl rounded-2xl p-8 max-w-md w-full space-y-6 animate-fade-in"
      >
        <h2 className="text-2xl font-extrabold text-yellow-700 text-center font-serif">
          ✏️ Edit Course
        </h2>

        <input
          type="text"
          name="title"
          placeholder="Course Title"
          value={form.title}
          onChange={handleChange}
          required
          className="border border-yellow-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-yellow-400 font-medium"
        />

        <textarea
          name="description"
          placeholder="Course Description"
          value={form.description}
          onChange={handleChange}
          required
          rows={5}
          className="border border-yellow-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-yellow-400 font-medium resize-none"
        />

        <button
          type="submit"
          className="bg-yellow-600 text-white px-6 py-2 rounded-xl w-full font-semibold hover:bg-yellow-700 transition duration-200 shadow-lg"
        >
          Update Course
        </button>

        <button
          type="button"
          onClick={() => navigate("/dashboard")}
          className="text-sm text-yellow-600 hover:underline font-medium block text-center"
        >
          ⬅ Back to Dashboard
        </button>
      </form>
    </div>
  );
}
