const {User} = require("../models");

const seeds = [
  {
    username: "lerantino",
    email: "lerantino@berkeley.edu",
    password: "password"
  },
  {
    username: "AppleBud",
    email: "applesftw@tech.com",
    password: "password"
  },
  {
    username: "kessi",
    email: "snake_time@python.org",
    password: "password"
  },
  {
    username: "hansolo913",
    email: "badfeeling@oracle.com",
    password: "password"
  },
  {
    username: "angryTea",
    email: "ancillary@folgerscoffee.com",
    password: "password"
  },
  {
    username: "pepega",
    email: "pepepegagaga@twitch.tv",
    password: "password"
  },
  {
    username: "swagalicious",
    email: "koolkid@skate.com",
    password: "password"
  },
  {
    username: "bluefish99",
    email: "juicy_sweet@newzealand.com",
    password: "password"
  },
  {
    username: "whosjoe",
    email: "joemama@jokes.org",
    password: "password"
  },
  {
    username: "ilovejs",
    email: "sxpchess@mozilla.org",
    password: "password"
  },
];

async function userSeeds() {
  await User.bulkCreate(seeds, {individualHooks: true, returning: true});
}

module.exports = userSeeds; 