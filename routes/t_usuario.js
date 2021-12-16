var express = require('express');
var router = express.Router();
var db = require('../helpers/database')();
router.get("/", function(req, res) {
    db.getConnection(function(err, connection) {
        if (err) throw err;

        var ID_Usuario = connection.escape(req.query.ID_Usuario)
        var Email = connection.escape(req.query.Email)
        var Nombre = connection.escape(req.query.Nombre)
        var Password = connection.escape(req.query.Password)
        var EsFacebook = connection.escape(req.query.EsFacebook)
        var EsGoogle = connection.escape(req.query.EsGoogle)
        var EsMail = connection.escape(req.query.EsMail)
        var Activo = connection.escape(req.query.Activo)
        var Id_Rol = connection.escape(req.query.Id_Rol)
        var DNI = connection.escape(req.query.DNI)
        var Direccion = connection.escape(req.query.Direccion)
        var Id_MetodoPago = connection.escape(req.query.Id_MetodoPago)
        var Strikes = connection.escape(req.query.Strikes)
        var Banned = connection.escape(req.query.Banned)
        var N_Post = connection.escape(req.query.N_Post)
        var Usuario = connection.escape(req.query.Usuario)
        var primero = true;
        var consulta = "SELECT * FROM t_usuario";
        if (ID_Usuario != 'NULL') {
            if (primero == false) { consulta = consulta + " AND "; } else {
                primero = false;
                consulta = consulta + " WHERE ";
            }
            consulta = consulta + "ID_Usuario	" + "=" + ID_Usuario;
        }
        if (Email != 'NULL') {
            if (primero == false) { consulta = consulta + " AND "; } else {
                primero = false;
                consulta = consulta + " WHERE ";
            }
            consulta = consulta + "Email	" + "=" + Email;
        }
        if (Nombre != 'NULL') {
            if (primero == false) { consulta = consulta + " AND "; } else {
                primero = false;
                consulta = consulta + " WHERE ";
            }
            consulta = consulta + "Nombre	" + "=" + Nombre;
        }
        if (Password != 'NULL') {
            if (primero == false) { consulta = consulta + " AND "; } else {
                primero = false;
                consulta = consulta + " WHERE ";
            }
            consulta = consulta + "Password	" + "=" + Password;
        }
        if (EsFacebook != 'NULL') {
            if (primero == false) { consulta = consulta + " AND "; } else {
                primero = false;
                consulta = consulta + " WHERE ";
            }
            consulta = consulta + "EsFacebook	" + "=" + EsFacebook;
        }
        if (EsGoogle != 'NULL') {
            if (primero == false) { consulta = consulta + " AND "; } else {
                primero = false;
                consulta = consulta + " WHERE ";
            }
            consulta = consulta + "EsGoogle	" + "=" + EsGoogle;
        }
        if (EsMail != 'NULL') {
            if (primero == false) { consulta = consulta + " AND "; } else {
                primero = false;
                consulta = consulta + " WHERE ";
            }
            consulta = consulta + "EsMail	" + "=" + EsMail;
        }
        if (Activo != 'NULL') {
            if (primero == false) { consulta = consulta + " AND "; } else {
                primero = false;
                consulta = consulta + " WHERE ";
            }
            consulta = consulta + "Activo	" + "=" + Activo;
        }
        if (Id_Rol != 'NULL') {
            if (primero == false) { consulta = consulta + " AND "; } else {
                primero = false;
                consulta = consulta + " WHERE ";
            }
            consulta = consulta + "Id_Rol	" + "=" + Id_Rol;
        }
        if (DNI != 'NULL') {
            if (primero == false) { consulta = consulta + " AND "; } else {
                primero = false;
                consulta = consulta + " WHERE ";
            }
            consulta = consulta + "DNI	" + "=" + DNI;
        }
        if (Direccion != 'NULL') {
            if (primero == false) { consulta = consulta + " AND "; } else {
                primero = false;
                consulta = consulta + " WHERE ";
            }
            consulta = consulta + "Direccion	" + "=" + Direccion;
        }
        if (Id_MetodoPago != 'NULL') {
            if (primero == false) { consulta = consulta + " AND "; } else {
                primero = false;
                consulta = consulta + " WHERE ";
            }
            consulta = consulta + "Id_MetodoPago	" + "=" + Id_MetodoPago;
        }
        if (Strikes != 'NULL') {
            if (primero == false) { consulta = consulta + " AND "; } else {
                primero = false;
                consulta = consulta + " WHERE ";
            }
            consulta = consulta + "Strikes	" + "=" + Strikes;
        }
        if (Banned != 'NULL') {
            if (primero == false) { consulta = consulta + " AND "; } else {
                primero = false;
                consulta = consulta + " WHERE ";
            }
            consulta = consulta + "Banned	" + "=" + Banned;
        }
        if (N_Post != 'NULL') {
            if (primero == false) { consulta = consulta + " AND "; } else {
                primero = false;
                consulta = consulta + " WHERE ";
            }
            consulta = consulta + "N_Post	" + "=" + N_Post;
        }
        if (Usuario != 'NULL') {
            if (primero == false) { consulta = consulta + " AND "; } else {
                primero = false;
                consulta = consulta + " WHERE ";
            }
            consulta = consulta + "Usuario	" + "=" + Usuario;
        }



        console.log(consulta);
        //console.log("Consulta: "+consulta);
        connection.query(consulta, function(err, rows, fields) {
            //console.log(rows);
            if (rows.length != 0) {
                data = rows;
                res.status(200);
            } else {
                data = 'usuarios no encontrados'
                res.status(204);
            }
            res.json(data);
        });
        connection.release();
    });
});

router.put("/updateusuario", function(req, res) {
    db.getConnection(function(err, connection) {
        if (err) throw err;
        var ID_Usuario = connection.escape(req.body.ID_Usuario)
        var Email = connection.escape(req.body.Email)
        var Nombre = connection.escape(req.body.Nombre)
        var Password = connection.escape(req.body.Password)
        var EsFacebook = connection.escape(req.body.EsFacebook)
        var EsGoogle = connection.escape(req.body.EsGoogle)
        var EsMail = connection.escape(req.body.EsMail)
        var Activo = connection.escape(req.body.Activo)
        var Id_Rol = connection.escape(req.body.Id_Rol)
        var DNI = connection.escape(req.body.DNI)
        var Direccion = connection.escape(req.body.Direccion)
        var Id_MetodoPago = connection.escape(req.body.Id_MetodoPago)
        var Strikes = connection.escape(req.body.Strikes)
        var Banned = connection.escape(req.body.Banned)
        var N_Post = connection.escape(req.body.N_Post)
        var Usuario = connection.escape(req.body.Usuario)
        var primero = true;
        var consulta = "UPDATE `t_usuario` SET ";
        if (ID_Usuario != 'NULL') {
            if (Email != 'NULL') {
                if (primero == false) { consulta = consulta + ","; } else { primero = false; }
                consulta = consulta + "Email=";
                consulta = consulta + Email;
            }
            if (Nombre != 'NULL') {
                if (primero == false) { consulta = consulta + ","; } else { primero = false; }
                consulta = consulta + "Nombre=";
                consulta = consulta + Nombre;
            }
            if (Password != 'NULL') {
                if (primero == false) { consulta = consulta + ","; } else { primero = false; }
                consulta = consulta + "Password=";
                consulta = consulta + Password;
            }
            if (EsFacebook != 'NULL') {
                if (primero == false) { consulta = consulta + ","; } else { primero = false; }
                consulta = consulta + "EsFacebook=";
                consulta = consulta + EsFacebook;
            }
            if (EsGoogle != 'NULL') {
                if (primero == false) { consulta = consulta + ","; } else { primero = false; }
                consulta = consulta + "EsGoogle=";
                consulta = consulta + EsGoogle;
            }
            if (EsMail != 'NULL') {
                if (primero == false) { consulta = consulta + ","; } else { primero = false; }
                consulta = consulta + "EsMail=";
                consulta = consulta + EsMail;
            }
            if (Activo != 'NULL') {
                if (primero == false) { consulta = consulta + ","; } else { primero = false; }
                consulta = consulta + "Activo=";
                consulta = consulta + Activo;
            }
            if (Id_Rol != 'NULL') {
                if (primero == false) { consulta = consulta + ","; } else { primero = false; }
                consulta = consulta + "Id_Rol=";
                consulta = consulta + Id_Rol;
            }
            if (DNI != 'NULL') {
                if (primero == false) { consulta = consulta + ","; } else { primero = false; }
                consulta = consulta + "DNI=";
                consulta = consulta + DNI;
            }
            if (Direccion != 'NULL') {
                if (primero == false) { consulta = consulta + ","; } else { primero = false; }
                consulta = consulta + "Direccion=";
                consulta = consulta + Direccion;
            }
            if (Id_MetodoPago != 'NULL') {
                if (primero == false) { consulta = consulta + ","; } else { primero = false; }
                consulta = consulta + "Id_MetodoPago=";
                consulta = consulta + Id_MetodoPago;
            }
            if (Strikes != 'NULL') {
                if (primero == false) { consulta = consulta + ","; } else { primero = false; }
                consulta = consulta + "Strikes=";
                consulta = consulta + Strikes;
            }
            if (Banned != 'NULL') {
                if (primero == false) { consulta = consulta + ","; } else { primero = false; }
                consulta = consulta + "Banned=";
                consulta = consulta + Banned;
            }
            if (N_Post != 'NULL') {
                if (primero == false) { consulta = consulta + ","; } else { primero = false; }
                consulta = consulta + "N_Post=";
                consulta = consulta + N_Post;
            }
            if (Usuario != 'NULL') {
                if (primero == false) { consulta = consulta + ","; } else { primero = false; }
                consulta = consulta + "Usuario=";
                consulta = consulta + Usuario;
            }
            consulta = consulta + " WHERE ID_Usuario=" + ID_Usuario;
        }

        console.log(consulta);
        connection.query(consulta, function(err, rows, fields) {
            if (err) {
                return res.status(400).json("Error al actualizar el usuario");
            } else {
                return res.status(200).json("Usuario actualizado"); //lo enviamos
            }
            res.json(data);
        });
        connection.release();
    });
});


router.post("/subeusuario", function(req, res) {
    db.getConnection(function(err, connection) {
        if (err) throw err;
        var ID_Usuario = connection.escape(req.body.ID_Usuario)
        var Email = connection.escape(req.body.Email)
        var Nombre = connection.escape(req.body.Nombre)
        var Password = connection.escape(req.body.Password)
        var EsFacebook = connection.escape(req.body.EsFacebook)
        var EsGoogle = connection.escape(req.body.EsGoogle)
        var EsMail = connection.escape(req.body.EsMail)
        var Activo = connection.escape(req.body.Activo)
        var Id_Rol = connection.escape(req.body.Id_Rol)
        var DNI = connection.escape(req.body.DNI)
        var Direccion = connection.escape(req.body.Direccion)
        var Id_MetodoPago = connection.escape(req.body.Id_MetodoPago)
        var Strikes = connection.escape(req.body.Strikes)
        var Banned = connection.escape(req.body.Banned)
        var N_Post = connection.escape(req.body.N_Post)
        var Usuario = connection.escape(req.body.Usuario)
        var primero = true;
        var consulta = "INSERT INTO `t_usuario`(";
        if (ID_Usuario != 'NULL') {
            if (primero == false) { consulta = consulta + ","; } else { primero = false; }
            consulta = consulta + "ID_Usuario";
        }
        if (Email != 'NULL') {
            if (primero == false) { consulta = consulta + ","; } else { primero = false; }
            consulta = consulta + "Email";
        }
        if (Nombre != 'NULL') {
            if (primero == false) { consulta = consulta + ","; } else { primero = false; }
            consulta = consulta + "Nombre";
        }
        if (Password != 'NULL') {
            if (primero == false) { consulta = consulta + ","; } else { primero = false; }
            consulta = consulta + "Password";
        }
        if (EsFacebook != 'NULL') {
            if (primero == false) { consulta = consulta + ","; } else { primero = false; }
            consulta = consulta + "EsFacebook";
        }
        if (EsGoogle != 'NULL') {
            if (primero == false) { consulta = consulta + ","; } else { primero = false; }
            consulta = consulta + "EsGoogle";
        }
        if (EsMail != 'NULL') {
            if (primero == false) { consulta = consulta + ","; } else { primero = false; }
            consulta = consulta + "EsMail";
        }
        if (Activo != 'NULL') {
            if (primero == false) { consulta = consulta + ","; } else { primero = false; }
            consulta = consulta + "Activo";
        }
        if (Id_Rol != 'NULL') {
            if (primero == false) { consulta = consulta + ","; } else { primero = false; }
            consulta = consulta + "Id_Rol";
        }
        if (DNI != 'NULL') {
            if (primero == false) { consulta = consulta + ","; } else { primero = false; }
            consulta = consulta + "DNI";
        }
        if (Direccion != 'NULL') {
            if (primero == false) { consulta = consulta + ","; } else { primero = false; }
            consulta = consulta + "Direccion";
        }
        if (Id_MetodoPago != 'NULL') {
            if (primero == false) { consulta = consulta + ","; } else { primero = false; }
            consulta = consulta + "Id_MetodoPago";
        }
        if (Strikes != 'NULL') {
            if (primero == false) { consulta = consulta + ","; } else { primero = false; }
            consulta = consulta + "Strikes";
        }
        if (Banned != 'NULL') {
            if (primero == false) { consulta = consulta + ","; } else { primero = false; }
            consulta = consulta + "Banned";
        }
        if (N_Post != 'NULL') {
            if (primero == false) { consulta = consulta + ","; } else { primero = false; }
            consulta = consulta + "N_Post";
        }
        if (Usuario != 'NULL') {
            if (primero == false) { consulta = consulta + ","; } else { primero = false; }
            consulta = consulta + "Usuario";
        }
        consulta = consulta + ")VALUES(";
        primero = true;
        if (ID_Usuario != 'NULL') {
            if (primero == false) { consulta = consulta + ","; } else { primero = false; }
            consulta = consulta + ID_Usuario;
        }
        if (Email != 'NULL') {
            if (primero == false) { consulta = consulta + ","; } else { primero = false; }
            consulta = consulta + Email;
        }
        if (Nombre != 'NULL') {
            if (primero == false) { consulta = consulta + ","; } else { primero = false; }
            consulta = consulta + Nombre;
        }
        if (Password != 'NULL') {
            if (primero == false) { consulta = consulta + ","; } else { primero = false; }
            consulta = consulta + Password;
        }
        if (EsFacebook != 'NULL') {
            if (primero == false) { consulta = consulta + ","; } else { primero = false; }
            consulta = consulta + EsFacebook;
        }
        if (EsGoogle != 'NULL') {
            if (primero == false) { consulta = consulta + ","; } else { primero = false; }
            consulta = consulta + EsGoogle;
        }
        if (EsMail != 'NULL') {
            if (primero == false) { consulta = consulta + ","; } else { primero = false; }
            consulta = consulta + EsMail;
        }
        if (Activo != 'NULL') {
            if (primero == false) { consulta = consulta + ","; } else { primero = false; }
            consulta = consulta + Activo;
        }
        if (Id_Rol != 'NULL') {
            if (primero == false) { consulta = consulta + ","; } else { primero = false; }
            consulta = consulta + Id_Rol;
        }
        if (DNI != 'NULL') {
            if (primero == false) { consulta = consulta + ","; } else { primero = false; }
            consulta = consulta + DNI;
        }
        if (Direccion != 'NULL') {
            if (primero == false) { consulta = consulta + ","; } else { primero = false; }
            consulta = consulta + Direccion;
        }
        if (Id_MetodoPago != 'NULL') {
            if (primero == false) { consulta = consulta + ","; } else { primero = false; }
            consulta = consulta + Id_MetodoPago;
        }
        if (Strikes != 'NULL') {
            if (primero == false) { consulta = consulta + ","; } else { primero = false; }
            consulta = consulta + Strikes;
        }
        if (Banned != 'NULL') {
            if (primero == false) { consulta = consulta + ","; } else { primero = false; }
            consulta = consulta + Banned;
        }
        if (N_Post != 'NULL') {
            if (primero == false) { consulta = consulta + ","; } else { primero = false; }
            consulta = consulta + N_Post;
        }
        if (Usuario != 'NULL') {
            if (primero == false) { consulta = consulta + ","; } else { primero = false; }
            consulta = consulta + Usuario;
        }
        consulta = consulta + ")";


        console.log(consulta);
        connection.query(consulta, function(err, rows, fields) {
            if (err) {
                return res.status(400).json("Error al insertar el usuario");
            } else {
                return res.status(200).json("Usuario creado"); //lo enviamos
            }
            res.json(data);
        });
        connection.release();
    });
});

module.exports = router;