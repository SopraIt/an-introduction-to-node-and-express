var express = require('express');
var app = express();
var PORT = process.env.PORT || 5000;

var low = require('lowdb');
var FileSync = require('lowdb/adapters/FileSync');

var adapter = new FileSync('db.json');
var db = low(adapter);

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/api.html#express.json
app.use(express.json());

// https://enable-cors.org/server_expressjs.html
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'GET, OPTIONS, PATCH');
    next();
});

app.get('/hello-world', function (req, res) {
    res.send('Hello World!');
})

app.get('/api/v1/articles', function (req, res) {
    res.send(
        db.get('articles').value()
    )
})

app.route('/api/v1/articles/:id(\\d+)')
    .get(function (req, res) {
        res.send(
            db.get('articles')
                .find({ id: parseInt(req.params.id) })
                .value() || {}
        )
    })
    .patch(function (req, res) {
        db.get('articles')
            .find({ id: parseInt(req.params.id) })
            .assign(req.body)
            .write();

        res.send(
            db.get('articles')
                .find({ id: parseInt(req.params.id) })
                .value() || {}
        )
    })

app.listen(PORT, function () {
    console.log('Example app listening on port ' + PORT + '!');
});
