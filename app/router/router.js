const { authRoter } = require("./aouthRouter");
const { projectRoter } = require("./projectRouter");
const { teamRoter } = require("./teamRouter");
const {userRouter} = require("./userRouter");

const router = require("express").Router();
router.use("/auth", authRoter);
router.use("/project", projectRoter);
router.use("/team", teamRoter);
router.use("/user", userRouter);

module.exports = {
    allRouters : router
}
