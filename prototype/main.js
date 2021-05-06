var express = require("express");
const mysql = require ('mysql');
const conf = require('./conf.json');
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

const QUERY = "SELECT * FROM `car-parks` where `Type of car park` = ? ";
const QUERY1 = "SELECT * FROM `car-parks` order by `Car park name` ";
const QUERY2= "SELECT * FROM `car-parks` where `Area Name` = ? order by `Car park name` ";

var app = express();

app.set("view engine" , "ejs");
app.use(express.static('static'));

//Function for error message
function internalServerError(response, err) {
    response.status(500);
    response.send(err);
}
//callback function for splash page request handler
function splash(request, response) {
    response.render("index");
}

app.get("/index%20copy.html",splash);

app.get("/",splash);

app.get("/index.html",splash);

app.get("/free.html",function(request,response){
    response.render("free", request, respsone);
});

app.get("/location.html",function(request,response){
    response.render("location");
});

app.get("/map.html", function (request, response) {
    // var lat = request.query.lat, lon = request.query.lon;
    connection.query(QUERY1, function (err, rows, fields) {
        if (err) {
            response.status(500);
            response.send(err);
        }
        else {
            response.render("map", {'rows': rows });
        }
    });
});

app.get("/paid.html",function(request,response){
    response.render("paid", request, respsone);
});

app.get("/type.html",function(request,response){

    connection.query(QUERY, [request.query.Type], function(err, rows, fields) {
        if (err) throw err;
        
        response.render("type",{'rows' : rows });
    });

    // connection.query(QUERY1, [request.query.Paid], function(err, rows, fields) {
    //     if (err) throw err;
        
    //     response.render("paid",{'rows' : rows });
    // });

});


app.get("/table.html",function(request,response){
    connection.query(QUERY2, [request.query.option], function(err, rows, fields) {
        if (err) internalServerError(response, err) ;
        response.render("table",{'rows':rows});
    });
});

app.get("/showall.html", function(request, response){
    connection.query(QUERY1, [request.query], function(err, rows, fields) {
        if (err) internalServerError(response, err);
        response.render("showall", {"rows": rows});
    });
});


var connection = mysql.createConnection(conf[process.env.NODE_ENV].db);

connection.connect(function(err){
	if (err) {
    	console.error("Connection error: ", err.message);    
	} else {
    	console.log("Connected as: ", connection.threadId);    
	}
});

if(process.env.NODE_ENV!='test'){
app.listen(conf[process.env.NODE_ENV].port);
//console.log("Server running on port %s,", conf[process.env.NODE_ENV].port);
console.log("Server running on http://localhost:%s", conf[process.env.NODE_ENV].port);
}

//export for testing
exports.app = app;
exports.connection = connection;
exports.splash= splash;