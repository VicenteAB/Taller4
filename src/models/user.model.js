import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
        min: 1,
    },
    email: {
        type: String,
        required: true,
        min: 1,
    },
    dni: {
        type: String,
        required: true,
        min: 10,
    },
    password: {
        type: String,
        required: true,
        min: 6,
    },
});

const userModel = mongoose.model("User", userSchema);

export default userModel;