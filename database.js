module.exports = function(express, server, mongoose) {

    // Database
    mongoose.connect('mongodb://localhost/squareone');

    //Schemas
    var User = new mongoose.Schema({
	name: String,
	email: String,
	avatar: String,
    });

    //Models
    var UserModel = mongoose.model('User', User );
    
    return {
	UserModel: UserModel
    };
    
};