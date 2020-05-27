const express = require('express');
const exphbs = require('express-handlebars');

const app = express();
const dbClient = require('./db').getClient();
const db = dbClient.db('class_emo');
const emotions = db.collection('class_twos');

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

app.get('/', function (req, res) {
    res.render('home');
});


app.get('/emotions', function (req, res) {
    const { limit } = req.query;
    emotions
        .find({})
        // .limit(100)
        .toArray(function (err, docs) {
            if (err) res.sendStatus(500);
            res.json(docs.slice(-limit));
        });
});

module.exports = app;