const {authController} = require("../http/controllers/authController");
const { expressvalidatorMapper } = require("../http/middleWare/checkErrors");
const { signUpValidator, signInValidator } = require("../http/validations/authValidation");
const router = require("express").Router();


router.post("/sign-up" , signUpValidator() ,expressvalidatorMapper , authController.signUp);

router.post("/sign-in" , signInValidator() ,expressvalidatorMapper , authController.signIn);

module.exports = {
    authRoter : router
}