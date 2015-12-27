var express = require('express');
var app = express();
var router = express.Router();

// modules
var mysql = require('mysql');

//connection config of mysql of database 
var databaseName = 'things';
var conn = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: databaseName
});

router.post('/', function(req, res, next) {
	console.log(req);
});
module.exports = router;