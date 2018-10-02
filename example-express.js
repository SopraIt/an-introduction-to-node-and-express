var express = require('express');
var app = express();

app.get('/articles', function (req, res) {
    res.send([{
        "id": 1,
        "title": "Article Title 1",
        "picture": "https://placeimg.com/640/480/tech?1",
        "plot": "Lorem ipsum.",
        "tag": "tech",
        "like": false
    }]);
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});
