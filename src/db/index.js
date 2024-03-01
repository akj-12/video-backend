import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
  try {
    const mongoDBURI =
      process.env.MONGODB_URI.replace("<password>", process.env.DB_PASSWORD) +
      `/${DB_NAME}`;

    const responseMongoDbConnection = await mongoose.connect(mongoDBURI);
    console.log(
      `Database connected successfully at host: ${responseMongoDbConnection?.connection?.host}`
    );
  } catch (error) {
    console.error("DATABASE ERROR : ", error);
    process.exit(1);
  }
};

export default connectDB;
