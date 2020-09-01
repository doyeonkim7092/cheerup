import express from "express";
import * as dotenv from "dotenv";
import { Request, Response, NextFunction } from "express";
import { sequelize } from "./models";
import * as expressSession from "express-session";
import * as bodyParser from "body-parser";
import * as jwt from "jsonwebtoken";
dotenv.config();
const app = express();

const userControl = require("./route/user");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/user", userControl);

const prod: boolean = process.env.NODE_ENV === "production";

app.set("port", prod ? process.env.PORT : 5000);
sequelize
  .sync({ force: false })
  .then(() => {
    console.log("db연결확인!?");
  })
  .catch((err: Error) => {
    console.error(err);
  });

app.listen(app.get("port"), () => {
  console.log(`server is running on ${app.get("port")}`);
});

app.get(
  "/",
  (req: express.Request, res: express.Response, next: express.NextFunction) => {
    console.log("nodemon");
    res.send("Hello");
  }
);
