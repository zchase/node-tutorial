var request = require('request');

describe('my test suite',function(){
	it("should respond with hello world", function(done) {
	  request("http://localhost:3000", function(error, response, body){
	    expect(body).toEqual("Hello World");
	    done();
	  });
	});
});