var app = require('express')();
var express = require('express');
var http = require('http').Server(app);

var passport = require('passport');
var session = require('express-session');
var bodyParser = require("body-parser");
var cookieParser = require('cookie-parser');
var cors = require('cors');
//RUTAS
var usuario = (require('./routes/usuario'));
var usuarior = (require('./routes/t_usuario'));
var acceso = (require('./routes/acceso'));
var loginjwt = require('./routes/loginjwt');
var provincia = require('./routes/provincia');
var comunidad = require('./routes/comunidad');
var localidad = require('./routes/localidad');
var resetpassword = require('./routes/resetpassword');
var confirmaremail = require('./routes/confirmaremail');
var contacto = require('./routes/contacto');
var interpoint = require('./routes/interpoint');
var chollos = (require('./routes/chollos'));
var eco = (require('./routes/eco'));


//CORS, PERMITIMOS  ACCESO A LA API SOLO EN ESTAS RUTAS
var whitelist = [
    'http://localhost:3000',
    'http://localhost:4200',
    'http://localhost:8100',
    'http://localhost:5000',
    'http://localhost:8888',
    'https://appay.es',
    'https://appay-aefd5.firebaseapp.com',
    'https://admin.appay.es',
];
var corsOptions = {
    origin: function(origin, callback) {
        var originIsWhitelisted = whitelist.indexOf(origin) !== -1;
        callback(null, originIsWhitelisted);
    },
    credentials: true
};
app.use(cors(corsOptions));

//PASSPORT
app.use(session({ secret: 'emiliomola' }));
app.use(passport.initialize());
app.use(passport.session());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());

//USO RUTAS
app.use('/usuario', usuario);
app.use('/t_usuario', usuarior);
app.use('/acceso', acceso);
app.use('/loginjwt', loginjwt);
app.use('/provincia', provincia);
app.use('/comunidad', comunidad);
app.use('/localidad', localidad);
app.use('/chollos', chollos);
app.use('/resetpassword', resetpassword);
app.use('/confirmaremail', confirmaremail);
app.use('/contacto', contacto);
app.use('/interpoint', interpoint);
app.use('/eco', eco);

app.get('/', function(req, res) {
    res.send("COLONY SERVIDOR FUNCIONANDO");
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
    console.log("Listening on " + port);
});