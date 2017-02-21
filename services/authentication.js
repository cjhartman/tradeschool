var mongoose = require('mongoose');
var User = require('../models/user');
var passport = require('passport');

module.exports.register = function(req, res) {
  console.log('Inside auth.register');
  var user = new User();
  user.name = req.name;
  user.email = req.email;
  console.log(req);
  user.setPassword(req.password);
  
  user.save(
    function(err) {
  });
  console.log('User has been saved to database');
};

// module.exports.login = function(req, res) {
//   passport.authenticate('local', function(err,user,info){
//     var token;
//     if(err) {
//       console.log('Error authenticating');
//       res.status(404).json(err);
//       return;
//     }
//     if(user){
//       console.log('User found');
//       token = user.generateJwt();
//       res.status(200);
//       res.json({"token" : token});
//     }else{
//       console.log('User not found');
//       res.status(401).json(info);
//     }
//   })(req,res);
// };

// module.exports.profileRead = function(req, res) {
//   if(!req.payload._id) {
//     res.status(401).json({"message": "UnauthorizedError: private profile"});
//   }else{
//     //may need to remove this part for all users to be able to view profiles
//     User
//       .findById(req.payload._id)
//       .exec(function(err,user) {
//         res.status(200).json(user);
//     });
//   }
// };


// /*
// module.exports.register = function(userForm, res) {
    
//     console.log('Inside the authentication.register function');
//     var user = new User();
//     user.name = userForm.name;
//     user.email = userForm.email;
//     user.setPassword(userForm.password);
//     user.save(function (error, result) {
//     if (error) {
//       console.log('User could not be saved to database');
//       return res.status(500).json({message: 'error saving user to database'});
//     }
//     console.log('User has been saved to database');
//     res.status(201).json({message: 'User has been saved'});
//   });
// };


// module.exports.login = function(userForm, res) {
//   console.log('Inside the authentication.login function');
//   var loginEmail = userForm.email;
//   var loginPassword = userForm.password;
//   User.findOne({
//     email: loginEmail,
//   }, function(err, user){
//     if(err){
//       console.log('Error finding user');
//       return done(err, false);
//     }
//     if(!user){
//       console.log('User not found');
//       return done(null, false);
//     }
//     if(user){
//       console.log('User found');
//       if(user.validatePassword(loginPassword)){
//         return done(null, user);
//       }else{
//         console.log('Incorrect password');
//         return done(null, false);
//       }
//     }
//   }
  
//   )
// };
// */




