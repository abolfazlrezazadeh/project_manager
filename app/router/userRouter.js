const {userController} = require("../http/controllers/userController");
const { checkLogin } = require("../http/middleWare/isLoggedIn");

const router = require("express").Router();

router.get("/profile" ,checkLogin , userController.getProfile);

module.exports = {
    userRouter : router
}