import mongoose from "mongoose";

const courseSchema = new mongoose.Schema({
  title: String,
  description: String,
  instructorId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  studentIds: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
});

export const Course = mongoose.model("Course", courseSchema);
export interface CourseDocument extends mongoose.Document {
  title: string;
  description: string;
  instructorId: mongoose.Types.ObjectId;
  studentIds: mongoose.Types.ObjectId[];
}