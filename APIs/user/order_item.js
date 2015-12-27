var express = require('express');
var app = express();
var router = express.Router();

var mysql = require('./../config.js');

router.post('/', function(req, res, next) {
    console.log(req.body);
    var group_id=req.body.group_id;
    var member_id= req.body.member_id;
    var order_number= req.body.order_number;
    var order_amount=req.body.order_amount;
    var order_date= req.body.order_date;
    var receiver_name=req.body.receiver_name;
    var receiver_address=req.body.receiver_address;
    var receiver_phone=req.body.receiver_phone;

    var connection = mysql.getConnection();
    var databaseName=mysql.getDatabaseName();
    // var sql='INSERT INTO '+ databaseName
    // + '.member (email,password,gender,cellphone,address,first_name,last_name,joindate,isactive) '
    // +'VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)';
    var sql='INSERT INTO '+ databaseName
    + '.order (group_id,member_id,order_number,order_amount,order_date,receiver_name,receiver_address,receiver_phone) '
    +'VALUES ('
    	+connection.escape(group_id)+','
    	+connection.escape(member_id)+','
    	+connection.escape(order_number)+','
    	+connection.escape(order_amount)+','
    	+connection.escape(order_date)+','
    	+connection.escape(receiver_name)+','
    	+connection.escape(receiver_address)+','
    	+connection.escape(receiver_phone)
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
