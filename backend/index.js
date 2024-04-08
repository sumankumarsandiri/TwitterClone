import express from "express";
import dotenv from "dotenv";
import databaseConnection from "./config/database.js";
import cookieParser from "cookie-parser";
import userRoutes from "./routes/userRoute.js";
import tweetRoute from "./routes/tweetRoute.js";

dotenv.config({
  path: ".env",
});

databaseConnection();
const app = express();

// const PORT = 8080;

//middlewares
app.use(
  express.urlencoded({
    extends: true,
  })
);
app.use(express.json());
app.use(cookieParser());

//api
app.use("/api/v1/user", userRoutes);
app.use("/api/v1/tweet", tweetRoute);
// app.get("/home", (req, res) => {
//   res.status(203).json({
//     message: "coming from backend",
//   });
// });

app.listen(process.env.PORT, () => {
  console.log(`server listen at post ${process.env.PORT}`);
});
