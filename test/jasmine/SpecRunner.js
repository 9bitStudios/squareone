require.config({
    baseUrl: "../../app/",
    paths: {
      jquery: 'libs/jquery/jquery-1.9.1',
      underscore: 'libs/underscore/underscore',
      backbone: 'libs/backbone/backbone',
      jasmine: '../test/lib/jasmine',
      'jasmine-html': '../test/lib/jasmine-html',
      spec: '../test/jasmine/spec/'
    },
    shim: {
	underscore: {
	  exports: "_"
	},
	backbone: {
	  deps: ['underscore', 'jquery'],
	  exports: 'Backbone'
	},
	jasmine: {
	  exports: 'jasmine'
	},
	'jasmine-html': {
	  deps: ['jasmine'],
	  exports: 'jasmine'
	}
  }
});


require(['underscore', 'jquery', 'jasmine-html'], function(_, $, jasmine){

    var jasmineEnv = jasmine.getEnv();
    jasmineEnv.updateInterval = 1000;
    var htmlReporter = new jasmine.HtmlReporter();
    jasmineEnv.addReporter(htmlReporter);
    jasmineEnv.specFilter = function(spec) {
	return htmlReporter.specFilter(spec);
    };

    var specs = [];

    specs.push('spec/models/UserSpec');

    $(function(){
      require(specs, function(){
	jasmineEnv.execute();
      });
    });

});
