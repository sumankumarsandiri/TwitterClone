import express from "express";
import {
  Login,
  Logout,
  Register,
  bookmarks,
  follow,
  getMyProfile,
  getOtherUsers,
} from "../controllers/userController.js";
import isAuthenticated from "../config/auth.js";

const router = express.Router();

router.route("/register").post(Register);
router.route("/login").post(Login);
//why we are using get menthod in logout we are not getting request so..!
router.route("/logout").get(Logout);
router.route("/bookmark/:id").put(isAuthenticated, bookmarks);
router.route("/profile/:id").get(isAuthenticated, getMyProfile);
router.route("/otheruser/:id").get(isAuthenticated, getOtherUsers);
router.route("/follow/:id").post(isAuthenticated, follow);

export default router;
