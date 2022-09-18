const mongoose = require("mongoose");
const projectSchema = new mongoose.Schema(
  {
    title: { type: String, require: true},
    text: { type: String},
    image: { type:String, default:"/defaults/default.jpg" },
    owner: { type: [mongoose.Types.ObjectId], required: true },
    team: { type: [mongoose.Types.ObjectId]},
    private: { type: Boolean, default: true },
  },
  {
    timestamps: true,
  }
);

const projectModel = new mongoose.model("USER", projectSchema);

module.exports = projectModel;
