//Sets up Node and Express
var express = require("express");
var app = express();
var PORT = process.env.PORT || 8080;


// Sets up the Express app to handle data parsing
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));
app.use(express.static("public"));

// Sets up Express Engine Handlebars
var exphbs = require('express-handlebars');
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");


// For Passport
var passport = require('passport');
var session = require('express-session');
var env = require('dotenv').load();
app.use(session({
    secret: 'keyboard cat',
    resave: true,
    saveUninitialized: true
})); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions


/////////// ALTERNATE PER PASSPORT DOCS TO HANDLE AUTH //////////////
//For Handlebars
// app.set('views', './views');
// app.engine('hbs', exphbs({
//     extname: '.hbs'
// }));
// app.set('view engine', '.hbs');
// app.get('/', function(req, res) {
//     res.send('Welcome to Passport with Sequelize');
// });



// Routes
// =============================================================
var routeController = require("./controller/controllerWeather.js");
app.use("/", routeController);

var routes = require("./controllers/tripController.js");
app.use("/", routes);

var authRoute = require('./routes/auth.js')(app, passport);



// Syncing our sequelize models and then starting our Express app
// =============================================================
var db = require("./models");

//load passport strategies
require('./config/passport/passport.js')(passport, db.user);

db.sequelize.sync({}).then(function() {
db.sequelize.sync({ force: true }).then(function() {

    app.listen(PORT, function() {
        console.log("App listening on PORT " + PORT);
    });
});
