var createError = require('http-errors');
const express = require('express');
const passport = require('passport');

const jwt = require('jsonwebtoken');
// const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const path = require('path');
const hbs = require('hbs');
const indexRouter = require('./routes/index')
const authRouter = require('./routes/auth')


const app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "hbs");


// Body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Cookie parser middleware
app.use(cookieParser());



// Set static folder
app.use(express.static(path.join(__dirname, 'public')));

app.use('/',indexRouter);
app.use('/auth',authRouter)


// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
  
    // render the error page
    res.status(err.status || 500);
    res.render('error');
  });
  
  module.exports = app;