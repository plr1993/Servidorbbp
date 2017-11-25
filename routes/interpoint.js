var express = require('express');
var router = express.Router();
var db = require('../helpers/database')();
var jwt =require("jsonwebtoken");
var comprobacionjwt= require ('../helpers/comprobacionjwt');
var mySecretKey=process.env.JWT_SECRETKEY;

router.get('/',comprobacionjwt,function(req,res){
	var data = {
		"InterestPoint":""
	};
	db.getConnection(function(err, connection) {
		if (err) throw err;
		var IdPoint  = connection.escape(req.query.idpoint );
        var NamePoint  = connection.escape(req.query.namepoint );
		var DescriptionPoint  = connection.escape(req.query.descriptionpoint);
		var ImagePoint  = connection.escape(req.query.imagepoint);
        var PodcastPoint  = connection.escape(req.query.podcastpoint);
		var Latitude  = connection.escape(req.query.latitude);
		var Longitude  = connection.escape(req.query.longitude);
		var consulta="SELECT * FROM InterestPoint"
        /*var i=0;
        if(Nombre_mascota != 'NULL' || Tipo_mascota != 'NULL'  || Raza_mascota != 'NULL' || Id_mascota != 'NULL' || Descripcion_mascota != 'NULL' || Id_usuario_mascota != 'NULL'){
            console.log("Con el parametro:");
            consulta +=" WHERE ";
            if(Nombre_mascota != 'NULL'){
                console.log("Nombre_mascota:"+Nombre_mascota);
                if (i==1) {
                    consulta  += " AND ";
                    i--;	
                }
                consulta  += "Nombre_mascota LIKE '%"+Nombre_mascota.replace(/'/g, "")+"%'";
                i++;
            }
            if(Id_mascota != 'NULL'){
                console.log("Id_mascota:"+Id_mascota);
                if (i==1) {
                    consulta  += " AND ";
                    i--;	
                }
                consulta  += "Id_mascota="+Id_mascota;
                i++;
            }
            if(Raza_mascota != 'NULL'){
                console.log("Raza_mascota:"+Raza_mascota);
                if (i==1) {
                    consulta  += " AND ";
                    i--;	
                }
                consulta  += "Raza_mascota="+Raza_mascota;
                i++;
            }
            if(Tipo_mascota != 'NULL'){
                console.log("Tipo_mascota:"+Tipo_mascota);
                if (i==1) {
                    consulta  += " AND ";
                    i--;	
                }
                consulta  += "Tipo_mascota="+Tipo_mascota;
                i++;
            }
            if(Id_usuario_mascota != 'NULL'){
                console.log("Id_usuario_mascota:"+Id_usuario_mascota);
                if (i==1) {
                    consulta  += " AND ";
                    i--;	
                }
                consulta  += "Id_usuario_mascota="+Id_usuario_mascota;
                i++;
            }
            if(Descripcion_mascota != 'NULL'){
                console.log("Descripcion_mascota:"+Descripcion_mascota);
                if (i==1) {
                    consulta  += " AND ";
                    i--;	
                }
                consulta  += "Descripcion_mascota LIKE '%"+Descripcion_mascota.replace(/'/g, "")+"%'";
                i++;
            }
            
        }
		if(Pagina!='NULL'){
			var pags=parseInt(Pagina.replace(/'/g, ""))*10;
			console.log("Voy a mostrar solo las 10 siguientes filas empezando en la: "+pags);
			consulta += " LIMIT 10 OFFSET "+pags;
		}
		console.log("Esta es la consulta a la base de datos:");
		console.log(consulta);*/
		connection.query(consulta,function(err, rows, fields){
			if(err){
				console.log("Error en la query...");
				return res.status(400).json({ error: err });
			}else{
				console.log("Query OK");
				if(rows.length != 0){
					console.log("Devuelvo los puntos de interes");
					data["InterestPoint"] = rows;
					return res.status(200).json(data);
				}else{
					console.log("No hay puntos de interes cerca...");
					data["InterestPoint"] = 'No hay puntos de interes cerca...';
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
		var IdPoint  = connection.escape(req.body.idpoint );
        var NamePoint  = connection.escape(req.body.namepoint );
		var DescriptionPoint  = connection.escape(req.body.descriptionpoint);
		var ImagePoint  = connection.escape(req.body.imagepoint);
        var PodcastPoint  = connection.escape(req.body.podcastpoint);
		var Latitude  = connection.escape(req.body.latitude);
		var Longitude  = connection.escape(req.body.longitude);
		var data = {
			"Mascota":""
		};
		var consulta = "INSERT INTO mascota (";
		var i=0;
        if(Id_usuario_mascota != 'NULL'){
			if (i==1) {
				consulta  += ", ";
				i--;	
			}
			consulta  += "Id_usuario_mascota";
			i++;
		}
		if(Tipo_mascota != 'NULL'){
			if (i==1) {
				consulta  += ", ";
				i--;	
			}
			consulta  += "Tipo_mascota";
			i++;
		}
		if(Raza_mascota != 'NULL'){
			if (i==1) {
				consulta  += ", ";
				i--;	
			}
			consulta  += "Raza_mascota";
			i++;
		}
		if(Nombre_mascota != 'NULL'){
			if (i==1) {
				consulta  += ", ";
				i--;	
			}
			consulta  += "Nombre_mascota";
			i++;
		}
		if(Foto_mascota != 'NULL'){
			if (i==1) {
				consulta  += ", ";
				i--;	
			}
			consulta  += "Foto_mascota";
			i++;
		}
		if(Descripcion_mascota != 'NULL'){
			if (i==1) {
				consulta  += ", ";
				i--;	
			}
			consulta  += "Descripcion_mascota";
			i++;
		}
		console.log("CONSULTA 1 es"+consulta);
		consulta=consulta+") VALUES (";
		i=0;
		if(Id_usuario_mascota != 'NULL'){
			if (i==1) {
				consulta  += " , ";
				i--;	
			}
			consulta  += Id_usuario_mascota;
			i++;
		}
        if(Tipo_mascota != 'NULL'){
			if (i==1) {
				consulta  += " , ";
				i--;	
			}
			consulta  += Tipo_mascota;
			i++;
		}
		if(Raza_mascota != 'NULL'){
			if (i==1) {
				consulta  += " , ";
				i--;	
			}
			consulta  += Raza_mascota;
			i++;
		}
		if(Nombre_mascota != 'NULL'){
			if (i==1) {
				consulta  += " , ";
				i--;	
			}
			consulta  += Nombre_mascota;
			i++;
		}
		if(Foto_mascota != 'NULL'){
			if (i==1) {
				consulta  += " , ";
				i--;	
			}
			consulta  += Foto_mascota;
			i++;
		}
		if(Descripcion_mascota != 'NULL'){
			if (i==1) {
				consulta  += " , ";
				i--;	
			}
			consulta  += Descripcion_mascota;
			i++;
		}
		consulta+=")";
		console.log(consulta);
		connection.query(consulta,function(err, rows, fields){
			if(err){
				console.log(err);
                return res.status(400).json({ error: err });
			}else{
				data["Mascota"] = "Datos insertados correctamente!";
				return res.status(200).json(data);
			}
		});
	connection.release();
	});
});
module.exports = router;