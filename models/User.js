const {Model, DataTypes} = require("sequelize");
const bcrypt = require("bcrypt");
const sequelize = require("../config/connection");

class User extends Model{
  async checkPassword(password) {
    return await bcrypt.compare(password, this.password);
  }
};

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    username: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
      validate: {
        isAlphanumeric: true,
        len: [4,20],
        is: /^([A-z])/g
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isAlphanumeric: true,
        len: [6,30],
      }
    }
  },
  {
    hooks: {
      beforeCreate: async function(user, options) {
        if(user.password) {
          user.password = await bcrypt.hash(user.password, 10);
        }
      },
      beforeUpdate: async function(user, options) {
        if(user.password) {
          user.password = await bcrypt.hash(user.password, 10);
        }
      }
    },
    sequelize,
    modelName: 'user',
    timestamps: false,
    freezeTableName: true,
    underscored: true
  }
);

module.exports = User;