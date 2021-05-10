var express = require("express");
const mysql = require ('mysql');
const conf = require('./conf.json');
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

const QUERY = "SELECT * FROM `car-parks` where `Type of car park` = 'Free' order by `Car park name`";    //Changed: car-parks1 is the original
const QUERY1 = "SELECT * FROM `car-parks`order by `Car park name`";          //Changed: car-parks1 is the original
const QUERY2 = "SELECT * FROM `car-parks` where `Type of car park`<>'Free' order by `Car park name`";  //Added - not equal to Free

const QUERY4 = "SELECT `Car park name`, `Type of car park`, `Area name`, \
substring_index(geo_point_2d,',',1) AS lat, \
substring_index(geo_point_2d,',',-1) AS lon, \
SQRT( \
    POW(69.1 * ((SELECT lat) - ?), 2) + \
    POW(69.1 * (? - (SELECT lon)) * COS((SELECT lat) / 57.3), 2)) AS distance \
FROM `car-parks` \
where `Type of car park`<>'Free' \
ORDER BY distance \
LIMIT 1 ";                                         //QUERY for geo location - Paid

const QUERY5 = "SELECT `Car park name`, `Type of car park`, `Area name`, \
substring_index(geo_point_2d,',',1) AS lat, \
substring_index(geo_point_2d,',',-1) AS lon, \
SQRT( \
    POW(69.1 * ((SELECT lat) - ?), 2) + \
    POW(69.1 * (? - (SELECT lon)) * COS((SELECT lat) / 57.3), 2)) AS distance \
FROM `car-parks` \
where `Type of car park`= 'Free' \
ORDER BY distance \
LIMIT 1 ";                                          //Query geo location - Free

const QUERY6 = "SELECT `Car park name`, `Type of car park`, `Area name`, \
substring_index(geo_point_2d,',',1) AS lat, \
substring_index(geo_point_2d,',',-1) AS lon, \
SQRT( \
    POW(69.1 * ((SELECT lat) - ?), 2) + \
    POW(69.1 * (? - (SELECT lon)) * COS((SELECT lat) / 57.3), 2)) AS distance \
FROM `car-parks` \
where `Type of car park`<>'Free' \
ORDER BY distance \
LIMIT 3 ";                                         //QUERY for geo location - Paid

const QUERY7 = "SELECT `Car park name`, `Type of car park`, `Area name`, \
substring_index(geo_point_2d,',',1) AS lat, \
substring_index(geo_point_2d,',',-1) AS lon, \
SQRT( \
    POW(69.1 * ((SELECT lat) - ?), 2) + \
    POW(69.1 * (? - (SELECT lon)) * COS((SELECT lat) / 57.3), 2)) AS distance \
FROM `car-parks` \
where `Type of car park`= 'Free' \
ORDER BY distance \
LIMIT 3 ";                                          //Query geo location - Free

const QUERY8 = "SELECT `Car park name`, `Type of car park`, `Area name`, \
substring_index(geo_point_2d,',',1) AS lat, \
substring_index(geo_point_2d,',',-1) AS lon, \
SQRT( \
    POW(69.1 * ((SELECT lat) - ?), 2) + \
    POW(69.1 * (? - (SELECT lon)) * COS((SELECT lat) / 57.3), 2)) AS distance \
FROM `car-parks` \
where `Type of car park`<>'Free' \
ORDER BY distance \
LIMIT 5 ";                                         //QUERY for geo location - Paid

const QUERY9 = "SELECT `Car park name`, `Type of car park`, `Area name`, \
substring_index(geo_point_2d,',',1) AS lat, \
substring_index(geo_point_2d,',',-1) AS lon, \
SQRT( \
    POW(69.1 * ((SELECT lat) - ?), 2) + \
    POW(69.1 * (? - (SELECT lon)) * COS((SELECT lat) / 57.3), 2)) AS distance \
FROM `car-parks` \
where `Type of car park`= 'Free' \
ORDER BY distance \
LIMIT 5 ";                                          //Query geo location - Free


var app = express();

app.set("view engine" , "ejs");
app.use(express.static('static'));

app.get("/index%20copy.html",function(request,response){
    response.render("index");
});

app.get("/index.html",function(request,response){
    response.render("index");
});

app.get("/free.html",function(request,response){

    connection.query(QUERY, [request.query], function(err, rows, fields) {
        if (err) throw err;
        
        response.render("free",{'rows' : rows });
    });
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

app.get("/mappaid.html", function (request, response) {                 //map displaying paid
    // var lat = request.query.lat, lon = request.query.lon;
    connection.query(QUERY2, function (err, rows, fields) {
        if (err) {
            response.status(500);
            response.send(err);
        }
        else {
            response.render("mappaid", {'rows': rows });
        }
    });
});

app.get("/mapfree.html", function (request, response) {                 //map displaying free 
    // var lat = request.query.lat, lon = request.query.lon;
    connection.query(QUERY, function (err, rows, fields) {
        if (err) {
            response.status(500);
            response.send(err);
        }
        else {
            response.render("mapfree", {'rows': rows });
        }
    });
});


app.get("/paid.html",function(request,response){

    connection.query(QUERY2, [request.query], function(err, rows, fields) {
        if (err) throw err;
        
        response.render("paid",{'rows' : rows });
    });
});

app.get("/type.html",function(request,response){

    connection.query(QUERY1, [request.query.Type], function(err, rows, fields) {
        if (err) throw err;
        
        response.render("type",{'rows' : rows });
    });

/*    connection.query(QUERY2, [request.query.Type], function(err, rows, fields) {
        if (err) throw err;
        
        response.render("paid",{'rows' : rows });
    }); 
*/
});

app.get("/nearestpaid.html", function(request, response) {                      //GEO LOCATION - nearest free
    var userLat = parseFloat(request.query.lat);
    var userLon = parseFloat(request.query.lon);
    connection.query(QUERY4, [userLat,userLon], function(err, rows, fields) {
        if (err) {
            response.status(500);
            response.send(err);
        }
        else response.render("nearestpaid", { 'rows': rows });
    });
});

app.get("/nearestfree.html", function(request, response) {                      //GEO LOCATION -nearest paid
    var userLat = parseFloat(request.query.lat);
    var userLon = parseFloat(request.query.lon);
    connection.query(QUERY5, [userLat,userLon], function(err, rows, fields) {
        if (err) {
            response.status(500);
            response.send(err);
        }
        else response.render("nearestfree", { 'rows': rows });
    });
});

app.get("/nearerpaid.html", function(request, response) {                      //GEO LOCATION - nearest free
    var userLat = parseFloat(request.query.lat);
    var userLon = parseFloat(request.query.lon);
    connection.query(QUERY6, [userLat,userLon], function(err, rows, fields) {
        if (err) {
            response.status(500);
            response.send(err);
        }
        else response.render("nearerpaid", { 'rows': rows });
    });
});

app.get("/nearerfree.html", function(request, response) {                      //GEO LOCATION -nearest paid
    var userLat = parseFloat(request.query.lat);
    var userLon = parseFloat(request.query.lon);
    connection.query(QUERY7, [userLat,userLon], function(err, rows, fields) {
        if (err) {
            response.status(500);
            response.send(err);
        }
        else response.render("nearerfree", { 'rows': rows });
    });
});

app.get("/nearpaid.html", function(request, response) {                      //GEO LOCATION - nearest free
    var userLat = parseFloat(request.query.lat);
    var userLon = parseFloat(request.query.lon);
    connection.query(QUERY8, [userLat,userLon], function(err, rows, fields) {
        if (err) {
            response.status(500);
            response.send(err);
        }
        else response.render("nearpaid", { 'rows': rows });
    });
});

app.get("/nearfree.html", function(request, response) {                      //GEO LOCATION -nearest paid
    var userLat = parseFloat(request.query.lat);
    var userLon = parseFloat(request.query.lon);
    connection.query(QUERY9, [userLat,userLon], function(err, rows, fields) {
        if (err) {
            response.status(500);
            response.send(err);
        }
        else response.render("nearfree", { 'rows': rows });
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

if(process.env.NODE_ENV!='test') {
    app.listen(conf[process.env.NODE_ENV].port);
    //console.log("Server running on port %s,", conf[process.env.NODE_ENV].port);
    console.log("Server running on http://localhost:%s", conf[process.env.NODE_ENV].port);
}
//export for testing
exports.app = app;
exports.connection = connection;