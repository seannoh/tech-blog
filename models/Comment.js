const {Model, DataTypes} = require("sequelize");
const sequelize = require("../config/connection");

class Comment extends Model{};

Comment.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
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
    },
    post_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'post',
        key: 'id'
      }
    }
  },
  {
    sequelize,
    modelName: 'comment',
    timestamps: true,
    freezeTableName: true,
    underscored: true
  }
);

module.exports = Comment;