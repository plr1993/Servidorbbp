var express = require('express');
var router = express.Router();
var db = require('../helpers/database')();
var jwt =require("jsonwebtoken");
var comprobacionjwt= require ('../helpers/comprobacionjwt');
var mySecretKey=process.env.JWT_SECRETKEY;

router.get('/',comprobacionjwt,function(req,res){
	var data = {
		"Chat":""
	};
	db.getConnection(function(err, connection) {
		if (err) throw err;
        var Id_chat = connection.escape(req.query.chat);
		var Id_transaccion_chat = connection.escape(req.query.id_transaccion_chat);
        var Id_emisor_chat = connection.escape(req.query.id_emisor_chat);
		var Id_receptor_chat = connection.escape(req.query.id_receptor_chat);
		var Pagina = connection.escape(req.query.pagina); //Variable que indica que pagina de facturas estamos que se mostraran de 10 en 10
		var consulta="SELECT * FROM chat"
        var i=0;
        if(Id_receptor_chat != 'NULL' || Id_emisor_chat != 'NULL' || Id_transaccion_chat != 'NULL'  || Id_chat != 'NULL' ){
            console.log("Con el parametro:");
            consulta +=" WHERE ";
            if(Id_receptor_chat != 'NULL'){
                console.log("Id_receptor_chat:"+Id_receptor_chat);
                if (i==1) {
                    consulta  += " AND ";
                    i--;	
                }
                consulta  += "Id_receptor_chat="+Id_receptor_chat;
                i++;
            }
            if(Id_emisor_chat != 'NULL'){
                console.log("Id_emisor_chat:"+Id_emisor_chat);
                if (i==1) {
                    consulta  += " AND ";
                    i--;	
                }
                consulta  += "Id_emisor_chat="+Id_emisor_chat;
                i++;
            }
            if(Id_transaccion_chat != 'NULL'){
                console.log("Id_transaccion_chat:"+Id_transaccion_chat);
                if (i==1) {
                    consulta  += " AND ";
                    i--;	
                }
                consulta  += "Id_transaccion_chat="+Id_transaccion_chat;
                i++;
            }
            if(Id_chat != 'NULL'){
                console.log("Id_chat:"+Id_chat);
                if (i==1) {
                    consulta  += " AND ";
                    i--;	
                }
                consulta  += "Id_chat="+Id_chat;
                i++;
            }
        }
		if(Pagina!='NULL'){
			var pags=parseInt(Pagina.replace(/'/g, ""))*10;
			console.log("Voy a mostrar solo las 10 siguientes filas empezando en la: "+pags);
			consulta += " LIMIT 10 OFFSET "+pags;
		}
		console.log("Esta es la consulta a la base de datos:");
		console.log(consulta);
		connection.query(consulta,function(err, rows, fields){
			if(err){
				console.log("Error en la query...");
				return res.status(400).json({ error: err });
			}else{
				console.log("Query OK");
				if(rows.length != 0){
					console.log("Devuelvo los chats");
					data["Chat"] = rows;
					return res.status(200).json(data);
				}else{
					console.log("No hay chats...");
					data["Chat"] = "No hay anuncios";
					return res.status(204).json({ error: err });
				}
			}
		});
		connection.release();
	});
});

//Funcion que genera el POST de Usuarios
router.post('/',comprobacionjwt,function(req,res){
	db.getConnection(function(err, connection) {
		if (err) throw err;
		var Id_transaccion_chat = connection.escape(req.body.id_transaccion_chat);
        var Id_emisor_chat = connection.escape(req.body.id_emisor_chat);
		var Id_receptor_chat = connection.escape(req.body.id_receptor_chat);
		var data = {
			"Chat":""
		};
		var consulta = "INSERT INTO chat (";
		var i=0;
        if(Id_transaccion_chat != 'NULL'){
			if (i==1) {
				consulta  += ", ";
				i--;	
			}
			consulta  += "Id_transaccion_chat";
			i++;
		}
		if(Id_emisor_chat != 'NULL'){
			if (i==1) {
				consulta  += ", ";
				i--;	
			}
			consulta  += "Id_emisor_chat";
			i++;
		}
		if(Id_receptor_chat != 'NULL'){
			if (i==1) {
				consulta  += ", ";
				i--;	
			}
			consulta  += "Id_receptor_chat";
			i++;
		}
		console.log("CONSULTA 1 es"+consulta);
		consulta=consulta+") VALUES (";
		i=0;
		if(Id_transaccion_chat != 'NULL'){
			if (i==1) {
				consulta  += " , ";
				i--;	
			}
			consulta  += Id_transaccion_chat;
			i++;
		}
        if(Id_emisor_chat != 'NULL'){
			if (i==1) {
				consulta  += " , ";
				i--;	
			}
			consulta  += Id_emisor_chat;
			i++;
		}
		if(Id_receptor_chat != 'NULL'){
			if (i==1) {
				consulta  += " , ";
				i--;	
			}
			consulta  += Id_receptor_chat;
			i++;
		}
		consulta+=")";
		console.log(consulta);
		connection.query(consulta,function(err, rows, fields){
			if(err){
				console.log(err);
                return res.status(400).json({ error: err });
			}else{
				data["Chat"] = "Datos insertados correctamente!";
				return res.status(200).json(data);
			}
		});
	connection.release();
	});
});
module.exports = router;