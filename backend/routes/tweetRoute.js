import express from "express";
import {
  createTweet,
  deleteTweet,
  likeOrDislike,
} from "../controllers/tweetController.js";
import isAuthenticated from "../config/auth.js";

const router = express.Router();

router.route("/create").post(isAuthenticated, createTweet);
router.route("/delete/:id").delete(isAuthenticated, deleteTweet);
//put khay karthe hum hay update kar ne ke leye use karthe hay
router.route("/like/:id").put(isAuthenticated, likeOrDislike);

export default router;
