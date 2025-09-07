const mongoose = require("mongoose");

//model to user
const UserSchema = new mongoose.Schema( //mongoose
  {
    username: { type: String, required: true},
    password: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);