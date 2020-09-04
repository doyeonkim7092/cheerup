"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      User.hasMany(models.Card, {
        foreignKey: "user_Id",
        as: "Card",
        onDelete: "CASCADE",
      });
      User.hasMany(models.Comment, {
        foreignKey: "user_id",
        as: "Comment",
      });
    }
  }
  User.init(
    {
      userId: DataTypes.STRING, //email
      userPassword: DataTypes.STRING,
      userName: DataTypes.STRING,
      birthday: DataTypes.DATEONLY,
      sex: DataTypes.STRING,
      interest: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "User",
    }
  );
  return User;
};
