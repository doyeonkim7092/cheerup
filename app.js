const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const sio = require("socket.io");
const mysql = require("mysql");
const session = require("express-session");
dotenv.config();
const io = sio();
const app = express();
app.io = io;
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

app.use((req, res, next) => {
  req.io = io;
  next();
});



app.use("/user", user);
app.use("/card", card);
app.use("/mail", mail);
app.use("/comment", comment);
//app.use("/auth", mailing)

app.set("jwt-secret", process.env.SECRET);

app.listen(port, () => {
  console.log("app started At", port);
});
