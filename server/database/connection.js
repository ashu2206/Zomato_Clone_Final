import mongoose from "mongooose";

export default async () => {
  return mongoose.connect(process.env.MONGO_URI);
};
