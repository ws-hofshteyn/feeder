(function () {
    'use strict';

    var Promise = require('bluebird');
    var mongoose = require('mongoose');
    
    var UserSchema = require('./../schemas/user.schema');

    module.exports = {
        create: create,
        get: get,
        update: update,
        delete: remove
    };

    function create (params) {
		return new Promise(function (resolve, reject) {
			UserSchema
            .create(params, (err, user) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(user);
                }
            });
		});
    }

    function get (params) {
		return new Promise(function (resolve, reject) {
			UserSchema
				.find(params)
				.lean()
				.exec(function (err, user) {
					if (err) {
						reject(err);
					} else {
						resolve(user);
					}
				});
		});
    }
    
    function update (query, params) {
		return new Promise(function (resolve, reject) {
			UserSchema
				.update(query, params, { new: true }, (err, user) => {
					if (err) {
						reject(err);
					} else {
						resolve(user);
					}
				});
		});
	}
    
    function remove (params) {
		return new Promise(function (resolve, reject) {
			UserSchema
				.remove(params, function (err, done) {
					if (err) {
						reject(err);
					} else {
						resolve();
					}
				});
		});
	}
    
})();