import monogoose from "mongoose";

const connectDB = async () => {
  try {
    await monogoose.connect("mongodb://localhost:27017/3-times");
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("MongoDB connection failed:", error);
    process.exit(1);
  }
};

export default connectDB;
