const { validationResult, Result } = require("express-validator");
const userModel = require("../../models/user");
const { expressvalidatorMapper } = require("../../modules/expressValidator");
const {
  hashString,
  compareDataWithHashedPassword,
} = require("../../modules/hashString");
const { JWTtokenCreator } = require("../../modules/jwt");

class authController {
  //register = signUp
  async signUp(req, res, next) {
    try {
      const { email, username, mobile, password, confirm_password } = req.body;
      const hashedPassword = hashString(password);
      const user = await userModel.create({
        email,
        username,
        mobile,
        password: hashedPassword,
      })
      // .catch((err) => {
      //   if (err?.code == 11000) {
      //     throw {status :  400 , success : false , message : "the username is duplicate"};
      //   }
      // });
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
  async signIn(req, res, next) {
    try {
      const { username, password } = req.body;
      console.log(req.headers);
      const user = await userModel.findOne({ username });
      if (!user)
        throw {
          status: 401,
          success: false,
          message: " the username or password is incorrect",
        };
      if (!compareDataWithHashedPassword(password, user.password))
        throw {
          status: 401,
          success: false,
          message: " the username or password is incorrect",
        };
        let token = await JWTtokenCreator(user);
        user.token = token ;
        user.save();
      return res.status(200).json({
        status: 200,
        success: true,
        message: " you are successfully login to your accoant",
        token: token,
      });
    } catch (error) {
      next(error);
    }
  }
  resetPassword() {}
}

module.exports = {
  authController: new authController(),
};
