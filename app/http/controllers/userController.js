class userController {
  async getProfile(req, res, next) {
    const user = req.user;
    return res.status(200).json({
      status: 200,
      success: true,
      user,
    });
  }
  editProfile() {}
  addSkills() {}
  editSkills() {}
  acceptInvitTeam() {}
  rejectInviteTeam() {}
}

module.exports = {
  userController: new userController(),
};
