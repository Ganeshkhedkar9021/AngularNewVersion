//console.log("This is route file")
module.exports = function(app,dbconn){
    console.log("This is route file");
   var userController = require('../controllers/usersController')(dbconn);
    app.get('/users',userController.getUsers);
    app.post('/adduser',userController.addUser);
    

}