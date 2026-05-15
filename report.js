const newman = require('newman');
require('dotenv').config();

newman.run({

    collection: require('./Dmoney_API.postman_collection.json'),
    reporters: 'htmlextra',
    iterationCount: 1,
    delayRequest: 5000,
    envVar: [
        {


            key: "G_api",
            value: process.env.token



        }
    ],
    reporter: {
        htmlextra: {
            export: './Reports/report.html',
        }
    }
}, function (err) {
    if (err) { throw err; }
    console.log('collection run complete!');
});