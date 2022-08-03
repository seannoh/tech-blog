const {Model, DataTypes} = require("sequelize");
const sequelize = require("../config/connection");

class Post extends Model{};

Post.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    title: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id'
      }
    }
  },
  {
    sequelize,
    modelName: 'post',
    timestamps: true,
    freezeTableName: true,
    underscored: true
  }
);

module.exports = Post;