const { validationResult, Result } = require("express-validator");
const userModel = require("../../models/user");
const { expressvalidatorMapper } = require("../../modules/expressValidator");
const { hashString } = require("../../modules/hashString");

class authController {
  //register = signUp
  async signUp(req, res, next) {
    try {
      const { email, username, mobile, password, confirm_password } = req.body;
      const hashedPassword = hashString(password);
      const user = await userModel
        .create({
          email,
          username,
          mobile,
          password: hashedPassword,
        })
        .catch((err) => {
          if (err?.code == 11000) {
            throw {status :  400 , success : false , message : "the username is duplicate"};
          }
        });
      // return res.status(200).json(user);
      let result = validationResult(req);
      if (result?.errors?.length < 1) {
        result = "you have sign-up successfully now you can sign-in";
      }
      return res.status(200).json({
        status: 200,
        success: true,
        message: result,
      });
    } catch (error) {
      next(error);
    }
  }
  signIn() {}
  resetPassword() {}
}

module.exports = {
  authController: new authController(),
};
