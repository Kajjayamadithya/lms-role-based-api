import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await api.post("/login", form);
      const { token, user } = res.data;

      if (!token || !user) {
        alert("Invalid response from server");
        return;
      }

      localStorage.setItem("token", token);
      localStorage.setItem("role", user.role || "");
      localStorage.setItem("name", user.name || "");

      navigate("/dashboard");
    } catch (err) {
      console.error("Login failed:", err);
      alert("Invalid credentials");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-emerald-100 via-yellow-50 to-pink-100 p-4 font-sans">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-2xl rounded-2xl p-8 max-w-md w-full text-center space-y-6 border border-emerald-100"
      >
        <h2 className="text-3xl font-extrabold text-emerald-700 font-serif mb-2 animate-fade-in-down">
          Welcome Back 👋
        </h2>

        <input
          name="email"
          type="email"
          placeholder="📧 Enter your email"
          className="border border-emerald-300 rounded-lg px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-emerald-400 text-gray-700 font-medium shadow-sm"
          onChange={handleChange}
          value={form.email}
          required
        />

        <input
          type="password"
          name="password"
          placeholder="🔒 Enter your password"
          className="border border-emerald-300 rounded-lg px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-emerald-400 text-gray-700 font-medium shadow-sm"
          onChange={handleChange}
          value={form.password}
          required
        />

        <button
          type="submit"
          className="bg-emerald-600 text-white px-6 py-3 rounded-xl w-full font-semibold hover:bg-emerald-700 transition duration-200 shadow-lg"
        >
          🔐 Login
        </button>

        <a
          href="/register"
          className="text-sm text-emerald-600 hover:underline font-medium"
        >
          📝 Don't have an account? Register
        </a>
      </form>
    </div>
  );
}
