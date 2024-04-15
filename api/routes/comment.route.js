import express from 'express';
import { createComment } from '../controllers/comment.controller.js';
import{ verifyToken} from "../utils/verifyUser.js"
import { getPostComment } from '../controllers/comment.controller.js';

const router = express.Router();

router.post("/create",verifyToken, createComment);
router.get("/getPostComments/:postId",getPostComment)

export default router;