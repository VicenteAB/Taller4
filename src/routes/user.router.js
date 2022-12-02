import express from "express";
import{
    createUserV1,
    getUsers,
}from "../controllers/user.controller.js";

const router = express.Router();

router.post("/register", createUserV1);
router.get("/", getUsers);

export default router;