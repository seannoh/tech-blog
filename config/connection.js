// Import packages
const {Sequelize} = require("sequelize");
require("dotenv").config();

// Connect sequelize to mysql database
let sequelize;

if(process.env.JAWSDB_URL){
  sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
  sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
      dialect: 'mysql',
      host: 'localhost',
      port: 3306
    }
  );
}

module.exports = sequelize;