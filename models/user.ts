const { Model, DataTypes } = require("sequelize");
const { dbType } = require("./index");
const { sequelize } = require("./sequelize");

class User extends Model {
  public id!: number;
  public userId!: string;
  public userPassword!: string;
  // public level!: number;
  public userName!: string;
  public birthday!: Date;
  public sex!: string;
  public interest!: string;
  // public cheering!: number;
  public alarm!: number;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

User.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    userId: {
      type: new DataTypes.STRING(),
      allowNull: false,
    },
    userPassword: {
      type: new DataTypes.STRING(),
      allowNull: false,
    },
    level: {
      type: new DataTypes.INTEGER(),
      allowNull: false,
    },
    userName: {
      type: new DataTypes.STRING(),
      allowNull: false,
    },
    birthday: {
      type: new DataTypes.DATE(),
      allowNull: false,
    },
    sex: {
      type: new DataTypes.STRING(),
      allowNull: false,
    },
    interest: {
      type: new DataTypes.STRING(),
      allowNull: false,
    },
    // cheering: {
    //   type: new DataTypes.INTEGER(),
    //   allowNull: false
    // },
    alarm: {
      type: new DataTypes.INTEGER(),
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "User",
    tableName: "user",
    charset: "utf8",
    collate: "utf8_general_ci",
  }
);

export const associate = (db: any) => {};

export default User;
