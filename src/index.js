import dotenv from "dotenv";
import connectDB from "./db/index.js";
dotenv.config();

connectDB();
/*
(async () => {
  try {
    const mongoDBURI =
      process.env.MONGODB_URI.replace("<password>", process.env.DB_PASSWORD) +
      `/${DB_NAME}`;

    const responseMongoDbConnection = await mongoose.connect(mongoDBURI);
    console.log(
      `Database connected successfully at host: ${responseMongoDbConnection?.connection?.host}`
    );
  } catch (error) {
    console.error("ERROR : ", error);
    throw error;
  }
})();
*/
