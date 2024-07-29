import mongoose from "mongoose";

export const connectMongo = async () => {
  if (mongoose.connection.readyState === 1) {
    return mongoose.connection.asPromise();
  }

  return mongoose.connect(process.env.MONGODB_URL!);
};
