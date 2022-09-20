const {userController} = require("../http/controllers/userController");
const { checkLogin } = require("../http/middleWare/isLoggedIn");

const router = require("express").Router();

router.get("/profile" ,checkLogin , userController.getProfile);

router.post("/profile" ,checkLogin , userController.editProfile);

module.exports = {
    userRouter : router
}