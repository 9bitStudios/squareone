module.exports = function(express, server, mongoose) {

    // Database
    mongoose.connect('mongodb://localhost/test');

    //Schemas
    var User = new mongoose.Schema({
	name: String,
	avatar: String,
    });

    //Models
    var UserModel = mongoose.model('User', User );
    
};