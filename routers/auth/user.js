const express = require("express");
const router = express.Router();
const userController = require("../../Controller/userController");
const authMiddleware = require("../../Controller/authmiddleware");
router.post("/join", userController.join);

router.post("/login", userController.login);
router.post("/check", userController.check);
//router.use("/", authMiddleware);
router.post("/userinfo", userController.info);

router.post("/logout", userController.logout);
//router.post("/joinout", userController.joinOut);
router.get("/getid", userController.getid);
//회원가입 시, userName을 확인하기 위해, 모든 유저의, userName을 배열의 담아서 보내줌
router.post("/checkName", userController.checkName);

module.exports = router;
