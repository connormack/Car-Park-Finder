<<<<<<< HEAD:prototype/backup/views/db-connect.js
const mysql = require ('mysql');
// const QUERY = "SELECT * FROM `car-parks1` where `Type of car park` = 'free';";

const QUERY = "SELECT * FROM `car-parks1` where `Type of car park` = ? ";

var connection = mysql.createConnection({
    "host"     : "localhost",
    "user"     : "root",
    "password" : "root",
    "database" : "isd"
});

connection.connect(function(err){
	if (err) {
    	console.error("Connection error: ", err.message);    
	} else {
    	console.log("Connected as: ", connection.threadId);    
	}
});

connection.query(QUERY, ["Free"], function(err, rows, fields) {
    if (err) throw err;
    for (var i=0; i<rows.length; i++) {
        // change these attributes to those in your database
        console.log(rows[i].OBJECTID, rows[i].Name, rows[i]["Car park name"]);
    }
});



=======
const mysql = require ('mysql');
// const QUERY = "SELECT * FROM `car-parks1` where `Type of car park` = 'free';";

const QUERY = "SELECT * FROM `car-parks1` where `Type of car park` = ? ";

var connection = mysql.createConnection({
    "host"     : "localhost",
    "user"     : "root",
    "password" : "root",
    "database" : "isd"
});

connection.connect(function(err){
	if (err) {
    	console.error("Connection error: ", err.message);    
	} else {
    	console.log("Connected as: ", connection.threadId);    
	}
});

connection.query(QUERY, ["Free"], function(err, rows, fields) {
    if (err) throw err;
    for (var i=0; i<rows.length; i++) {
        // change these attributes to those in your database
        console.log(rows[i].OBJECTID, rows[i].Name, rows[i]["Car park name"]);
    }
});



>>>>>>> 5ddbc35425df6d9bf8f8ad697a3a1ea5114668c2:views/db-connect.js
connection.end();