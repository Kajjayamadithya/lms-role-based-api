import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import userRoutes from "./routes/user_routes";
import courseRoutes from "./routes/courseRoutes";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;
app.use(cors({ origin: "http://localhost:5173" }));
app.use(express.json());

app.use(courseRoutes);
app.use(userRoutes);

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI as string)
  .then(() => {
    console.log('MongoDB connected successfully');

    // Start the server
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.error(' MongoDB connection failed:', error.message);
  });