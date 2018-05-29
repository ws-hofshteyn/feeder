(function () {
    'use strict';

    let Promise = require('bluebird');
    // var UserModel = require('./../models/user.model');
    let Parser = require('rss-parser');
    let parser = new Parser();

    module.exports = {
        getNews,
        // createUser,
        // geteUser,
        // geteAllUsers,
        // updateUser,
        // deleteUser
    };


    function getNews (req, res) {

        (async () => {

            let feed = await parser.parseURL('https://www.reddit.com/.rss');

            res.status(200).send(feed);
          
          })();
    }
    // function createUser (req, res) {

    //     Promise.resolve()
    //         .then(() => {
    //             return UserModel.create(req.body);
    //         })
    //         .then((user) => {
    //             res.send({
    //                 status: 201,
    //                 user: user
    //             });
    //         })
    //         .catch(err => {
    //             console.log('err', err)
    //             res.send({
    //                 status:400,
    //                 message: err.message
    //             })
    //         })
    // }

    // function geteUser (req, res) {
    //     Promise.resolve()
    //     .then(() => {
    //         return UserModel.get(req.params.id);
    //     })
    //     .then((user) => {
    //         res.send({
    //             status: 200,
    //             user: user
    //         });
    //     })
    //     .catch(err => {
    //         console.log('err', err)
    //         res.send({
    //             status:400,
    //             message: err.message
    //         })
    //     })
    // }

    // function geteAllUsers (req, res) {
    //     Promise.resolve()
    //     .then(() => {
    //         return UserModel.get({});
    //     })
    //     .then((users) => {
    //         res.send(users);
    //     })
    //     .catch(err => {
    //         console.log('err', err)
    //         res.send({
    //             status:400,
    //             message: err.message
    //         })
    //     })
    // }

    // function updateUser (req, res) {
    //     Promise.resolve()
    //     .then(() => {
    //         return UserModel.update(req.body);
    //     })
    //     .then((user) => {
    //         res.send({
    //             status: 200,
    //             user: user
    //         });
    //     })
    //     .catch(err => {
    //         console.log('err', err)
    //         res.send({
    //             status:400,
    //             message: err.message
    //         })
    //     })
    // }

    // function deleteUser (req, res) {
    //     Promise.resolve()
    //     .then(() => {
    //         return UserModel.create(req.params.id);
    //     })
    //     .then((user) => {
    //         res.send({
    //             status: 200
    //         });
    //     })
    //     .catch(err => {
    //         console.log('err', err)
    //         res.send({
    //             status:400,
    //             message: err.message
    //         })
    //     })
    // }
    
})();