var config = require('../../config/config');
var Project = require('../models/Project');
var User = require('../models/User');

// passport
var passport = require('passport');

// does user have access
exports.hasAccess = function(req, res, next) {
  // get logged in user
  return next();

  // check if user is granted access

  //return result
};

exports.localLogin = function(req, res) {
  return passport.authenticate('local-login', {
    successFlash: 'Welcome!',
    failureFlash: 'Incorrect username or password.'
  })
};

exports.localSignup = function(req, res) {
  return passport.authenticate('local-signup', {
    failureFlash: true,
    successFlash: 'Success!'
  })
};

exports.isAuthenticated = function(req, res, next) {
  if(req.isAuthenticated()) {
    return next();
  }
  res.send(401);
};

exports.localLogout = function(req, res) {
  req.logOut();
  res.send(200);
};