var http = require('http');

var hostname = '127.0.0.1', port = 3000;

var server = http.createServer(function (req, res) {

    var response = [{}];

    if (req.method === 'GET' && req.url === '/articles') {
        response = [{
            "id": 1,
            "title": "Article Title 1",
            "picture": "https://placeimg.com/640/480/tech?1",
            "plot": "Lorem ipsum.",
            "tag": "tech",
            "like": false
        }];
    }

    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end( JSON.stringify(response) );

});

server.listen(port, hostname, function () {
    console.log('Server running at http://' + hostname + ':' + port + '/');
});
