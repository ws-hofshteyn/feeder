(function () {
	'use strict';

	var NewsController = require('../controllers/news.controller.js');

	module.exports = (app) => {

        app.get('/news',    NewsController.getNews);
        
        // // post
		// app.post('/user/create',     UserController.createUser);
        
        // // get
        // app.get('/user',           UserController.geteUser);
        // app.get('/users',        UserController.geteAllUsers);
        
        // // update
        // app.put('/user/:id',        UserController.updateUser);
        
        // // delete
        // app.delete('/user/:id',     UserController.deleteUser);
	};
})();