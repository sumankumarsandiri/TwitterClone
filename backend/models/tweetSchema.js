import mongoose from "mongoose";

const tweetSchema = new mongoose.Schema(
  {
    description: {
      type: String,
      required: true,
    },
    like: {
      type: Array,
      default: [],
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    // bookmarks: {
    //   type: Array,
    //   default: [],
    // },
  },
  { timestamps: true }
);
//timestamp konsa person kis time par create karliya
export const Tweet = mongoose.model("Tweet", tweetSchema);
