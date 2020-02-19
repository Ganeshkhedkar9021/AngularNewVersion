module.exports = function(db){
    return{
        getUsers:function(req,res){
            db.query("SELECT * FROM users", function (err, result, fields) {
                if (err) throw err;
                res.send({error:false,result:result,message:'code updated successfully !'});
            });
           //console.log("This is get user function"); 
        },
        addUser:function(req,res){
           var userdata = req.body;
           console.log(userdata);
           if(!userdata.id){
                var sql = `INSERT INTO users (firstname, lastname,email,status) VALUES ('${userdata.firstname}', '${ userdata.lastname}','${userdata.email}','${userdata.status}')`;
                db.query(sql, function (err, result) {
                    if (err) throw err;
                    res.send({error:false,result:result,message:'code updated successfully !'});
                });
           }
           else{
                var sql = `Update users SET firstname='${userdata.firstname}',lastname='${ userdata.lastname}',email='${userdata.email}',status='${userdata.status}'`;
                 //console.log(sql);
                db.query(sql, function (err, result) {
                    if (err) throw err;
                    res.send({error:false,result:result,message:'code updated successfully !'});
                });   
           }
          
        }
    }
}