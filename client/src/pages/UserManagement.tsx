import { useEffect, useState } from "react";
import api from "../services/api";

export default function UserManagement() {
  const [users, setUsers] = useState<any[]>([]);
  const [editingRoles, setEditingRoles] = useState<Record<string, string>>({});

  const fetchUsers = async () => {
    try {
      const res = await api.get("/admin/users");
      setUsers(res.data);
    } catch (err) {
      console.error("Failed to fetch users:", err);
    }
  };

  const handleRoleChange = (id: string, newRole: string) => {
    setEditingRoles({ ...editingRoles, [id]: newRole });
  };

  const saveRole = async (id: string) => {
    const newRole = editingRoles[id];
    try {
      await api.put(`/admin/users/${id}/role`, { role: newRole });
      alert("✅ Role updated successfully.");
      fetchUsers(); // Refresh the list
    } catch (err) {
      alert("❌ Failed to update role.");
      console.error(err);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4 text-indigo-600">User Management</h2>
      {users.map((user) => (
        <div
          key={user._id}
          className="bg-white p-4 rounded shadow mb-3 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2"
        >
          <div>
            <p className="text-md font-semibold">{user.name} ({user.email})</p>
            <p className="text-sm text-gray-500">Current Role: {user.role}</p>
          </div>
          <div className="flex items-center gap-2">
            <select
              className="border border-gray-300 px-2 py-1 rounded"
              value={editingRoles[user._id] || user.role}
              onChange={(e) => handleRoleChange(user._id, e.target.value)}
            >
              <option value="Student">Student</option>
              <option value="Instructor">Instructor</option>
              <option value="Admin">Admin</option>
            </select>
            <button
              onClick={() => saveRole(user._id)}
              className="bg-indigo-600 text-white px-3 py-1 rounded hover:bg-indigo-700 transition"
            >
              Save
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
