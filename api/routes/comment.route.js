import express from 'express';
import { createComment } from '../controllers/comment.controller.js';
import{ verifyToken} from "../utils/verifyUser.js"
import { getPostComment,likeComment,editComment,deleteComment,getcomments} from '../controllers/comment.controller.js';

const router = express.Router();

router.post("/create",verifyToken, createComment);
router.get("/getPostComments/:postId",getPostComment);
router.put("/likeComment/:commentId",verifyToken,likeComment);
router.put("/editComment/:commentId",verifyToken,editComment);
router.delete("/deleteComment/:commentId",verifyToken,deleteComment);
router.get("/getcomments",verifyToken,getcomments)

export default router;