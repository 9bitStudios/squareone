module.exports = function(express, server) {

    server.get('/test', function(req,res) {
	res.send('Test Route');
    });
};