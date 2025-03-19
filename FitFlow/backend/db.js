import { connect } from "mongoose";
import dotenv from "dotenv";

// Load environment variables
dotenv.config();

const connectDB = async () => {
  try {
    // eslint-disable-next-line no-undef
    await connect(process.env.MONGO_URI);
    console.log("✅ MongoDB Connected Successfully!");
  } catch (error) {
    console.error("❌ MongoDB Connection Failed:", error);
    // eslint-disable-next-line no-undef
    process.exit(1);
  }
};

export default connectDB;
