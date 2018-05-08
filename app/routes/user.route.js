(function () {
	'use strict';

	var UserController = require('./../controllers/user.controller');

	module.exports = function (app) {
        
        // post
		app.post('/user/create',     UserController.createUser);
        
        // get
        app.get('/user',           UserController.geteUser);
        app.get('/users',        UserController.geteAllUsers);
        
        // update
        app.put('/user/:id',        UserController.updateUser);
        
        // delete
        app.delete('/user/:id',     UserController.deleteUser);
	};
})();