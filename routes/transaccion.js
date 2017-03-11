var express = require('express');
var router = express.Router();
var db = require('../helpers/database')();
var jwt =require("jsonwebtoken");
var comprobacionjwt= require ('../helpers/comprobacionjwt');
var mySecretKey=process.env.JWT_SECRETKEY;

router.get('/',comprobacionjwt,function(req,res){
	var data = {
		"Transaccion":""
	};
	db.getConnection(function(err, connection) {
		if (err) throw err;
        var Id_transaccion = connection.escape(req.query.transaccion);
		var Id_usuario_transaccion = connection.escape(req.query.id_usuario_transaccion);
        var Id_mascota_transaccion = connection.escape(req.query.id_mascota_transaccion);
		var Id_usuario_cuidador_transaccion = connection.escape(req.query.Id_usuario_cuidador_transaccion);
        var Precio_transaccion = connection.escape(req.query.precio_transaccion);
		var Pagina = connection.escape(req.query.pagina); //Variable que indica que pagina de facturas estamos que se mostraran de 10 en 10
		var consulta="SELECT * FROM transaccion";
        var i=0;
        if(Id_usuario_transaccion != 'NULL' || Id_mascota_transaccion != 'NULL' || Id_usuario_cuidador_transaccion != 'NULL'  || Id_transaccion != 'NULL' || Precio_transaccion != 'NULL'){
            console.log("Con el parametro:");
            consulta +=" WHERE ";
            if(Id_usuario_transaccion != 'NULL'){
                console.log("Id_usuario_transaccion:"+Id_usuario_transaccion);
                if (i==1) {
                    consulta  += " AND ";
                    i--;	
                }
                consulta  += "Id_usuario_transaccion="+Id_usuario_transaccion;
                i++;
            }
            if(Id_mascota_transaccion != 'NULL'){
                console.log("Id_mascota_transaccion:"+Id_mascota_transaccion);
                if (i==1) {
                    consulta  += " AND ";
                    i--;	
                }
                consulta  += "Id_mascota_transaccion="+Id_mascota_transaccion;
                i++;
            }
            if(Id_usuario_cuidador_transaccion != 'NULL'){
                console.log("Id_usuario_cuidador_transaccion:"+Id_usuario_cuidador_transaccion);
                if (i==1) {
                    consulta  += " AND ";
                    i--;	
                }
                consulta  += "Id_usuario_cuidador_transaccion="+Id_usuario_cuidador_transaccion;
                i++;
            }
            if(Id_transaccion != 'NULL'){
                console.log("Id_transaccion:"+Id_transaccion);
                if (i==1) {
                    consulta  += " AND ";
                    i--;	
                }
                consulta  += "Id_transaccion="+Id_transaccion;
                i++;
            }
            if(Precio_transaccion != 'NULL'){
                console.log("Precio_transaccion:"+Precio_transaccion);
                if (i==1) {
                    consulta  += " AND ";
                    i--;	
                }
                consulta  += " Precio_transaccion="+Precio_transaccion;
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
					console.log("Devuelvo los transacciones");
					data["Transaccion"] = rows;
					return res.status(200).json(data);
				}else{
					console.log("No hay transacciones...");
					data["Transaccion"] = "No hay transacciones";
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
		var Id_usuario_transaccion = connection.escape(req.body.id_usuario_transaccion);
        var Id_mascota_transaccion = connection.escape(req.body.id_mascota_transaccion);
		var Id_usuario_cuidador_transaccion = connection.escape(req.body.Id_usuario_cuidador_transaccion);
        var Precio_transaccion = connection.escape(req.body.precio_transaccion);
		var data = {
			"Transaccion":""
		};
		var consulta = "INSERT INTO transaccion (";
		var i=0;
        if(Id_usuario_transaccion != 'NULL'){
			if (i==1) {
				consulta  += ", ";
				i--;	
			}
			consulta  += "Id_usuario_transaccion";
			i++;
		}
		if(Id_mascota_transaccion != 'NULL'){
			if (i==1) {
				consulta  += ", ";
				i--;	
			}
			consulta  += "Id_mascota_transaccion";
			i++;
		}
		if(Id_usuario_cuidador_transaccion != 'NULL'){
			if (i==1) {
				consulta  += ", ";
				i--;	
			}
			consulta  += "Id_usuario_cuidador_transaccion";
			i++;
		}
        if(Precio_transaccion != 'NULL'){
			if (i==1) {
				consulta  += ", ";
				i--;	
			}
			consulta  += "Precio_transaccion";
			i++;
		}
		console.log("CONSULTA 1 es"+consulta);
		consulta=consulta+") VALUES (";
		i=0;
		if(Id_usuario_transaccion != 'NULL'){
			if (i==1) {
				consulta  += " , ";
				i--;	
			}
			consulta  += Id_usuario_transaccion;
			i++;
		}
        if(Id_mascota_transaccion != 'NULL'){
			if (i==1) {
				consulta  += " , ";
				i--;	
			}
			consulta  += Id_mascota_transaccion;
			i++;
		}
		if(Id_usuario_cuidador_transaccion != 'NULL'){
			if (i==1) {
				consulta  += " , ";
				i--;	
			}
			consulta  += Id_usuario_cuidador_transaccion;
			i++;
		}
        if(Precio_transaccion != 'NULL'){
			if (i==1) {
				consulta  += " , ";
				i--;	
			}
			consulta  += Precio_transaccion;
			i++;
		}
		consulta+=")";
		console.log(consulta);
		connection.query(consulta,function(err, rows, fields){
			if(err){
				console.log(err);
                return res.status(400).json({ error: err });
			}else{
				data["Transaccion"] = "Datos insertados correctamente!";
				return res.status(200).json(data);
			}
		});
	connection.release();
	});
});
module.exports = router;