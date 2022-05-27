var express = require('express');
var router = express.Router();
var unirest = require('unirest');
//Peticion de cambio de contraseña. Se llamará cuando alguien no recuerde su contraseña
router.get('/',function(req, res){
  var request = require('request');
  var options = {
    'method': 'GET',
    'url': 'https://fortnite-api.com/v2/stats/br/v2?name=EcoslavTwitch&image=keyboardMouse',
    'headers': {
      'Authorization': 'b6b08a09-6d58-4e1c-9d90-74f3e0cdf718'
    }
  };
  request(options, function (error, response) {
    if (error) throw new Error(error);
    res.send("Ecoslav ha ganado "+JSON.parse(response.body).data.stats.keyboardMouse.overall.wins+" partidas en Fortnite");
  });
  
});

module.exports = router; 