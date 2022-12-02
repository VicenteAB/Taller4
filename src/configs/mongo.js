import mongoose from "mongoose";
import {MONGO_URI} from "./environment.js";

export default function connectDB (){
    return mongoose
        .connect(MONGO_URI)
        .then(async () => {
        console.log("MongoDB connected succesfully");
        await registerModels();
        return true;
    })
    .catch((error)=>{
        console.log(`MongoDB not connected. Error: ${error}`);
        return false;
    });
}

async function registerModels(){
    await import("../models/user.model.js");
}