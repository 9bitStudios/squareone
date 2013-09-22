require.config({
    
    paths: {
	'jquery': 'libs/jquery/jquery-1.9.1',
	'underscore': 'libs/underscore/underscore',
	'backbone': 'libs/backbone/backbone',
	'helper': 'libs/helper/helper',
	'notifications': 'libs/notifications/notifications',
	'crypto': 'libs/crypto/hmac-sha1',
	'text': 'libs/require/text'
    },
  
    shim: {
	'underscore': {
	    exports: '_'
	},
	'backbone': {
	    deps: ['underscore', 'jquery'],
	    exports: 'Backbone'
	},
	'crypto':{
	    exports: 'CryptoJS'
	}
    } 
});
require(['backbone', 'app', 'helper'], function(Backbone, App, Helper){ 
    
    // add any prototypes or Backbone extensions before kicking off the application
    
    // ajax setup
    $.ajaxSetup({
	beforeSend: function(xhr) {
	    
	    // default header added to every request
	    // xhr.setRequestHeader('X-SOMETHING', 'something');
	}
    });    
    
    // unbind events and remove view from memory
    Backbone.View.prototype.clearout = function() {
	this.unbind();
	this.remove();
    };   
    
    // generic subview bucket
    Backbone.View.prototype.subviews = [];     
    
    App.init();
    
});