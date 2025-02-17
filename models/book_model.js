const db = require('../database');
const book ={
    getAllBooks(callback){
        return db.query('SELECT * FROM book',callback);
    },
    getOneBook(id,callback){
        return db.query('SELECT * FROM book WHERE id_book=?',[id],callback);
    },
    addBook(newBook,callback){
        return db.query('INSERT INTO book(name,author,isbn) VALUES(?,?,?)',[newBook.name, newBook.author, newBook.isbn], callback);
    },
    updateBook(id, newData, callback){
        return db.query('UPDATE book SET name=?, author=?, isbn=? WHERE id_book=?',[newData.name, newData.author, newData.isbn, id], callback);
    },
    deleteBook(id, callback){
        return db.query('DELETE FROM book WHERE id_book=?',[id], callback);
    }
}

module.exports=book;