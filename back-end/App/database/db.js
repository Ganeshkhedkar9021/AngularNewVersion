var mysql = require('mysql');

module.exports={
    connect:function(callback){
        var connection = mysql.createConnection({
            host:"localhost",
            user:"root",
            password:"",
            database:"testdatabse"

        });

        connection.connect(function(err){
            if(err){
                throw err;
            }else{
                callback(err,connection);
            }

        });
    }
}