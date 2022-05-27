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
//Peticion de cambio de contraseña. Se llamará cuando alguien no recuerde su contraseña
router.get('/kills',function(req, res){
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
    console.log(JSON.parse(response.body))
    res.send("Ecoslav ha matado a "+JSON.parse(response.body).data.stats.keyboardMouse.overall.kills+" jugadores en Fortnite");
  });
  
});
router.get('/img',function(req, res){
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
    console.log(JSON.parse(response.body))
    res.send(JSON.parse(response.body).data.image);
  });
});
router.get('/temp',function(req, res){
  var request = require('request');
  var options = {
    'method': 'GET',
    'url': 'https://fortnite-api.com/v2/stats/br/v2?name=EcoslavTwitch&image=keyboardMouse&season',
    'headers': {
      'Authorization': 'b6b08a09-6d58-4e1c-9d90-74f3e0cdf718'
    }
  };
  request(options, function (error, response) {
    if (error) throw new Error(error);
    res.send("Ecoslav ha ganado "+JSON.parse(response.body).data.stats.keyboardMouse.overall.wins+" partidas en Fortnite esta Temporada");
  });
  
});
//Peticion de cambio de contraseña. Se llamará cuando alguien no recuerde su contraseña
router.get('/killstemp',function(req, res){
  var request = require('request');
  var options = {
    'method': 'GET',
    'url': 'https://fortnite-api.com/v2/stats/br/v2?name=EcoslavTwitch&image=keyboardMouse&season',
    'headers': {
      'Authorization': 'b6b08a09-6d58-4e1c-9d90-74f3e0cdf718'
    }
  };
  request(options, function (error, response) {
    if (error) throw new Error(error);
    console.log(JSON.parse(response.body))
    res.send("Ecoslav ha matado a "+JSON.parse(response.body).data.stats.keyboardMouse.overall.kills+" jugadores en Fortnite esta Temporada");
  });
  
});
router.get('/imgtemp',function(req, res){
  var request = require('request');
  var options = {
    'method': 'GET',
    'url': 'https://fortnite-api.com/v2/stats/br/v2?name=EcoslavTwitch&image=keyboardMouse&season',
    'headers': {
      'Authorization': 'b6b08a09-6d58-4e1c-9d90-74f3e0cdf718'
    }
  };
  request(options, function (error, response) {
    if (error) throw new Error(error);
    console.log(JSON.parse(response.body))
    res.send(JSON.parse(response.body).data.image);
  });
});
module.exports = router; 