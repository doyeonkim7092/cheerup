import User, { associate as associateUser } from "./user";
import Card, { associate as associateCard } from "./card";

export * from "./sequelize";
const db = {
  User,
  Card,
};

export type dbType = typeof db;

associateUser(db);
associateCard(db);
