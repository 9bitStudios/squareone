define(["config",
	"jquery", 
	"underscore", 
	"backbone",
	"globals", 
	"helper",
	"views/HomeView"], function(config, $, _, Backbone, globals, Helper, HomeView) {

    var Router = Backbone.Router.extend({

	initialize: function() { },

	// object containing main view, partial views, and any other views. Unset views on every route change to avoid memory leaks 
	views: {
	    main: null
	},

	unsetView: function(view) {

	    if(this.views[view]) {
		try {
		    for(var i in this.views[view].subviews) {
			this.views[view].subviews[i].clearout();
			this.views[view].subviews.splice(i,1);
		    }
		    this.views[view].clearout();
		} 
		catch(e) { 
		    // Exception handling here...
		}
	    }
	},

	routes: {
	    // "url": "event"

	    "": "home", 
	    "user": "user", 
	},

	home: function() {
	    this.unsetView('main');
	    this.views['main'] = new HomeView();
	},

	user: function() {
	    this.unsetView('main');
	    this.views['main'] = new HomeView();
	}			

    });


    var initialize = function() {

	var router = new Router();		
	Backbone.history.start();
    };

    return {
	init: initialize
    };

});

