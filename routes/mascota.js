var express = require('express');
var router = express.Router();
var db = require('../helpers/database')();
var jwt =require("jsonwebtoken");
var comprobacionjwt= require ('../helpers/comprobacionjwt');
var mySecretKey=process.env.JWT_SECRETKEY;

router.get('/',comprobacionjwt,function(req,res){
	var data = {
		"Mascota":""
	};
	db.getConnection(function(err, connection) {
		if (err) throw err;
		var Id_mascota = connection.escape(req.query.id_mascota);
        var Id_usuario_mascota = connection.escape(req.query.id_usuario_mascota);
		var Tipo_mascota = connection.escape(req.query.tipo_mascota);
		var Raza_mascota = connection.escape(req.query.raza_mascota);
        var Nombre_mascota = connection.escape(req.query.nombre_mascota);
		var Descripcion_mascota = connection.escape(req.query.descripcion_mascota);
		var Pagina = connection.escape(req.query.pagina); //Variable que indica que pagina de facturas estamos que se mostraran de 10 en 10
		var consulta="SELECT * FROM mascota"
        var i=0;
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
		console.log(consulta);
		connection.query(consulta,function(err, rows, fields){
			if(err){
				console.log("Error en la query...");
				return res.status(400).json({ error: err });
			}else{
				console.log("Query OK");
				if(rows.length != 0){
					console.log("Devuelvo los usuarios");
					data["Mascota"] = rows;
					return res.status(200).json(data);
				}else{
					console.log("No hay usuarios...");
					data["Mascota"] = 'No hay mascotas';
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
		var Tipo_mascota = connection.escape(req.body.tipo_mascota);
        var Id_usuario_mascota = connection.escape(req.body.id_usuario_mascota);
		var Raza_mascota = connection.escape(req.body.raza_mascota);
        var Nombre_mascota = connection.escape(req.body.nombre_mascota);
        var Foto_mascota = connection.escape(req.body.foto_mascota);
		var Descripcion_mascota = connection.escape(req.body.descripcion_mascota);
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