const express = require("express");
const router = express.Router();
const cardController = require("../../Controller/cardController");

//header로 넘어오는 로그인한 유저정보 확인 후, 카드 생성(카드의 userId === login User)
//token = request.hheaders.body
//request.body === text, D_day
router.post("/create", cardController.create);

//header로 넘어오는 로그인한 유저정보 확인 후, 로그인한 유저가 작성한 모든 카드를 불러옴
//request.
router.get("/get", cardController.get);

router.get("/getAll", cardController.getAll);

router.get("/getOtherUrl", cardController.getOtherUrl);

router.get("/getCardComment", cardController.getCardComment);

router.get("/getUrl", cardController.getUrl);

router.post("/update", cardController.update);

router.post("/reviewUpdate", cardController.reviewUpdate);

router.get("/getReview", cardController.getReview);

router.post("/delete", cardController.delete);

module.exports = router;
