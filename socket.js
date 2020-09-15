const SocketIO = require("socket.io");

module.exports = (server) => {
  const io = SocketIO(server, { path: "/socket.io" });
  //io 객체와, socket 객체 가 socket.io의 핵심이다.
  io.on("connection", (socket) => {
    // 웹소켓 연결 시,

    const req = socket.request;
    //socket.request속성으로, 요청객체에 접근할 수 있다.
    //socket.request.res로 응답객체에 접근할 수 있다.
    //socket.id로 소켓 고유의 id를 가져올 수 있다. 이 id로 소켓의 주인이 누구인지 특정 할 수 있다.
    const ip = req.headers["x-forwarded-for"] || req.connection.remoteAddress;
    console.log(
      `새로운IP를SOCKET.IO를 사용해 접속, ip=${ip}, socket.id=${socket.id}, req.id=${req.ip}`
    );

    //EventListener , 연결 접속 해제
    socket.on("disconnect", () => {
      console.log(`클라이언트 접속 해제 ip=${ip},socket.id=${socket.id}`);
      clearInterval(socket.interval);
    });
    //EventListener , 에러 시
    socket.on("error", (error) => {
      console.error(error);
    });
    // socket.on("clientEvent", function (data) {
    //   // Database update happens before this
    //   socket.emit("databaseUpdate", { description: "Database is updated" });

    //   setInterval(5000, function (data) {
    //     var uid = data["uid"];
    //     var q =
    //       "SELECT * FROM messages WHERE user_id=" +
    //       uid +
    //       " ORDER BY id DESC LIMIT 1";
    //     connection.query(q, function (err, rows, fields) {
    //       if (err) throw err;
    //       if (rows[0].id > prev_id) {
    //         socket.emit("new_message", rows[0]);
    //         prev_id = rows[0].id;
    //       }
    //     });
    //   });
    // });
    //EventListener , 클라이언트로 메시지 수신 시,
    //reply는  사용자가 직접 만든 이벤트, 클라이언트에서 reply라는 이벤트명으로 데이터를 보낼때,
    //서버에서 받는 부분, 이벤트명을 사용하는 부분으로 ws와는 다른 부분
    socket.on("reply", (data) => {
      console.log("replyData", data);
    });

    //3초마다 클라이언트로 메세지 전송
    socket.interval = setInterval(() => {
      //emit메서드- 인수(이벤트이름, 데이터) = 이벤트 이름(news)으로 (hello socketIO)라는 데이터를 클라이언트에 전송
      //클라이언트가 이 메세지를 받기 위해서는 news EventListener를 만들어 두어야 함.
      socket.emit("news", "hello CLIENT");
    }, 3000);
  });
};
