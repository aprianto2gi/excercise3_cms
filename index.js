const express = require("express");
const app = express();
var path = require("path");

var ecommerce = require("./routes/ecom");

var conn = require("express-myconnection");
var mysql = require("mysql");

app.set('port', process.env.port || 8000);
app.set('view engine','ejs');

app.use("/public", express.static(path.join(__dirname, "public")));

app.use(conn(
    mysql,{
        host:"localhost",
        user:"root",
        password:"",
        database:"exercises3_db"
    }, "single"
));

app.get("/",ecommerce.home);
app.get("/detail/:id",ecommerce.detail);

app.listen(app.get('port'),function(){
    console.log("berjalan di port " + app.get('port'));
});