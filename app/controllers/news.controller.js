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

        let parsedFeed = [];
        
        Promise
            .resolve()
            .then(() => {
                return parser.parseURL('https://www.reddit.com/.rss');
            })
            .then((rawFeed) => {
                if (rawFeed) {
                    return Promise.all(
                        rawFeed.items.map((item) => {
                            parsedFeed.push({
                                source: 'reddit',
                                title: item.title,
                                content: item.content,
                                publishDate: new Date(item.pubDate),
                                author: item.author.split('/u/')[1],
                                link: item.link
                            });
                        })
                    )
                } else {
                    return;
                }
            })
            .then(() => {
                return parser.parseURL('http://rss.cnn.com/rss/edition.rss');
            })
            .then((rawFeed) => {
                if (rawFeed) {
                    return Promise.all(
                        rawFeed.items.map((item) => {
                            parsedFeed.push({
                                source: 'cnn',
                                title: item.title,
                                content: item.content,
                                publishDate: new Date(item.pubDate),
                                author: null,
                                link: item.link
                            });
                        })
                    )
                } else {
                    return;
                }
            })
            .then(() => {
                return parser.parseURL('http://feeds.bbci.co.uk/news/rss.xml');
            })
            .then((rawFeed) => {
                if (rawFeed) {
                    return Promise.all(
                        rawFeed.items.map((item) => {
                            parsedFeed.push({
                                source: 'bbc',
                                title: item.title,
                                content: item.content,
                                publishDate: new Date(item.pubDate),
                                author: null,
                                link: item.link
                            });
                        })
                    )
                } else {
                    return;
                }
            })
            .then(() => {
                res.status(200).send(parsedFeed);
            })
            .catch((err) => {
                console.log('\n Error:', err);
                res.status(400).send(err);
            })

        // (async () => {

        //     let feed = await parser.parseURL('https://www.reddit.com/.rss');

        //     let parsedFeed = [];

        //     feed.map((item) => {
        //         parsedFeed.push({
        //             title: item.title,
        //             image: item.content.split('<img src="')[1].split('" alt')[0] || null,
        //             publishDate: new Date(item.pubDate),
        //             author: item.author.split('/u/')[1],
        //             link: item.link
        //         });
        //     })

        //     res.status(200).send(feed);
          
        //   })();
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