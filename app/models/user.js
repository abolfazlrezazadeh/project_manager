const mongoose = require("mongoose");
const userSchema = new mongoose.Schema(
  {
    first_name: { type: String },
    last_name: { type: String },
    username: { type: String, require: true, unique: true },
    mobile: { type: String, require: true, unique: true },
    email: { type: String, require: true, unique: true },
    roles: { type: String, default: ["USERS"] },
    password: { type: String, required: true },
    skills: { type: String, default: [] },
    teams: { type: String, default: [] },
  },
  {
    timestamps: true,
  }
);

const userModel = new mongoose.model("USER", userSchema);

module.exports = userModel;
