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

app