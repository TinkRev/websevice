var mysql = require('mysql');

var host = "localhost";
var user = "root";
var password = "root";
var databaseName = "countmein";

var connection = mysql.createConnection({
    host: host,
    user: user,
    password: password,
    database: databaseName
});

module.exports = {
    getConnection: function() {
        // connection.connect(function(err) {
        //     if (err) {
        //         console.error('error connecting: ' + err.stack);
        //         return;
        //     }

        //     console.log('connected as id ' + connection.threadId);
        // });
        return connection;
    },
    getDatabaseName: function(){
    	return databaseName;
    }
};
