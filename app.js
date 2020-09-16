const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
dotenv.config();
const webSocket = require("./socket");
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

// io.on("connection", function (socket) {
//   socket.emit("news", { hello: "world" });
//   socket.on("my other event", function (data) {
//     console.log("otherEvent", data);
//   });
// });

var mysql = require("mysql2");

var db = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "database_test",
  password: "Qkwldrk4424!@",
});

db.connect(function (err) {
  if (err) {
    console.log(err);
  }
});

let socketCount = 0;
let cards = [];
let isInit = false;

// io.sockets.on("connection", function (socket) {
//   socketCount++;

//   io.sockets.emit("users connected", socketCount);

//   socket.on("disconnect", function () {
//     socket--;
//     io.sockets.emit("users connected", socketCount);
//   });

//   socket.on("new cards", function (data) {
//     cards.push(data);
//     io.sockets.emit("new cards", data);
//     db.query("INSERT INTO notes (card) VALUES (?,?,?)", data.card);
//   });

//   if (!isInit) {
//     db.query("SELECT * FROM cards")
//       .on("result", function (data) {
//         cards.push(data);
//       })
//       .on("end", function () {
//         socket.emit("initial cards", cards);
//       });

//     isInit = true;
//   } else {
//     socket.emit("initial cards", cards);
//   }
// });

webSocket(server, app);
