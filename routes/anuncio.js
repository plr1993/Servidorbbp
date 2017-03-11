var express = require('express');
var router = express.Router();
var db = require('../helpers/database')();
var jwt =require("jsonwebtoken");
var comprobacionjwt= require ('../helpers/comprobacionjwt');
var mySecretKey=process.env.JWT_SECRETKEY;

router.get('/',comprobacionjwt,function(req,res){
	var data = {
		"Anuncio":""
	};
	db.getConnection(function(err, connection) {
		if (err) throw err;
        var Id_anuncio = connection.escape(req.query.id_anuncio);
		var Id_mascota_anuncio = connection.escape(req.query.id_mascota_anuncio);
        var Id_usuario_anuncio = connection.escape(req.query.id_mascota_mascota);
		var Fechamin = connection.escape(req.query.fechamin);
		var Fechamax = connection.escape(req.query.fechamax); 
        var Fecha = connection.escape(req.query.fecha);        
        var Titulo_anuncio = connection.escape(req.query.titulo_anuncio);
		var Descripcion_anuncio = connection.escape(req.query.descripcion_anuncio);
		var Pagina = connection.escape(req.query.pagina); //Variable que indica que pagina de facturas estamos que se mostraran de 10 en 10
		var consulta="SELECT * FROM anuncio"
        var i=0;
        if(Id_anuncio != 'NULL' || Id_mascota_anuncio != 'NULL' || Fechamin != 'NULL'  || Fechamax != 'NULL' || Fecha != 'NULL' || Titulo_anuncio != 'NULL' || Descripcion_anuncio != 'NULL'){
            console.log("Con el parametro:");
            consulta +=" WHERE ";
            if(Titulo_anuncio != 'NULL'){
                console.log("Titulo_anuncio:"+Titulo_anuncio);
                if (i==1) {
                    consulta  += " AND ";
                    i--;	
                }
                consulta  += "Titulo_anuncio LIKE '%"+Titulo_anuncio.replace(/'/g, "")+"%'";
                i++;
            }
            if(Descripcion_anuncio != 'NULL'){
                console.log("Descripcion_anuncio:"+Descripcion_anuncio);
                if (i==1) {
                    consulta  += " AND ";
                    i--;	
                }
                consulta  += "Descripcion_anuncio LIKE '%"+Descripcion_anuncio.replace(/'/g, "")+"%'";
                i++;
            }
            if(Id_anuncio != 'NULL'){
                console.log("Id_anuncio:"+Id_anuncio);
                if (i==1) {
                    consulta  += " AND ";
                    i--;	
                }
                consulta  += "Id_anuncio="+Id_anuncio;
                i++;
            }
            if(Id_mascota_anuncio != 'NULL'){
                console.log("Id_mascota_anuncio:"+Id_mascota_anuncio);
                if (i==1) {
                    consulta  += " AND ";
                    i--;	
                }
                consulta  += "Id_mascota_anuncio="+Id_mascota_anuncio;
                i++;
            }
            if(Id_usuario_anuncio != 'NULL'){
                console.log("Id_usuario_anuncio:"+Id_usuario_anuncio);
                if (i==1) {
                    consulta  += " AND ";
                    i--;	
                }
                consulta  += "Id_usuario_anuncio="+Id_usuario_anuncio;
                i++;
            }
            if(Fechamin != 'NULL'){
                console.log("Fechamin:"+Fechamin);
                if (i==1) {
                    consulta  += " AND ";
                    i--;	
                }
                consulta  += "Fecha_anuncio>="+Fechamin;
                i++;
            }
            if(Fechamax != 'NULL'){
                console.log("Fechamax:"+Fechamax);
                if (i==1) {
                    consulta  += " AND ";
                    i--;	
                }
                consulta  += "Fecha_anuncio<="+Fechamax;
                i++;
            }
            if(Fecha != 'NULL'){
                console.log("Fecha:"+Fecha);
                if (i==1) {
                    consulta  += " AND ";
                    i--;	
                }
                consulta  += "Fecha_anuncio="+Fecha;
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
					console.log("Devuelvo los anuncios");
					data["Anuncio"] = rows;
					return res.status(200).json(data);
				}else{
					console.log("No hay anuncios...");
					data["Anuncio"] = "No hay anuncios";
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
		var Id_mascota_anuncio = connection.escape(req.body.id_mascota_anuncio);
        var Id_usuario_anuncio = connection.escape(req.body.id_usuario_anuncio);
        var Fecha_anuncio = connection.escape(req.body.fecha_anuncio);        
        var Horario_anuncio = connection.escape(req.body.horario_anuncio);        
        var Titulo_anuncio = connection.escape(req.body.titulo_anuncio);
		var Descripcion_anuncio = connection.escape(req.body.descripcion_anuncio);
		var data = {
			"Anuncio":""
		};
		var consulta = "INSERT INTO anuncio (";
		var i=0;
        if(Id_mascota_anuncio != 'NULL'){
			if (i==1) {
				consulta  += ", ";
				i--;	
			}
			consulta  += "Id_mascota_anuncio";
			i++;
		}
		if(Id_usuario_anuncio != 'NULL'){
			if (i==1) {
				consulta  += ", ";
				i--;	
			}
			consulta  += "Id_usuario_anuncio";
			i++;
		}
		if(Fecha_anuncio != 'NULL'){
			if (i==1) {
				consulta  += ", ";
				i--;	
			}
			consulta  += "Fecha_anuncio";
			i++;
		}
        if(Horario_anuncio != 'NULL'){
			if (i==1) {
				consulta  += ", ";
				i--;	
			}
			consulta  += "Horario_anuncio";
			i++;
		}
		if(Titulo_anuncio != 'NULL'){
			if (i==1) {
				consulta  += ", ";
				i--;	
			}
			consulta  += "Titulo_anuncio";
			i++;
		}
		if(Descripcion_anuncio != 'NULL'){
			if (i==1) {
				consulta  += ", ";
				i--;	
			}
			consulta  += "Descripcion_anuncio";
			i++;
		}
		console.log("CONSULTA 1 es"+consulta);
		consulta=consulta+") VALUES (";
		i=0;
		if(Id_mascota_anuncio != 'NULL'){
			if (i==1) {
				consulta  += " , ";
				i--;	
			}
			consulta  += Id_mascota_anuncio;
			i++;
		}
        if(Id_usuario_anuncio != 'NULL'){
			if (i==1) {
				consulta  += " , ";
				i--;	
			}
			consulta  += Id_usuario_anuncio;
			i++;
		}
		if(Fecha_anuncio != 'NULL'){
			if (i==1) {
				consulta  += " , ";
				i--;	
			}
			consulta  += Fecha_anuncio;
			i++;
		}
        if(Horario_anuncio != 'NULL'){
			if (i==1) {
				consulta  += " , ";
				i--;	
			}
			consulta  += Horario_anuncio;
			i++;
		}
		if(Titulo_anuncio != 'NULL'){
			if (i==1) {
				consulta  += " , ";
				i--;	
			}
			consulta  += Titulo_anuncio;
			i++;
		}
		if(Descripcion_anuncio != 'NULL'){
			if (i==1) {
				consulta  += " , ";
				i--;	
			}
			consulta  += Descripcion_anuncio;
			i++;
		}
		consulta+=")";
		console.log(consulta);
		connection.query(consulta,function(err, rows, fields){
			if(err){
				console.log(err);
                return res.status(400).json({ error: err });
			}else{
				data["Anuncio"] = "Datos insertados correctamente!";
				return res.status(200).json(data);
			}
		});
	connection.release();
	});
});
module.exports = router;