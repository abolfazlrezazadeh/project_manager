const {authController} = require("../http/controllers/authController");
const { expressvalidatorMapper } = require("../http/middleWare/checkErrors");
const { signUpValidator } = require("../http/validations/authValidation");
const router = require("express").Router();


router.post("/sign-up" , signUpValidator() ,expressvalidatorMapper , authController.signUp)

module.exports = {
    authRoter : router
}