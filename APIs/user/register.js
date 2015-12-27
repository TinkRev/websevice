var express = require('express');
var app = express();
var router = express.Router();

var mysql = require('./../config.js');

router.post('/', function(req, res, next) {
    console.log(req.body);
    var email=req.body.email;
    var password= req.body.password;
    var gender= req.body.gender;
    var cellphone= req.body.cellphone;
    var address=req.body.address;
    var first_name=req.body.first_name;
    var last_name=req.body.last_name;
    var joindate=req.body.joindate;
    var isactive='false';

    var connection = mysql.getConnection();
    var databaseName=mysql.getDatabaseName();
    console.log(joindate);
    // var sql='INSERT INTO '+ databaseName
    // + '.member (email,password,gender,cellphone,address,first_name,last_name,joindate,isactive) '
    // +'VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)';
    var sql='INSERT INTO '+ databaseName
    + '.member (email,password,gender,cellphone,address,first_name,last_name,joindate,isactive) '
    +'VALUES ('
    	+connection.escape(email)+','
    	+connection.escape(password)+','
    	+connection.escape(gender)+','
    	+connection.escape(cellphone)+','
    	+connection.escape(address)+','
    	+connection.escape(first_name)+','
    	+connection.escape(last_name)+','
    	+connection.escape(joindate)+','
    	+connection.escape(isactive)
    	+')';

    connection.query(sql,/*[email],[password],[gender],[cellphone],[address],[first_name],[last_name],[joindate],[isactive],*/ function(err, results) {
        if(results){
        	res.send(true);
        }else{
        	console.log(err);
        }
        
        

    });
});
module.exports = router;
