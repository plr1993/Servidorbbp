var express = require('express');
var router = express.Router();
var db = require('../helpers/database')();
var jwt =require("jsonwebtoken");
var comprobacionjwt= require ('../helpers/comprobacionjwt');
var mySecretKey=process.env.JWT_SECRETKEY;

router.get('/',comprobacionjwt,function(req,res){
	var data = {
		"Mensaje":""
	};
	db.getConnection(function(err, connection) {
		if (err) throw err;
        var Id_mensaje = connection.escape(req.query.mensaje);
		var Id_chat_mensaje = connection.escape(req.query.id_chat_mensaje);
        var Id_emisor_mensaje = connection.escape(req.query.id_emisor_mensaje);
		var Id_receptor_mensaje = connection.escape(req.query.id_receptor_mensaje);
        var Texto_mensaje = connection.escape(req.query.texto_mensaje);
		var Pagina = connection.escape(req.query.pagina); //Variable que indica que pagina de facturas estamos que se mostraran de 10 en 10
		var consulta="SELECT * FROM mensaje";
        var i=0;
        if(Id_receptor_mensaje != 'NULL' || Id_emisor_mensaje != 'NULL' || Texto_mensaje != 'NULL'  || Id_mensaje != 'NULL' || Id_chat_mensaje != 'NULL'){
            console.log("Con el parametro:");
            consulta +=" WHERE ";
            if(Id_receptor_mensaje != 'NULL'){
                console.log("Id_receptor_mensaje:"+Id_receptor_mensaje);
                if (i==1) {
                    consulta  += " AND ";
                    i--;	
                }
                consulta  += "Id_receptor_mensaje="+Id_receptor_mensaje;
                i++;
            }
            if(Id_emisor_mensaje != 'NULL'){
                console.log("Id_emisor_mensaje:"+Id_emisor_mensaje);
                if (i==1) {
                    consulta  += " AND ";
                    i--;	
                }
                consulta  += "Id_emisor_mensaje="+Id_emisor_mensaje;
                i++;
            }
            if(Texto_mensaje != 'NULL'){
                console.log("Texto_mensaje:"+Texto_mensaje);
                if (i==1) {
                    consulta  += " AND ";
                    i--;	
                }
                consulta  += "Texto_mensaje="+Texto_mensaje;
                i++;
            }
            if(Id_mensaje != 'NULL'){
                console.log("Id_mensaje:"+Id_mensaje);
                if (i==1) {
                    consulta  += " AND ";
                    i--;	
                }
                consulta  += "Id_mensaje="+Id_mensaje;
                i++;
            }
            if(Id_chat_mensaje != 'NULL'){
                console.log("Id_chat_mensaje:"+Id_chat_mensaje);
                if (i==1) {
                    consulta  += " AND ";
                    i--;	
                }
                consulta  += "Id_chat_mensaje="+Id_chat_mensaje;
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
					console.log("Devuelvo los mensajes");
					data["Mensaje"] = rows;
					return res.status(200).json(data);
				}else{
					console.log("No hay mensajes...");
					data["Mensaje"] = "No hay mensajes";
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
		var Id_chat_mensaje = connection.escape(req.body.id_chat_mensaje);
        var Id_emisor_mensaje = connection.escape(req.body.id_emisor_mensaje);
		var Id_receptor_mensaje = connection.escape(req.body.id_receptor_mensaje);
        var Texto_mensaje = connection.escape(req.body.texto_mensaje);
		var data = {
			"Mensaje":""
		};
		var consulta = "INSERT INTO mensaje (";
		var i=0;
        if(Id_chat_mensaje != 'NULL'){
			if (i==1) {
				consulta  += ", ";
				i--;	
			}
			consulta  += "Id_chat_mensaje";
			i++;
		}
		if(Id_emisor_mensaje != 'NULL'){
			if (i==1) {
				consulta  += ", ";
				i--;	
			}
			consulta  += "Id_emisor_mensaje";
			i++;
		}
		if(Id_receptor_mensaje != 'NULL'){
			if (i==1) {
				consulta  += ", ";
				i--;	
			}
			consulta  += "Id_receptor_mensaje";
			i++;
		}
        if(Texto_mensaje != 'NULL'){
			if (i==1) {
				consulta  += ", ";
				i--;	
			}
			consulta  += "Texto_mensaje";
			i++;
		}
		console.log("CONSULTA 1 es"+consulta);
		consulta=consulta+") VALUES (";
		i=0;
		if(Id_chat_mensaje != 'NULL'){
			if (i==1) {
				consulta  += " , ";
				i--;	
			}
			consulta  += Id_chat_mensaje;
			i++;
		}
        if(Id_emisor_mensaje != 'NULL'){
			if (i==1) {
				consulta  += " , ";
				i--;	
			}
			consulta  += Id_emisor_mensaje;
			i++;
		}
		if(Id_receptor_mensaje != 'NULL'){
			if (i==1) {
				consulta  += " , ";
				i--;	
			}
			consulta  += Id_receptor_mensaje;
			i++;
		}
        if(Texto_mensaje != 'NULL'){
			if (i==1) {
				consulta  += " , ";
				i--;	
			}
			consulta  += Texto_mensaje;
			i++;
		}
		consulta+=")";
		console.log(consulta);
		connection.query(consulta,function(err, rows, fields){
			if(err){
				console.log(err);
                return res.status(400).json({ error: err });
			}else{
				data["Mensaje"] = "Datos insertados correctamente!";
				return res.status(200).json(data);
			}
		});
	connection.release();
	});
});
module.exports = router;