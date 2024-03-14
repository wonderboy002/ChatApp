import mongoose from "mongoose";
async function connectMongo() {
  try {
    mongoose.connect(process.env.MONGODB_URL);
    console.log("Successfully Connected to Mongodb");
  } catch (e) {
    console.log("error connecting to mongodb database", e);
  }
}

export default connectMongo;
