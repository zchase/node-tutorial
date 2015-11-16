var clc = require('cli-color');

var request = require("request"),
    helloWorld = require("../app.js"),
    base_url = "http://localhost:3000/";

  request.get(base_url, function(error, response, body) {
    if(!error){
    	if(response.statusCode === 200){
    		console.log(clc.green('True'));
    	}else{
    		console.log(clc.red('False'));
    	}
    	helloWorld.closeServer();
    }
  });

  request.get(base_url, function(error, response, body) {
    if(!error){
    	if(body === "Hello World"){
    		console.log(clc.green('True'));
    	}else{
    		console.log(clc.red('False'));
    	}
    	helloWorld.closeServer();
    }
  });
