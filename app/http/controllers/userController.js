const userModel = require("../../models/user");

class userController {
  async getProfile(req, res, next) {
    const user = req.user;
    return res.status(200).json({
      status: 200,
      success: true,
      user,
    });
  }
  async editProfile(req, res, next) {
    try {
      const userId = req.user._id;
      const data = req.body;
      const { first_name, last_name, skills } = data;
      let fields = ["first_name", "last_name", "skills"];
      let badFields = ["", " ", ".", "..", undefined, null, 0, -1, NaN , [] , {}];
      Object.entries(data).forEach(([key, value]) => {
        if (!fields.includes(key)) delete data[key];
        if (badFields.includes(value)) delete data[key];
      });
      const user = await userModel.updateOne(
        { _id: userId },
        { first_name, last_name, skills }
      );
      if (user.modifiedCount > 0) {
        console.log(user);
        return res.status(200).json({
          status: 200,
          success: true,
          message: "the user successfully updated 👍",
        });
      } else {
        return res.status(401).json({
          status: 401,
          success: false,
          message: "the user does not  updated 👎",
        });
      }
    } catch (error) {
      next(error);
    }
  }
  addSkills() {}
  editSkills() {}
  acceptInvitTeam() {}
  rejectInviteTeam() {}
}

module.exports = {
  userController: new userController(),
};
