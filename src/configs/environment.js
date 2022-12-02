import dotenv from "dotenv";
dotenv.config();

const PORT = 5000;
const MONGO_URI = "mongodb://localhost:27017/TallerN4";

export { PORT , MONGO_URI };