import express from "express";
import { getUsers, createUser } from "../controllers/userControllers";

const router = express.Router();

router.get("/", getUsers);
router.post("/", createUser);

export default router;