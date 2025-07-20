# 📘 EduBot LMS

*EduBot LMS* is a full-featured, responsive Learning Management System built using the **MERN Stack** (MongoDB, Express, React, Node.js). It supports role-based access for students, instructors, and admins, and enables course management, enrollment, and user authentication.

---

## 🔧 Tech Stack

### Frontend
- React + Vite + TypeScript
- Tailwind CSS
- TanStack Router (for routing)
- Axios
- React Hook Form + Zod (for validation)
- React Hot Toast (for notifications)

### Backend
- Node.js
- Express.js
- MongoDB + Mongoose
- JWT (Authentication)
- CORS
- Role-based middleware (RBAC)

---

## 🚀 Features

### 👤 Authentication & Authorization
- Login / Register with role selection (student, instructor, admin)
- JWT-based auth with localStorage token handling
- Route protection based on roles

### 🎓 Students
- View all courses
- Enroll in up to 3 courses
- View and unenroll from enrolled courses

### 👨‍🏫 Instructors
- Create, edit, delete their own courses
- View list of students enrolled in their courses

### 🛠 Admins
- View all users and courses
- Delete any course or user

### 🧠 Smart UI
- Beautiful responsive layout using TailwindCSS
- Animated DotGrid homepage
- Toast notifications for feedback
- Dark-mode friendly component design

### 🧩 Extra
- Validation using Zod & React Hook Form
- Backend RBAC middleware for security
- Secure route access and auto localStorage cleanup
- Search and pagination ready

---

## 📁 Folder Structure

### Frontend (`/client`)
```
src/
├── components/       # Reusable UI components
├── dashboards/       # Dashboard pages per role
├── pages/            # Standalone pages (Login, Register, etc.)
├── services/         # Axios API instance
├── utils/            # Token utilities
├── RBD/              # Animations (DotGrid, etc.)
├── App.tsx
├── index.tsx
└── index.css
```

### Backend (`/server`)
```
backend/
├── models/           # User and Course models
├── routes/           # Auth, Course, Admin, Instructor routes
├── middleware/       # Role-based access control
├── server.ts         # Entry point
└── .env              # Environment config
```

---

## 🔐 Environment Variables

Create a `.env` file in the `/backend` directory:

```env
PORT=3000
MONGODB_URI=mongodb://localhost:27017/edubot_lms
JWT_SECRET=supersecuresecret
```

---

## 🧪 Installation & Running

### Prerequisites
- Node.js ≥ 16.x
- MongoDB running locally or on Atlas

### 1. Clone the Repository

``` 
git clone https://github.com/Kajjayamadithya/lms-role-based-api.git
cd lms-role-based-api
```

### 2. Install Backend

``` 
cd backend
npm install
npm run dev
```

### 3. Install Frontend

``` 
cd frontend
npm install
npm run dev
```

---

## 🧪 Demo Credentials

| Role       | Email                       | Password |
|------------|-----------------------------|----------|
| Student    | tarun@gmail.com             | 123456!@ |
| Instructor | tarunadithya2006@gmail.com  | 123456!@ |
| Admin      | adithya@gmail.com           | 123456!@ |

---

## 📦 Production Build

### Frontend:

```
npm run build
```

### Backend (optional):
TO  deploy to use the  platforms like **Render** or **Vercel**.

---

## 📜 License

MIT License © 2025 EduBot LMS
