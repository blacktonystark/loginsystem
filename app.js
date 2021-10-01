// declarations
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const mongoose = require('mongoose');
const passport = require('passport');
const localStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');
const app = express();

// mongodb connect
mongoose.connect("mongodb://localhost:27017/loginsystem", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// Middleware
app.engine('hbs', hbs({ extname: '.hbs' }));
app.set('view engine', 'hbs');
app.use(express.static(__dirname + +'/public'));
app.use(session({
    secret: "verygoodsecret",
    resave: false,
    saveUninitialized: true,
}));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//passport.json
app.use(passport.initialize());
app.set(passport.session());