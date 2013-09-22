define(['config', 
	'jquery',
	'underscore', 
	'backbone'], function(config, $, _, Backbone){

    var UserModel = Backbone.Model.extend({

	urlRoot: config.apiURL + '/login', 

	defaults: {
	    name: '',
	    avatar: '',
	    loggedIn: false
	},

	initialize: function() {
    
	},

	reset: function() {
	    		
	}
	
    });

    return UserModel;
	
});