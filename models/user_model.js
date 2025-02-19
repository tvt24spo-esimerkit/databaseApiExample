const db = require('../database');
const user ={
    getAllUsers(callback){
        return db.query('SELECT * FROM user',callback);
    },
    getOneUser(id,callback){
        return db.query('SELECT * FROM user WHERE id_user=?',[id],callback);
    },
    addUser(newUser,callback){
        return db.query('INSERT INTO user(username,password) VALUES(?,?)',[newUser.username, newUser.password], callback);
    },
    updateUser(id, newData, callback){
        return db.query('UPDATE user SET username=?, password=? WHERE id_user=?',[newData.username, newData.password id], callback);
    },
    deleteUser(id, callback){
        return db.query('DELETE FROM user WHERE id_user=?',[id], callback);
    }
}

module.exports=user;