const express = require('express');
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://admin:admin@localhost:27017';
const dbName = 'user-account';
const app = express();

// Make sure you place body-parser before your CRUD handlers!
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(3000, function() {
    console.log('listening on 3000')
});
// Get
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.post('/users', (req, res) => {
    MongoClient.connect(url, (err, client) => {
        if (err) return console.error('>>>> CONNECTION faild: ', err);
        db = client.db(dbName);
        const usersCollection = db.collection('users');
        usersCollection.insertOne(req.body).then(_result => {
            res.redirect('/');
        }).catch(error => console.error('>>>> POST Error: ', error));
    });
});