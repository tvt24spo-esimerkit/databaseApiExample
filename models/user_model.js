const db = require('../database');
const bcrypt = require('bcryptjs');
const user ={
    getAllUsers(callback){
        return db.query('SELECT * FROM user',callback);
    },
    getOneUser(id,callback){
        return db.query('SELECT * FROM user WHERE id_user=?',[id],callback);
    },
    addUser(newUser,callback){
        //kryptataan salasana
        bcrypt.hash(newUser.password,10,function(err, hashedPassword){
            return db.query('INSERT INTO user(username,password) VALUES(?,?)',[newUser.username, hashedPassword], callback);
        });
        
    },
    updateUser(id, newData, callback){
        //kryptataan salasana
        bcrypt.hash(newData.password, 10 , function(err,hashedPassword){
            return db.query('UPDATE user SET username=?, password=? WHERE id_user=?',[newData.username, hashedPassword, id], callback);
        });
        
    },
    deleteUser(id, callback){
        return db.query('DELETE FROM user WHERE id_user=?',[id], callback);
    },
    checkPassword(uname, callback){
        return db.query('SELECT password FROM user WHERE username=?',[uname], callback);
    }
}

module.exports=user;