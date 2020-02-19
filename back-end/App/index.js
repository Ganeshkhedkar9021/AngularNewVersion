var express = require('express');
var app = express();
var bodyparser = require('body-parser');
var cors = require('cors');
var db = require('./database/db')


// support parsing of application/json type post data
app.use(bodyparser.json());

//support parsing of application/x-www-form-urlencoded post data
app.use(bodyparser.urlencoded({ extended: true }));
app.use(cors());
db.connect(function(err, dbconn){
    if(err){
        throw err;
    }else{
        require('./routes/users')(app,dbconn)
        app.listen(3001, function () {
            console.log("App is listening on port:" + 3000);
        })  
    // app.createServer(function (req, res) {
       
    // }).listen(8080);

    
     console.log("Databse is connected");
    }

})



