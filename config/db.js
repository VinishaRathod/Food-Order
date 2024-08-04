import mongoose from "mongoose";
export const connectDB = async()=>{
    await mongoose.connect("mongodb+srv://vinirt999:ciX1IogcWw5KaexU@cluster0.n90mqyu.mongodb.net/food-del").then(()=>console.log("db connected"));
}