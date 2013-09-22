describe('Model :: User', function() {

    var mockData = { name: 'Foo', avatar: '', loggedIn: false };

    beforeEach(function() {

      var self = this;
      var done = false;

      require(['models/UserModel'], function(UserModel) {
		  self.user = new UserModel(mockData);
		  done= true;
      });

      waitsFor(function() { return done; });	

    });
  
    afterEach(function(){

    });

    describe('.Create()', function() {

	var u = this.user;

	it('should create a user', function() {
	    runs(function(){
	      expect(u).not.toBe(null);
	    });
	});

	it('should set the name properly', function() {

	    var u = this.user;

	    runs(function(){
	      expect(u.get('name')).toEqual('Foo');
	    });

	});
    });
});