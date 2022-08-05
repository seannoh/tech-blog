const userSeeds = require("./user-seeds");
const postSeeds = require("./post-seeds");
const commentSeeds = require("./comment-seeds");

const sequelize = require("../config/connection");

async function seedAll() {
  //await sequelize.sync({force: true});
  await userSeeds();
  await postSeeds();
  await commentSeeds();
  return;
}

module.exports = seedAll;