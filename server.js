// Import packages
const express = require("express");
const session = require("express-session");
const {create} = require("express-handlebars");
const SequelizeStore = require("connect-session-sequelize")(session.Store);

// Import modules
const sequelize = require("./config/connection");
const routes = require("./controllers/index");
const helpers = require("./utils/helpers");
// TODO: import seeds

// Set up express
const app = express();
const PORT = process.env.PORT || 3000;

// Set up sessions
const sess = {
  secret: 'cool cat club',
  resave: false,
  saveUninitialized: true,
  // TODO: set up session storage
  cookie: {
    maxAge: 86400
  },
  store: new SequelizeStore({
    db: sequelize
  }),
};
app.use(session(sess));

// Set up handlebars
const hbs = create({helpers});
app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");
app.set("views", "./views");

// Set up express middleware
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static("./public"));

// Set up routes
//app.use(routes);

// Sync database and start listening
sequelize.sync({force: true}).then(() => {
  console.log("(re)created all models successfully");
  // TODO: run seeds

  app.listen(PORT, () => {console.log("Listening on port: http://localhost:" + PORT);})
})