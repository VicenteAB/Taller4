import express from "express";
import{
    createMessageV1, 
    getMessages,
}from "../controllers/message.controller.js";

const router = express.Router();

router.post("/", createMessageV1);
router.get("/rutaDePrueba", getMessages);

export default router;