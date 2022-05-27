var express = require('express');
var router = express.Router();

//Peticion de cambio de contraseña. Se llamará cuando alguien no recuerde su contraseña
router.get('/',function(req,res){
    var https = require('follow-redirects').https;
    var fs = require('fs');

    var options = {
    'method': 'GET',
    'hostname': 'fortnite-api.com',
    'path': '/v2/stats/br/v2?name=EcoslavTwitch&image=keyboardMouse',
    'headers': {
        'Authorization': 'b6b08a09-6d58-4e1c-9d90-74f3e0cdf718'
    },
    'maxRedirects': 20
    };

    var req = https.request(options, function (res2) {
        var chunks = [];

        res2.on("data", function (chunk) {
            chunks.push(chunk);
        });

        res2.on("end", function (chunk) {
            var body = Buffer.concat(chunks);
            res = body.toString();
            res.status(200);
        });

        res2.on("error", function (error) {
            console.error(error);
            res.status(200);
        });
    });

    req.end();
});

module.exports = router; 