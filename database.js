const mysql = require('mysql2');

//luodaan yhteys-string
let connectionString='mysql://restuser:restpass@127.0.0.1:3306/library';
const connection=mysql.createPool(connectionString);

module.exports=connection;

//Mysql palvelimelle on luotava edellä määritelty käyttäjä
//CREATE USER restuser@localhost IDENTIFIED BY 'restpass';
//GRANT ALL ON library.* TO restuser@localhost;