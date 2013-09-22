define(['underscore', 'backbone', 'config', 'crypto'], function(_, Backbone, config, CryptoJS){
	
    return { 
	
	htmlEncode: function(value) {
	    return $('<div/>').text(value).html();
	},

	getHMAC: function(key) {
	    var hash = CryptoJS.HmacSHA1(key, config.apiSecretKey);
	    return hash.toString();
	},
		
	getMicrotime: function (get_as_float) {
	  
	  var now = new Date().getTime() / 1000;
	  var s = parseInt(now, 10);

	  return (get_as_float) ? now : (Math.round((now - s) * 1000) / 1000) + ' ' + s;
	},		
	
	getRequestObject: function(uid, messageData) {
	    
	    var microtime = this.getMicrotime(true).toString();
	    var requestObject = {};
	    requestObject['headers'] = {};
	    requestObject['headers']['X-MICROTIME'] = microtime;
	    requestObject['headers'][config.hashHeader] = this.getHMAC(uid+microtime);
	    requestObject['headers']['X-PUBLIC-KEY'] = uid;
	    _.extend(requestObject, messageData);
	    return requestObject;
	},	
		
	randomString: function(strLength) {

	    if(typeof strLength === 'undefined') 
		strLength = 8;

	    var text = "";
	    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

	    for( var i=0; i < strLength; i++ )
		text += possible.charAt(Math.floor(Math.random() * possible.length));

	    return text;		
	},

	createCookie: function(name,value,days) {
	    if (days) {
		var date = new Date();
		date.setTime(date.getTime()+(days*24*60*60*1000));
		var expires = "; expires="+date.toGMTString();
	    }
	    else var expires = "";
	    document.cookie = name+"="+value+expires+"; path=/";
	},

	readCookie: function (name) {
	    var nameEQ = name + "=";
	    var ca = document.cookie.split(';');
	    for(var i=0;i < ca.length;i++) {
		var c = ca[i];
		while (c.charAt(0)==' ') c = c.substring(1,c.length);
		if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
	    }
	    return null;
	},

	destroyCookie: function (name) {
	    this.createCookie(name,"",-1);
	}		
	
    };
	
});

