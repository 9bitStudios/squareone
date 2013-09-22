module.exports = function(express, server) {

    app.get('/test', function(req,res) {
	res.send('Test Route');
    });
};