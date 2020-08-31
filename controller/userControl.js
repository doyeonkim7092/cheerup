const { user } = require("../models");
const crypto = require("crypto");
const { request } = require("http");
const { response } = require("express");

module.exports = {
  join: async (request, response) => {
    const {
      userId,
      userPassword,
      userName,
      birthday,
      sex,
      interest,
    } = request.body;

    try {
      const salt = "cheer";
      const key = crypto
        .createHmac("sha256", salt)
        .update(userPassword)
        .digest("hex");

      const [user, created] = await user.findOrCreate({
        where: {
          userId: userId,
        },
        defaults: {
          userPassword: key,
          userName,
          birthday,
          sex,
          interest,
        },
      });
      response.status(200).json("가입되었습니다");
    } catch (error) {
      console.log(error);
      response.status(409).json("회원가입 실패");
    }
  },
  login: async (request, response) => {
    const { userId, userPassword } = request.body;

    try {
      await user.findOne({
        where: {
          userId,
          userPassword,
        },
      });
      response.status(200).json("로그인 되었습니다.");
    } catch (error) {
      console.log(error);
      response.status(404).json("로그인 실패");
    }
  },
  // 토큰 구현 후, 진행 예정.
  // logout : async (request, response)=>{
  //   const {userId} = request.body;
  //   try{
  //     await user.
  //   }

  // }
};
