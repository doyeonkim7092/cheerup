const express = require("express");
const router = express.Router();
const userController = require("../../Controller/userController");
const userAuthMail = require("../../Controller/userAuthMail");
//회원가입 확인 이메일
//router.post("/joinMail", userAuthMail.sendingJoinMail);
<<<<<<< HEAD
router.get("/confirmmail", userController.confirmMail);

router.post("/sendreset", userAuthMail.sendResetmessage);
=======
router.post("/confirmmail",userController.confirmMail);
router.post("/sendreset", userAuthMail.sendResetmessage );
>>>>>>> 35bf51323aa2f0777b98d069bb93f9d57218e0af
router.post("/resetPassword", userAuthMail.resetPassword);
module.exports = router;
