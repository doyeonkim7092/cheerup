const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
const server = require("http").Server(app);

const io = require("socket.io")(server);

const port = process.env.PORT || 5000;

const user = require("./routers/auth/user");
const card = require("./routers/auth/card");
const mail = require("./routers/auth/mail");

const comment = require("./routers/auth/comment");
const { request } = require("express");
const { isObject } = require("util");

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.use("/user", user);
app.use("/card", card);
app.use("/mail", mail);
//app.use("/auth", mailing)

app.use("/comment", comment);

app.set("jwt-secret", process.env.SECRET);

server.listen(port, () => {
  console.log("app start", port);
});

io.on("connection", function (socket) {
  socket.emit("news", { hello: "world" });
  socket.on("my other event", function (data) {
    console.log("otherEvent", data);
  });
});

// webSocket(server);
