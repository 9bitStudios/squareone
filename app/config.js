define([], function(){
    
    // config file to define any useful "constants" quickly and easily elsewhere in application
    // e.g. config.property or config['property'].
    return { 
	debug: true,
	apiURL: 'http://localhost/development/squareone/api',
	apiSecretKey: '8675309',
	hashHeader: 'X-HASH',
    };	
    
});