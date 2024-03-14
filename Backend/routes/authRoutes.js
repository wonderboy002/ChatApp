import express from "express";
import { Login, Signout, Signup } from "../controllers/authControllers.js";
const router = express.Router();

router.get("/Login", Login);
router.get("/Signup", Signup);
router.get("/Signout", Signout);

export default router;
