module.exports = function(express, server, mongoose, database) {

    server.get('/test', function(req,res) {
	
	return database.UserModel.find(function(error, users) {
	    if(!error) {
		return res.send(users);
	    } 
	    else {
		return console.log(error);
	    }	
	});
	
    });
};