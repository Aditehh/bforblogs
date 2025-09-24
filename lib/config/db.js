import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://adityaaryal:adityaaryal@cluster0.e65lfxt.mongodb.net/blogAPP');
    console.log("db connected")
}
