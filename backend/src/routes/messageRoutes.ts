import { Router } from "express";
import { protectRoute } from "../middleware/auth";

const router = Router();

router.get("/all", protectRoute)

export default router;