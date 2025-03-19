import express, { json } from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./db.js"; // Ensure ".js" is included

dotenv.config(); // Load environment variables

const app = express();
// eslint-disable-next-line no-undef
const PORT = process.env.PORT || 5000;

// Middleware
app.use(json()); // Parse JSON requests
app.use(cors()); // Enable CORS for frontend

// Connect to MongoDB
connectDB();

// Default Route
app.get("/", (req, res) => {
  res.send("🚀 FitFlow Backend is Running...");
});

app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
