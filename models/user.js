var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');

var userSchema = new mongoose.Schema({
    name:{type:String, required:true},
    email:{type:String, required:true,index:true},
    password:{type:String, required:true}
});
var User = module.exports = mongoose.model('User',userSchema);
module.exports.createUser = function(newUser,callback){ 
    bcrypt.genSalt(10, function(err, salt) {
        bcrypt.hash(newUser.password, salt, function(err, hash) {
            newUser.password = hash;
            newUser.save(callback);
        });
    });
};

module.exports.getUserByEmail=function (email,callback) {
    console.log("getting email",email);
    var query= {email:email};
    User.findOne(query,callback);
};
module.exports.getUserById=function (id,callback) {
    console.log("getting ID");
    User.findById(id,callback);
};
module.exports.comparePassword=function (candidatePass,hash,callback) {
    console.log("getting pass",candidatePass);
    console.log(hash);
    bcrypt.compare(candidatePass, hash, function(err, match) {
        if (err) throw err;
        callback(null,match);
    });
};

