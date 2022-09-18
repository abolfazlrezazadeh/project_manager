const mongoose = require("mongoose");
const teamSchema = new mongoose.Schema(
  {
    name: { type: String, require: true },
    description: { type: String },
    users: { type: [mongoose.Types.ObjectId], default: true },
    owner: { type: [mongoose.Types.ObjectId], required: true },
  },
  {
    timestamps: true,
  }
);

const teamModel = new mongoose.model("USER", teamSchema);

module.exports = teamModel;
