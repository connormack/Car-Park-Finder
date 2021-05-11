var express = require("express");
const mysql = require ('mysql');
const conf = require('./conf.json');
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

/* QUERY1 called when the user chooses the "Find type" option within the local navigation. 
This query is utilized to return all type of car parks within type.ejs - UC3 */
const QUERY = "SELECT * FROM `car-parks` where `Type of car park` = ? ";
const QUERY1 = "SELECT * FROM `car-parks` order by `Car park name` ";
const QUERY2= "SELECT * FROM `car-parks` where `Area Name` = ? order by `Car park name` ";

/* QUERY3 and QUERY4 called when the user wants to access the table of Free and Paid car parks
by clicking the corresponding button of the contextual-navigation within the type.ejs template. - UC3 */
const QUERY3 = "SELECT * FROM `car-parks` where `Type of car park` = 'Free' order by `Car park name`";
const QUERY4 = "SELECT * FROM `car-parks` where `Type of car park`<>'Free' order by `Car park name`";

/* QUERY5 to QUERY10 are a set of queries that access the apporpiate data from the database,
considering the user's current location. These queries are accessed when the user selects the 
5,3,1 nearest free or paid car parks in the dropdown menu. As an example, QUERY5 access the NOT Free car parks that are 
ordered by distance and limited to one, resulting in to obtain the nearest paid car park - UC3 */
const QUERY5 = "SELECT `Car park name`, `Type of car park`, `Area name`, \
substring_index(geo_point_2d,',',1) AS lat, \
substring_index(geo_point_2d,',',-1) AS lon, \
SQRT( \
    POW(69.1 * ((SELECT lat) - ?), 2) + \
    POW(69.1 * (? - (SELECT lon)) * COS((SELECT lat) / 57.3), 2)) AS distance \
FROM `car-parks` \
where `Type of car park`<>'Free' \
ORDER BY distance \
LIMIT 1 ";                                        

const QUERY6 = "SELECT `Car park name`, `Type of car park`, `Area name`, \
substring_index(geo_point_2d,',',1) AS lat, \
substring_index(geo_point_2d,',',-1) AS lon, \
SQRT( \
    POW(69.1 * ((SELECT lat) - ?), 2) + \
    POW(69.1 * (? - (SELECT lon)) * COS((SELECT lat) / 57.3), 2)) AS distance \
FROM `car-parks` \
where `Type of car park`= 'Free' \
ORDER BY distance \
LIMIT 1 ";                                          

const QUERY7 = "SELECT `Car park name`, `Type of car park`, `Area name`, \
substring_index(geo_point_2d,',',1) AS lat, \
substring_index(geo_point_2d,',',-1) AS lon, \
SQRT( \
    POW(69.1 * ((SELECT lat) - ?), 2) + \
    POW(69.1 * (? - (SELECT lon)) * COS((SELECT lat) / 57.3), 2)) AS distance \
FROM `car-parks` \
where `Type of car park`<>'Free' \
ORDER BY distance \
LIMIT 3 ";                                        

const QUERY8 = "SELECT `Car park name`, `Type of car park`, `Area name`, \
substring_index(geo_point_2d,',',1) AS lat, \
substring_index(geo_point_2d,',',-1) AS lon, \
SQRT( \
    POW(69.1 * ((SELECT lat) - ?), 2) + \
    POW(69.1 * (? - (SELECT lon)) * COS((SELECT lat) / 57.3), 2)) AS distance \
FROM `car-parks` \
where `Type of car park`= 'Free' \
ORDER BY distance \
LIMIT 3 ";                                       

const QUERY9 = "SELECT `Car park name`, `Type of car park`, `Area name`, \
substring_index(geo_point_2d,',',1) AS lat, \
substring_index(geo_point_2d,',',-1) AS lon, \
SQRT( \
    POW(69.1 * ((SELECT lat) - ?), 2) + \
    POW(69.1 * (? - (SELECT lon)) * COS((SELECT lat) / 57.3), 2)) AS distance \
FROM `car-parks` \
where `Type of car park`<>'Free' \
ORDER BY distance \
LIMIT 5 ";                                       

const QUERY10 = "SELECT `Car park name`, `Type of car park`, `Area name`, \
substring_index(geo_point_2d,',',1) AS lat, \
substring_index(geo_point_2d,',',-1) AS lon, \
SQRT( \
    POW(69.1 * ((SELECT lat) - ?), 2) + \
    POW(69.1 * (? - (SELECT lon)) * COS((SELECT lat) / 57.3), 2)) AS distance \
FROM `car-parks` \
where `Type of car park`= 'Free' \
ORDER BY distance \
LIMIT 5 ";                                        

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

/* Request handler with callback function that access the free car parks of the database through QUERY3,
followed by a response handler that returns the appropriate data in form of a table - UC3 */
app.get("/free.html",function(request,response){

    connection.query(QUERY3, [request.query], function(err, rows, fields) {
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

/* Request handler with callback function that access the paid car parks of the database through QUERY4,
followed by a response handler that returns the appropriate data that will be presented on the map 
provided by mappaid.ejs - UC3 */
app.get("/mappaid.html", function (request, response) {                 
    // var lat = request.query.lat, lon = request.query.lon;
    connection.query(QUERY4, function (err, rows, fields) {
        if (err) {
            response.status(500);
            response.send(err);
        }
        else {
            response.render("mappaid", {'rows': rows });
        }
    });
});

/* Request handler with callback function that access the free car parks of the database through QUERY3,
followed by a response handler that returns the appropriate data that will be presented on the map 
provided by mapfree.ejs - UC3 */
app.get("/mapfree.html", function (request, response) {                 
    // var lat = request.query.lat, lon = request.query.lon;
    connection.query(QUERY3, function (err, rows, fields) {
        if (err) {
            response.status(500);
            response.send(err);
        }
        else {
            response.render("mapfree", {'rows': rows });
        }
    });
});

/* Request handler with callback function that access the paid car parks of the database through QUERY4,
followed by a response handler that returns the appropriate data in form of a table - UC3 */
app.get("/paid.html",function(request,response){

    connection.query(QUERY4, [request.query], function(err, rows, fields) {
        if (err) throw err;
        
        response.render("paid",{'rows' : rows });
    });
});

/* Request handler with callback function that access all the car parks of the database through QUERY1,
followed by a response handler that returns the appropriate data in form of a table - UC3 */
app.get("/type.html",function(request,response){

    connection.query(QUERY1, [request.query.Type], function(err, rows, fields) {
        if (err) throw err;
        
        response.render("type",{'rows' : rows });
    });
});

/* Request handler with callback function that access the 1 nearest paid car parks of the database through QUERY5,
followed by a response handler that returns the appropriate data in form of a table. This method requires to convert
the extracted lat & lon strings to floating point numbers with parseFloat(). - UC3 */
app.get("/nearestpaid.html", function(request, response) {                     
    var userLat = parseFloat(request.query.lat);
    var userLon = parseFloat(request.query.lon);
    connection.query(QUERY5, [userLat,userLon], function(err, rows, fields) {
        if (err) {
            response.status(500);
            response.send(err);
        }
        else response.render("nearestpaid", { 'rows': rows });
    });
});

/* Request handler with callback function that access the 1 nearest free car parks of the database through QUERY6,
followed by a response handler that returns the appropriate data in form of a table. This method requires to convert
the extracted lat & lon strings to floating point numbers with parseFloat(). - UC3 */
app.get("/nearestfree.html", function(request, response) {                     
    var userLat = parseFloat(request.query.lat);
    var userLon = parseFloat(request.query.lon);
    connection.query(QUERY6, [userLat,userLon], function(err, rows, fields) {
        if (err) {
            response.status(500);
            response.send(err);
        }
        else response.render("nearestfree", { 'rows': rows });
    });
});

/* Request handler with callback function that access the 3 nearest paid car parks of the database through QUERY7,
followed by a response handler that returns the appropriate data in form of a table. This method requires to convert
the extracted lat & lon strings to floating point numbers with parseFloat(). - UC3 */
app.get("/nearerpaid.html", function(request, response) {                      
    var userLat = parseFloat(request.query.lat);
    var userLon = parseFloat(request.query.lon);
    connection.query(QUERY7, [userLat,userLon], function(err, rows, fields) {
        if (err) {
            response.status(500);
            response.send(err);
        }
        else response.render("nearerpaid", { 'rows': rows });
    });
});

/* Request handler with callback function that access the 3 nearest free car parks of the database through QUERY8,
followed by a response handler that returns the appropriate data in form of a table. This method requires to convert
the extracted lat & lon strings to floating point numbers with parseFloat(). - UC3 */
app.get("/nearerfree.html", function(request, response) {                      
    var userLat = parseFloat(request.query.lat);
    var userLon = parseFloat(request.query.lon);
    connection.query(QUERY8, [userLat,userLon], function(err, rows, fields) {
        if (err) {
            response.status(500);
            response.send(err);
        }
        else response.render("nearerfree", { 'rows': rows });
    });
});

/* Request handler with callback function that access the 5 nearest paid car parks of the database through QUERY9,
followed by a response handler that returns the appropriate data in form of a table. This method requires to convert
the extracted lat & lon strings to floating point numbers with parseFloat(). - UC3 */
app.get("/nearpaid.html", function(request, response) {                      
    var userLat = parseFloat(request.query.lat);
    var userLon = parseFloat(request.query.lon);
    connection.query(QUERY9, [userLat,userLon], function(err, rows, fields) {
        if (err) {
            response.status(500);
            response.send(err);
        }
        else response.render("nearpaid", { 'rows': rows });
    });
});

/* Request handler with callback function that access the 5 nearest free car parks of the database through QUERY10,
followed by a response handler that returns the appropriate data in form of a table. This method requires to convert
the extracted lat & lon strings to floating point numbers with parseFloat(). - UC3 */
app.get("/nearfree.html", function(request, response) {                      
    var userLat = parseFloat(request.query.lat);
    var userLon = parseFloat(request.query.lon);
    connection.query(QUERY10, [userLat,userLon], function(err, rows, fields) {
        if (err) {
            response.status(500);
            response.send(err);
        }
        else response.render("nearfree", { 'rows': rows });
    });
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