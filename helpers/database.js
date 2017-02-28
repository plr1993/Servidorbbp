var mysql = require('mysql');
var db=null;

module.exports = function () {
    if(!db) {    
         db = mysql.createPool({
                 host     : 'localhost',
                 user     : 'root',
                 password : 'root',
                 database : 'appay_bbdd',
                 port: '3306',
		         socketPath: '/Applications/MAMP/tmp/mysql/mysql.sock',
                 connectionLimit: 10,
                 supportBigNumbers: true,
                 multipleStatements: true
        });
    }
    return db;
};

