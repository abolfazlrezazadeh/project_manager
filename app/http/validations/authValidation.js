const { body, validationResult } = require("express-validator");
const userModel = require("../../models/user");
function signUpValidator() {
  return [
    //email
    body("email")
      .isEmail()
      .withMessage("the email is not correct .... !")
      .custom(async (email) => {
        const user = await userModel.findOne({ email });
        if (user) throw "the email is duplicate";
        return true;
      }),
    //username
    body("username").custom(async (value, contex) => {
      if (value) {
        //start with A to Z it can have alphabet and numbers and _ .
        const usernameRegex = /^[a-z]+[a-z0-9\_\.]{3,}/gi;
        // if the test of regex is true
        if (usernameRegex.test(value)) {
          const user = await userModel.findOne({ username: value });
          if (user) throw "the username is duplicate";
          return true;
        }
        throw "please use 'A' to 'z' and numbers";
      }
      throw "the user name cannot be empty";
    }),
    //the Iran phone number autherization  09****** or +98 93****
    body("mobile")
      .isMobilePhone("fa-IR")
      .withMessage("the number is not corrct ...!")
      .custom(async (mobile) => {
        const user = await userModel.findOne({ mobile });
        if (user) throw "the mobile is duplicate";
        return true;
      }),
    //password
    body("password")
      .isLength({ min: 6, max: 18 })
      .isAlphanumeric()
      .withMessage(
        "the password must be at least 6 characters and contains number "
      )
      .custom((value, contex) => {
        if (!value) throw " the password cannot be empty ";
        if (value !== contex?.req?.body?.confirm_password)
          throw "the confirm password does not match with password";
        return true;
      }),
  ];
}

function signInValidator() {
  return [
    body("username").custom(async (value, contex) => {
      if (value) {
        //start with A to Z it can have alphabet and numbers and _ .
        const usernameRegex = /^[a-z]+[a-z0-9\_\.]{3,}/gi;
        // if the test of regex is true
        if (usernameRegex.test(value)) {
          return true;
        }
        throw "please use 'A' to 'z' and numbers";
      }
      throw "the user name cannot be empty";
    }),
    //password
    body("password")
      .isLength({ min: 6, max: 18 })
      .isAlphanumeric()
      .withMessage(
        "the password must be at least 6 characters and contains number "
      ),
  ];
}

module.exports = {
  signUpValidator,
  signInValidator
};
