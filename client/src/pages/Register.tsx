import { useState } from "react";
import api from "../services/api";

export default function Register() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    role: "student",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await api.post("/register", form);
      alert("Registered successfully!");
      window.location.href = "/login";
    } catch (err: any) {
      const message =
        err?.response?.data?.error || "Registration failed. Try again.";
      alert(message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-100 to-yellow-100 p-4 font-sans">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-2xl rounded-2xl p-8 max-w-md w-full text-center space-y-5"
      >
        <h2 className="text-3xl font-extrabold text-rose-700 font-serif mb-2">
          Create Your Account
        </h2>

        <input
          name="name"
          placeholder="👤 Full Name"
          className="border border-rose-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-rose-400 font-medium"
          onChange={handleChange}
        />

        <input
          name="email"
          type="email"
          placeholder="📧 Email Address"
          className="border border-rose-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-rose-400 font-medium"
          onChange={handleChange}
        />

        <input
          type="password"
          name="password"
          placeholder="🔒 Password"
          className="border border-rose-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-rose-400 font-medium"
          onChange={handleChange}
        />

        <select
          name="role"
          value={form.role}
          onChange={handleChange}
          className="border border-rose-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-rose-400 font-medium"
        >
          <option value="student">🎓 Student</option>
          <option value="instructor">🧑‍🏫 Instructor</option>
          <option value="admin">🛡️ Admin</option>
        </select>

        <button
          type="submit"
          className="bg-rose-600 text-white px-6 py-2 rounded-xl w-full font-semibold hover:bg-rose-700 transition duration-200 shadow-lg"
        >
          🚀 Register
        </button>

        <a
          href="/login"
          className="text-sm text-rose-500 hover:underline font-medium"
        >
          Already have an account? Login
        </a>
      </form>
    </div>
  );
}
