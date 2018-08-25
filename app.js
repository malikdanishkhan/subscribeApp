// importing packages
var express = require('express');
var app = express();
var mysql = require('mysql');
var bodyParser = require("body-parser");
var cookieParser = require('cookie-parser');
var flash = require('connect-flash');
var session = require('express-session');
const sgMail = require('@sendgrid/mail');

// const { Pool, Client } = require('pg')

app.use(cookieParser('secret'));
app.use(session({cookie: { maxAge: 60000 }}));
app.use(flash());

// to access req.body (accessing data that is input by user)
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + "/public"));

app.set("view engine", "ejs");

//establish node.js connection to database for accessing
mysql://bf1920e1864032:901617e5@us-cdbr-iron-east-01.cleardb.net/heroku_1961c11779a1f40?reconnect=true

var connection = mysql.createConnection({
    host     : 'us-cdbr-iron-east-01.cleardb.net',
    user     : 'bf1920e1864032',
    password : '901617e5',
    database : 'heroku_1961c11779a1f40'
});


//route to home-page
app.get("/", function(req, res){
  var q = 'SELECT COUNT(*) AS users FROM list';
 
  connection.query(q , function(err, result) {
  console.log(err);
  console.log(result);
  //res.send("We have " + result[0].users + " users.");
  // sends the requested data to front-end (html)
  res.render("home", {data: result[0].list});
  console.log("Someone requested the user page!");
 });
});


//route to post request
app.post("/subscribe", function(req, res) {
    
    //store the input email into an object
    var person = {
        email: req.body.email
    }
    
    //check if email is already in database
    connection.query('SELECT COUNT(*) AS count FROM list WHERE email LIKE ?', person.email, function(err, result){
         if (err) throw err;
            console.log("here is the email count " + req.body.email);
            
            //if email-count in database is 0, then add email to database
            //else send user an error message
            if(result[0].count==0){
                connection.query('INSERT INTO list SET ?', person, function(err, result){
                if (err) throw err;
                });
                
                // sgMail.setApiKey(process.env.SENDGRID_API_KEY);
                // const msg = {
                // to: req.body.email,
                // from: 'malik083@morris.umn.edu',
                // subject: 'SUBSCRIPTION CONFIRMATION',
                // text: 'Thank you for subscribing!',
                // html: '<strong>and easy to do anywhere, even with Node.js</strong>',
                // };
                // sgMail.send(msg);
                
                req.flash('success', 'Thank you for subscribing.');
                res.locals.messageSuccess = req.flash();
                res.render('index');
            }
            else{
            console.log("duplicate email");
            req.flash('fail', 'Email has already subscribed.');
            res.locals.messageFail = req.flash();
            res.render('index');
            }
    });
});

//server is listening
// app.listen(8080, function(){
//     console.log("Server running on 8080!");
// });

app.listen(process.env.PORT, process.env.IP);


