# Cheer-Up-server

Cheer-Up 프로젝트에 오신 것을 환영합니다!

# Version

##API

card table GET = login User
###router.get("/get", cardController.get);

card table GET = All Card
router.get("/getAll", cardController.getAll);

card table GET = 로그인한 유저가 댓글을 작성한 모든 카드
router.get("/getOtherUrl", cardController.getOtherUrl);

card table get = 로그인한 유저가 작성한 모든 댓글수를 카운트
router.get("/getCardComment", cardController.getCardComment);

card table get = 로그인한 유저가 작성한 카드를 모두
router.get("/getUrl", cardController.getUrl);

card table post = 로그인한 유저가 작성한 카드내용텍스트 수정
router.post("/update", cardController.update);

card table post = 로그인한 유저가 작성한 카드후기 수정
router.post("/reviewUpdate", cardController.reviewUpdate);

card table get = 로그인한 유저가 작성한 카드후기 불러옴
router.get("/getReview", cardController.getReview);

card table post = 로그인한 유저가 작성한 카드만 삭제 가능.
router.post("/delete", cardController.delete);

###Comment
comment table CREATE
router.post("/create", commentController.create);

comment table GET
router.get("/get", commentController.get);
comment table GET => 로그인한 유저가 작성한 모든 comment
router.get("/getMyComment", commentController.getMyComment);

comment table GET => 로그인한 유저가 작성한 댓글들, join with Card Table.
router.get("/getCheer", commentController.getCheer);

comment column udpate
router.post("/update", commentController.update);

comment column delete
router.post("/delete", commentController.delete);
