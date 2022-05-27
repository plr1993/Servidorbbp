var express = require('express');
var router = express.Router();
var db = require('../helpers/database')();
var comprobacionjwt = require('../helpers/comprobacionjwt');
//Get de locales todos o por id
router.get('/', comprobacionjwt, function(req, res) {
    var https = require('follow-redirects').https;
    var fs = require('fs');

    var options = {
    'method': 'GET',
    'hostname': 'fortnite-api.com',
    'path': '/v2/stats/br/v2?name=EcoslavTwitch&image=keyboardMouse',
    'headers': {
        'Authorization': 'b6b08a09-6d58-4e1c-9d90-74f3e0cdf718'
    },
    'maxRedirects': 20
    };

    var req = https.request(options, function (res) {
        var chunks = [];

        res.on("data", function (chunk) {
            chunks.push(chunk);
        });

        res.on("end", function (chunk) {
            var body = Buffer.concat(chunks);
            return body.toString();
        });

        res.on("error", function (error) {
            console.error(error);
        });
    });

    req.end();
});

router.post("/subechollo", function(req, res, next) {
    db.getConnection(function(err, connection) {
        if (err) throw err;

        var ID_Chollo = connection.escape(req.body.ID_Chollo)
        var Titulo = connection.escape(req.body.Titulo)
        var Descripcion = connection.escape(req.body.Descripcion)
        var Precio_Oferta = connection.escape(req.body.Precio_Oferta)
        var Precio_Original = connection.escape(req.body.Precio_Original)
        var URL_Img = connection.escape(req.body.URL_Img)
        var URL_Original = connection.escape(req.body.URL_Original)
        var URL_Afiliado = connection.escape(req.body.URL_Afiliado)
        var Likes = connection.escape(req.body.Likes)
        var Reportes = connection.escape(req.body.Reportes)
        var Activo = connection.escape(req.body.Activo)
        var Banned = connection.escape(req.body.Banned)
        var Fecha_Inicio = connection.escape(req.body.Fecha_Inicio)
        var Fecha_Fin = connection.escape(req.body.Fecha_Fin)
        var ID_Tienda = connection.escape(req.body.ID_Tienda)
        var ID_País = connection.escape(req.body.ID_País)
        var ID_Categoria_1 = connection.escape(req.body.ID_Categoria_1)
        var ID_Categoria_2 = connection.escape(req.body.ID_Categoria_2)
        var ID_Categoria_3 = connection.escape(req.body.ID_Categoria_3)
        var ID_Categoria_4 = connection.escape(req.body.ID_Categoria_4)
        var ID_Categoria_5 = connection.escape(req.body.ID_Categoria_5)
        var ID_Categoria_6 = connection.escape(req.body.ID_Categoria_6)
        var Fecha_Publicacion = connection.escape(req.body.Fecha_Publicacion)
        var ID_Marca = connection.escape(req.body.ID_Marca)
        var Cupon = connection.escape(req.body.Cupon)
        console.log("El valor de ID_Chollo=" + ID_Chollo);
        console.log("El valor de Titulo=" + Titulo);
        console.log("El valor de Descripcion=" + Descripcion);
        console.log("El valor de Precio_Oferta=" + Precio_Oferta);
        console.log("El valor de Precio_Original=" + Precio_Original);
        console.log("El valor de URL_Img=" + URL_Img);
        console.log("El valor de URL_Original=" + URL_Original);
        console.log("El valor de URL_Afiliado=" + URL_Afiliado);
        console.log("El valor de Likes=" + Likes);
        console.log("El valor de Reportes=" + Reportes);
        console.log("El valor de Activo=" + Activo);
        console.log("El valor de Banned=" + Banned);
        console.log("El valor de Fecha_Inicio=" + Fecha_Inicio);
        console.log("El valor de Fecha_Fin=" + Fecha_Fin);
        console.log("El valor de ID_Tienda=" + ID_Tienda);
        console.log("El valor de ID_País=" + ID_País);
        console.log("El valor de ID_Categoria_1=" + ID_Categoria_1);
        console.log("El valor de ID_Categoria_2=" + ID_Categoria_2);
        console.log("El valor de ID_Categoria_3=" + ID_Categoria_3);
        console.log("El valor de ID_Categoria_4=" + ID_Categoria_4);
        console.log("El valor de ID_Categoria_5=" + ID_Categoria_5);
        console.log("El valor de ID_Categoria_6=" + ID_Categoria_6);
        console.log("El valor de Fecha_Publicacion=" + Fecha_Publicacion);
        console.log("El valor de ID_Marca=" + ID_Marca);
        console.log("El valor de Cupon=" + Cupon);

        var primero = true;
        var consulta = "INSERT INTO `t_chollo`(";
        if (ID_Chollo != 'NULL') { if (primero == false) { consulta = consulta + ","; } else { primero = false; }
            consulta = consulta + "`ID_Chollo`"; }
        if (Titulo != 'NULL') { if (primero == false) { consulta = consulta + ","; } else { primero = false; }
            consulta = consulta + "`Titulo`"; }
        if (Descripcion != 'NULL') { if (primero == false) { consulta = consulta + ","; } else { primero = false; }
            consulta = consulta + "`Descripcion`"; }
        if (Precio_Oferta != 'NULL') { if (primero == false) { consulta = consulta + ","; } else { primero = false; }
            consulta = consulta + "`Precio_Oferta`"; }
        if (Precio_Original != 'NULL') { if (primero == false) { consulta = consulta + ","; } else { primero = false; }
            consulta = consulta + "`Precio_Original`"; }
        if (URL_Img != 'NULL') { if (primero == false) { consulta = consulta + ","; } else { primero = false; }
            consulta = consulta + "`URL_Img`"; }
        if (URL_Original != 'NULL') { if (primero == false) { consulta = consulta + ","; } else { primero = false; }
            consulta = consulta + "`URL_Original`"; }
        if (URL_Afiliado != 'NULL') { if (primero == false) { consulta = consulta + ","; } else { primero = false; }
            consulta = consulta + "`URL_Afiliado`"; }
        if (Likes != 'NULL') { if (primero == false) { consulta = consulta + ","; } else { primero = false; }
            consulta = consulta + "`Likes`"; }
        if (Reportes != 'NULL') { if (primero == false) { consulta = consulta + ","; } else { primero = false; }
            consulta = consulta + "`Reportes`"; }
        if (Activo != 'NULL') { if (primero == false) { consulta = consulta + ","; } else { primero = false; }
            consulta = consulta + "`Activo`"; }
        if (Banned != 'NULL') { if (primero == false) { consulta = consulta + ","; } else { primero = false; }
            consulta = consulta + "`Banned`"; }
        if (Fecha_Inicio != 'NULL') { if (primero == false) { consulta = consulta + ","; } else { primero = false; }
            consulta = consulta + "`Fecha_Inicio`"; }
        if (Fecha_Fin != 'NULL') { if (primero == false) { consulta = consulta + ","; } else { primero = false; }
            consulta = consulta + "`Fecha_Fin`"; }
        if (ID_Tienda != 'NULL') { if (primero == false) { consulta = consulta + ","; } else { primero = false; }
            consulta = consulta + "`ID_Tienda`"; }
        if (ID_País != 'NULL') { if (primero == false) { consulta = consulta + ","; } else { primero = false; }
            consulta = consulta + "`ID_País`"; }
        if (ID_Categoria_1 != 'NULL') { if (primero == false) { consulta = consulta + ","; } else { primero = false; }
            consulta = consulta + "`ID_Categoria_1`"; }
        if (ID_Categoria_2 != 'NULL') { if (primero == false) { consulta = consulta + ","; } else { primero = false; }
            consulta = consulta + "`ID_Categoria_2`"; }
        if (ID_Categoria_3 != 'NULL') { if (primero == false) { consulta = consulta + ","; } else { primero = false; }
            consulta = consulta + "`ID_Categoria_3`"; }
        if (ID_Categoria_4 != 'NULL') { if (primero == false) { consulta = consulta + ","; } else { primero = false; }
            consulta = consulta + "`ID_Categoria_4`"; }
        if (ID_Categoria_5 != 'NULL') { if (primero == false) { consulta = consulta + ","; } else { primero = false; }
            consulta = consulta + "`ID_Categoria_5`"; }
        if (ID_Categoria_6 != 'NULL') { if (primero == false) { consulta = consulta + ","; } else { primero = false; }
            consulta = consulta + "`ID_Categoria_6`"; }
        if (Fecha_Publicacion != 'NULL') { if (primero == false) { consulta = consulta + ","; } else { primero = false; }
            consulta = consulta + "`Fecha_Publicacion`"; }
        if (ID_Marca != 'NULL') { if (primero == false) { consulta = consulta + ","; } else { primero = false; }
            consulta = consulta + "`ID_Marca`"; }
        if (Cupon != 'NULL') { if (primero == false) { consulta = consulta + ","; } else { primero = false; }
            consulta = consulta + "`Cupon`"; }
        consulta = consulta + ")VALUES(";
        primero = true;
        console.log(primero);
        if (ID_Chollo != 'NULL') { if (primero == false) { consulta = consulta + ","; } else { primero = false; }
            consulta = consulta + ID_Chollo; }
        if (Titulo != 'NULL') { if (primero == false) { consulta = consulta + ","; } else { primero = false; }
            consulta = consulta + Titulo; }
        if (Descripcion != 'NULL') { if (primero == false) { consulta = consulta + ","; } else { primero = false; }
            consulta = consulta + Descripcion; }
        if (Precio_Oferta != 'NULL') { if (primero == false) { consulta = consulta + ","; } else { primero = false; }
            consulta = consulta + Precio_Oferta; }
        if (Precio_Original != 'NULL') { if (primero == false) { consulta = consulta + ","; } else { primero = false; }
            consulta = consulta + Precio_Original; }
        if (URL_Img != 'NULL') { if (primero == false) { consulta = consulta + ","; } else { primero = false; }
            consulta = consulta + URL_Img; }
        if (URL_Original != 'NULL') { if (primero == false) { consulta = consulta + ","; } else { primero = false; }
            consulta = consulta + URL_Original; }
        if (URL_Afiliado != 'NULL') { if (primero == false) { consulta = consulta + ","; } else { primero = false; }
            consulta = consulta + URL_Afiliado; }
        if (Likes != 'NULL') { if (primero == false) { consulta = consulta + ","; } else { primero = false; }
            consulta = consulta + Likes; }
        if (Reportes != 'NULL') { if (primero == false) { consulta = consulta + ","; } else { primero = false; }
            consulta = consulta + Reportes; }
        if (Activo != 'NULL') { if (primero == false) { consulta = consulta + ","; } else { primero = false; }
            consulta = consulta + Activo; }
        if (Banned != 'NULL') { if (primero == false) { consulta = consulta + ","; } else { primero = false; }
            consulta = consulta + Banned; }
        if (Fecha_Inicio != 'NULL') { if (primero == false) { consulta = consulta + ","; } else { primero = false; }
            consulta = consulta + Fecha_Inicio; }
        if (Fecha_Fin != 'NULL') { if (primero == false) { consulta = consulta + ","; } else { primero = false; }
            consulta = consulta + Fecha_Fin; }
        if (ID_Tienda != 'NULL') { if (primero == false) { consulta = consulta + ","; } else { primero = false; }
            consulta = consulta + ID_Tienda; }
        if (ID_País != 'NULL') { if (primero == false) { consulta = consulta + ","; } else { primero = false; }
            consulta = consulta + ID_País; }
        if (ID_Categoria_1 != 'NULL') { if (primero == false) { consulta = consulta + ","; } else { primero = false; }
            consulta = consulta + ID_Categoria_1; }
        if (ID_Categoria_2 != 'NULL') { if (primero == false) { consulta = consulta + ","; } else { primero = false; }
            consulta = consulta + ID_Categoria_2; }
        if (ID_Categoria_3 != 'NULL') { if (primero == false) { consulta = consulta + ","; } else { primero = false; }
            consulta = consulta + ID_Categoria_3; }
        if (ID_Categoria_4 != 'NULL') { if (primero == false) { consulta = consulta + ","; } else { primero = false; }
            consulta = consulta + ID_Categoria_4; }
        if (ID_Categoria_5 != 'NULL') { if (primero == false) { consulta = consulta + ","; } else { primero = false; }
            consulta = consulta + ID_Categoria_5; }
        if (ID_Categoria_6 != 'NULL') { if (primero == false) { consulta = consulta + ","; } else { primero = false; }
            consulta = consulta + ID_Categoria_6; }
        if (Fecha_Publicacion != 'NULL') { if (primero == false) { consulta = consulta + ","; } else { primero = false; }
            consulta = consulta + Fecha_Publicacion; }
        if (ID_Marca != 'NULL') { if (primero == false) { consulta = consulta + ","; } else { primero = false; }
            consulta = consulta + ID_Marca; }
        if (Cupon != 'NULL') { if (primero == false) { consulta = consulta + ","; } else { primero = false; }
            consulta = consulta + Cupon; }
        consulta = consulta + ")";
        //console.log(consulta);																												
        connection.query(consulta, function(err, rows, fields) {
            if (err) {
                return res.status(400).json("Error al insertar el chollo");
            } else {
                return res.status(200).json("Chollo enviado"); //lo enviamos
            }
            res.json(data);
        });
        connection.release();
    });
});

router.put("/updatechollo", function(req, res, next) {
    db.getConnection(function(err, connection) {
        if (err) throw err;

        var ID_Chollo = connection.escape(req.body.ID_Chollo)
        var Titulo = connection.escape(req.body.Titulo)
        var Descripcion = connection.escape(req.body.Descripcion)
        var Precio_Oferta = connection.escape(req.body.Precio_Oferta)
        var Precio_Original = connection.escape(req.body.Precio_Original)
        var URL_Img = connection.escape(req.body.URL_Img)
        var URL_Original = connection.escape(req.body.URL_Original)
        var URL_Afiliado = connection.escape(req.body.URL_Afiliado)
        var Likes = connection.escape(req.body.Likes)
        var Reportes = connection.escape(req.body.Reportes)
        var Activo = connection.escape(req.body.Activo)
        var Banned = connection.escape(req.body.Banned)
        var Fecha_Inicio = connection.escape(req.body.Fecha_Inicio)
        var Fecha_Fin = connection.escape(req.body.Fecha_Fin)
        var ID_Tienda = connection.escape(req.body.ID_Tienda)
        var ID_País = connection.escape(req.body.ID_País)
        var ID_Categoria_1 = connection.escape(req.body.ID_Categoria_1)
        var ID_Categoria_2 = connection.escape(req.body.ID_Categoria_2)
        var ID_Categoria_3 = connection.escape(req.body.ID_Categoria_3)
        var ID_Categoria_4 = connection.escape(req.body.ID_Categoria_4)
        var ID_Categoria_5 = connection.escape(req.body.ID_Categoria_5)
        var ID_Categoria_6 = connection.escape(req.body.ID_Categoria_6)
        var Fecha_Publicacion = connection.escape(req.body.Fecha_Publicacion)
        var ID_Marca = connection.escape(req.body.ID_Marca)
        var Cupon = connection.escape(req.body.Cupon)
        console.log("El valor de ID_Chollo=" + ID_Chollo);
        console.log("El valor de Titulo=" + Titulo);
        console.log("El valor de Descripcion=" + Descripcion);
        console.log("El valor de Precio_Oferta=" + Precio_Oferta);
        console.log("El valor de Precio_Original=" + Precio_Original);
        console.log("El valor de URL_Img=" + URL_Img);
        console.log("El valor de URL_Original=" + URL_Original);
        console.log("El valor de URL_Afiliado=" + URL_Afiliado);
        console.log("El valor de Likes=" + Likes);
        console.log("El valor de Reportes=" + Reportes);
        console.log("El valor de Activo=" + Activo);
        console.log("El valor de Banned=" + Banned);
        console.log("El valor de Fecha_Inicio=" + Fecha_Inicio);
        console.log("El valor de Fecha_Fin=" + Fecha_Fin);
        console.log("El valor de ID_Tienda=" + ID_Tienda);
        console.log("El valor de ID_País=" + ID_País);
        console.log("El valor de ID_Categoria_1=" + ID_Categoria_1);
        console.log("El valor de ID_Categoria_2=" + ID_Categoria_2);
        console.log("El valor de ID_Categoria_3=" + ID_Categoria_3);
        console.log("El valor de ID_Categoria_4=" + ID_Categoria_4);
        console.log("El valor de ID_Categoria_5=" + ID_Categoria_5);
        console.log("El valor de ID_Categoria_6=" + ID_Categoria_6);
        console.log("El valor de Fecha_Publicacion=" + Fecha_Publicacion);
        console.log("El valor de ID_Marca=" + ID_Marca);
        console.log("El valor de Cupon=" + Cupon);
        var primero = true;
        var consulta = "UPDATE `t_chollo` SET ";
        if (ID_Chollo != 'NULL') {
            if (Titulo != 'NULL') { if (primero == false) { consulta = consulta + ","; } else { primero = false; }
                consulta = consulta + "`Titulo`=";
                consulta = consulta + Titulo; }
            if (Descripcion != 'NULL') { if (primero == false) { consulta = consulta + ","; } else { primero = false; }
                consulta = consulta + "`Descripcion`=";
                consulta = consulta + Descripcion; }
            if (Precio_Oferta != 'NULL') { if (primero == false) { consulta = consulta + ","; } else { primero = false; }
                consulta = consulta + "`Precio_Oferta`=";
                consulta = consulta + Precio_Oferta; }
            if (Precio_Original != 'NULL') { if (primero == false) { consulta = consulta + ","; } else { primero = false; }
                consulta = consulta + "`Precio_Original`=";
                consulta = consulta + Precio_Original; }
            if (URL_Img != 'NULL') { if (primero == false) { consulta = consulta + ","; } else { primero = false; }
                consulta = consulta + "`URL_Img`=";
                consulta = consulta + URL_Img; }
            if (URL_Original != 'NULL') { if (primero == false) { consulta = consulta + ","; } else { primero = false; }
                consulta = consulta + "`URL_Original`=";
                consulta = consulta + URL_Original; }
            if (URL_Afiliado != 'NULL') { if (primero == false) { consulta = consulta + ","; } else { primero = false; }
                consulta = consulta + "`URL_Afiliado`=";
                consulta = consulta + URL_Afiliado; }
            if (Likes != 'NULL') { if (primero == false) { consulta = consulta + ","; } else { primero = false; }
                consulta = consulta + "`Likes`=";
                consulta = consulta + Likes; }
            if (Reportes != 'NULL') { if (primero == false) { consulta = consulta + ","; } else { primero = false; }
                consulta = consulta + "`Reportes`=";
                consulta = consulta + Reportes; }
            if (Activo != 'NULL') { if (primero == false) { consulta = consulta + ","; } else { primero = false; }
                consulta = consulta + "`Activo`=";
                consulta = consulta + Activo; }
            if (Banned != 'NULL') { if (primero == false) { consulta = consulta + ","; } else { primero = false; }
                consulta = consulta + "`Banned`=";
                consulta = consulta + Banned; }
            if (Fecha_Inicio != 'NULL') { if (primero == false) { consulta = consulta + ","; } else { primero = false; }
                consulta = consulta + "`Fecha_Inicio`=";
                consulta = consulta + Fecha_Inicio; }
            if (Fecha_Fin != 'NULL') { if (primero == false) { consulta = consulta + ","; } else { primero = false; }
                consulta = consulta + "`Fecha_Fin`=";
                consulta = consulta + Fecha_Fin; }
            if (ID_Tienda != 'NULL') { if (primero == false) { consulta = consulta + ","; } else { primero = false; }
                consulta = consulta + "`ID_Tienda`=";
                consulta = consulta + ID_Tienda; }
            if (ID_País != 'NULL') { if (primero == false) { consulta = consulta + ","; } else { primero = false; }
                consulta = consulta + "`ID_País`=";
                consulta = consulta + ID_País; }
            if (ID_Categoria_1 != 'NULL') { if (primero == false) { consulta = consulta + ","; } else { primero = false; }
                consulta = consulta + "`ID_Categoria_1`=";
                consulta = consulta + ID_Categoria_1; }
            if (ID_Categoria_2 != 'NULL') { if (primero == false) { consulta = consulta + ","; } else { primero = false; }
                consulta = consulta + "`ID_Categoria_2`=";
                consulta = consulta + ID_Categoria_2; }
            if (ID_Categoria_3 != 'NULL') { if (primero == false) { consulta = consulta + ","; } else { primero = false; }
                consulta = consulta + "`ID_Categoria_3`=";
                consulta = consulta + ID_Categoria_3; }
            if (ID_Categoria_4 != 'NULL') { if (primero == false) { consulta = consulta + ","; } else { primero = false; }
                consulta = consulta + "`ID_Categoria_4`=";
                consulta = consulta + ID_Categoria_4; }
            if (ID_Categoria_5 != 'NULL') { if (primero == false) { consulta = consulta + ","; } else { primero = false; }
                consulta = consulta + "`ID_Categoria_5`=";
                consulta = consulta + ID_Categoria_5; }
            if (ID_Categoria_6 != 'NULL') { if (primero == false) { consulta = consulta + ","; } else { primero = false; }
                consulta = consulta + "`ID_Categoria_6`=";
                consulta = consulta + ID_Categoria_6; }
            if (Fecha_Publicacion != 'NULL') { if (primero == false) { consulta = consulta + ","; } else { primero = false; }
                consulta = consulta + "`Fecha_Publicacion`=";
                consulta = consulta + Fecha_Publicacion; }
            if (ID_Marca != 'NULL') { if (primero == false) { consulta = consulta + ","; } else { primero = false; }
                consulta = consulta + "`ID_Marca`=";
                consulta = consulta + ID_Marca; }
            if (Cupon != 'NULL') { if (primero == false) { consulta = consulta + ","; } else { primero = false; }
                consulta = consulta + "`Cupon`=";
                consulta = consulta + Cupon; }
            consulta = consulta + " WHERE ID_Chollo=" + ID_Chollo;
            console.log(consulta);
            connection.query(consulta, function(err, rows, fields) {
                if (err) {
                    return res.status(400).json("Error al actualizar el chollo");
                } else {
                    return res.status(200).json("Chollo actualizado"); //lo enviamos
                }
                res.json(data);
            });
        }

        connection.release();
    });
});

module.exports = router;