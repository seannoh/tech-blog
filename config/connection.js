// Import packages
const {Sequelize} = require("sequelize");
require("dotenv").config();

// Connect sequelize to mysql database
// TODO: connect to JawsDB
const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    dialect: 'mysql',
    host: 'localhost',
    port: 3306
  }
);

module.exports = sequelize;